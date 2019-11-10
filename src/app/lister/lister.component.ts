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
      rating: bandName.rating,
      src: `https://picsum.photos/900/500?random&t=${Math.random()}`}));
  }

  vote() {
    console.log(this.ratableNames);
    for (const name of this.ratableNames) {
      // get the item from the db
      // check if it already has a rating
      // add it to the current rating or replace undefined
      // update db item with rating
    }
  }

}
