// module

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// firebase

import { AngularFireModule } from "@angular/fire";

// component

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { DisplayMenuComponent } from "./display-menu/display-menu.component";

// service

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    MenuComponent,
    DisplayMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
