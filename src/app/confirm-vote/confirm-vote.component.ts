import { Component, OnInit } from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {VoterService} from "../voter-service/voter-service";

@Component({
  selector: "app-confirm-vote",
  templateUrl: "./confirm-vote.component.html",
  styleUrls: ["./confirm-vote.component.scss"]
})
export class ConfirmVoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmVoteComponent>,
              public voterService: VoterService) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close(false);
  }

}
