import { Component, OnInit } from "@angular/core";
import {NgForm} from "@angular/forms";

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
  }

}
