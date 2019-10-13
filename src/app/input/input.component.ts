import {Component, OnInit} from "@angular/core";
import {BandNameService} from "../band-name-service/band-name-service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  bandName: string;

  constructor(private bandNameService: BandNameService) { }

  ngOnInit() {
  }

  async onSubmit(): Promise<void> {
    await this.bandNameService.putBandName(this.bandName);
  }

}
