import {Component, Input, OnInit} from "@angular/core";
import {BandNameEntry} from "../band.name.entry";
import {BandNameService} from '../band-name-service/band-name-service';

@Component({
  selector: "app-lister",
  templateUrl: "./lister.component.html",
  styleUrls: ["./lister.component.scss"]
})
export class ListerComponent implements OnInit {
  @Input()
  bandNames: BandNameEntry[];

  ratableNames: Array<{name: string, id: string, rating: number, src: string}>;

  constructor(private bandNameService: BandNameService) { }

  ngOnInit() {
    this.ratableNames = this.bandNames.map(bandName => ({
      id: bandName.id,
      name: bandName.name,
      rating: 0,
      src: `https://picsum.photos/900/500?random&t=${Math.random()}`}));
  }

  async vote() {
    for (const name of this.ratableNames.slice(0, 3)) {
      const dbEntry = await this.bandNameService.getBandNameById(name.id);
      const rating = dbEntry.rating ? dbEntry.rating + name.rating : name.rating;
      // update db item with rating
    }
  }

}
