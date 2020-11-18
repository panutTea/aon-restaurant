import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Food } from "../food";

@Component({
  selector: "app-display-menu",
  templateUrl: "./display-menu.component.html",
  styleUrls: ["./display-menu.component.css"]
})
export class DisplayMenuComponent implements OnInit {
  constructor() {}
  @Input() food: Food;
  ngOnInit() {}
}
