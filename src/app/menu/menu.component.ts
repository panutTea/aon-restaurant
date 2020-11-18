import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Food } from "../food";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  foods: Food[];
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getFoods().subscribe(val => {
      this.foods = val;
    });
  }
}
