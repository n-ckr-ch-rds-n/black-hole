import {Component, OnInit} from "@angular/core";
import {BandNameService} from "../band-name-service/band-name-service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  bandName: string;

  constructor(private bandNameService: BandNameService,
              private snackbar: MatSnackBar) { }

  async ngOnInit() {
  }

  async onSubmit(): Promise<void> {
    if (this.bandName.length && this.bandName.length > 0) {
      try {
        await this.bandNameService.putBandName(this.bandName);
        this.snackbar.open(`${this.bandName} saved`, "OK");
      } catch (err) {
        this.snackbar.open(err.message, "OK");
      }
      this.bandName = "";
    } else {
      this.snackbar.open("That's not a band name!", "OK");
    }
  }

}
