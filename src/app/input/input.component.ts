import { Component, OnInit } from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  bandName: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.bandName);
    console.log("ACCESS ID", environment.ACCESS_KEY_ID);
  }

}
