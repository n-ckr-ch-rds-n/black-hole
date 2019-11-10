import {Component, Input, OnInit} from "@angular/core";
import {BandNameEntry} from "../band.name.entry";
import {BandNameService} from "../band-name-service/band-name-service";
import {VoterService} from "../voter-service/voter-service";
import {MatSnackBar} from "@angular/material";
import {RatableName} from "../ratable.name";
import {Router} from "@angular/router";

@Component({
  selector: "app-lister",
  templateUrl: "./lister.component.html",
  styleUrls: ["./lister.component.scss"]
})
export class ListerComponent implements OnInit {
  @Input()
  bandNames: BandNameEntry[];

  ratableNames: RatableName[];

  constructor(private bandNameService: BandNameService,
              private voterService: VoterService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.ratableNames = this.bandNames.map(bandName => ({
      id: bandName.id,
      name: bandName.name,
      rating: 0,
      src: `https://picsum.photos/900/500?random&t=${Math.random()}`}));
  }

  async recordVote(): Promise<void> {
    for (const name of this.ratableNames) {
      const dbEntry = await this.bandNameService.getBandNameById(name.id);
      const rating = dbEntry.rating ? dbEntry.rating + name.rating : name.rating;
      await this.bandNameService.updateEntryWithRating(dbEntry.id, rating);
    }
  }

  async updateVoter(): Promise<void> {
    await this.voterService.updateVoter(this.ratableNames);
  }

  async vote() {
    if (this.voterService.user.name === "Admin") {
      this.snackBar.open(`Apols you can't vote, ${this.voterService.user.name}`, "Ok");
    } else if (this.voterService.user.voted) {
      this.snackBar.open(`Apols ${this.voterService.user.name}, you have already voted`, "Ok");
    } else {
      await this.recordVote();
      await this.updateVoter();
      this.snackBar.open(`Thanks for voting, ${this.voterService.user.name}`, "Ok");
      this.voterService.logout();
      await this.router.navigate(["login"]);
    }
  }

}
