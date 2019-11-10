import { Component, OnInit } from "@angular/core";
import {MatSnackBar} from "@angular/material";
import {VoterService} from "../voter-service/voter-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  accessCode: string;

  constructor(private snackbar: MatSnackBar,
              private voterService: VoterService) { }

  ngOnInit() {
  }

  async login() {
     try {
       await this.voterService.setUser(this.accessCode);
       this.snackbar.open(`Welcome ${this.voterService.user.name}`, "Ok");
     } catch (err) {
       this.snackbar.open(`Apols you don't exist ${this.accessCode}`, "Ok");
     }
  }

}
