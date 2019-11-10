import { Component, OnInit } from "@angular/core";
import {MatSnackBar} from "@angular/material";
import {VoterService} from "../voter-service/voter-service";
import {Router} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  accessCode: string;

  constructor(private snackbar: MatSnackBar,
              private voterService: VoterService,
              private router: Router) { }

  ngOnInit() {
  }

  async login() {
     try {
       await this.voterService.setUser(this.accessCode);
       this.snackbar.open(`Welcome ${this.voterService.user.name}`, "Ok");
       await this.router.navigate(["vote"]);
     } catch (err) {
       this.snackbar.open(`Apols you don't exist, ${this.accessCode}`, "Ok");
     }
  }

}
