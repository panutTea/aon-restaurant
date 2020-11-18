import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Food } from "../food";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-display-menu",
  templateUrl: "./display-menu.component.html",
  styleUrls: ["./display-menu.component.css"]
})
export class DisplayMenuComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}
  @Input() food: Food;
  ngOnInit() {
    this.food = {
      ...this.food
    };
  }
}
