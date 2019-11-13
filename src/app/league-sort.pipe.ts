import { Pipe, PipeTransform } from "@angular/core";
import {BandNameEntry} from "./band.name.entry";

@Pipe({
  name: "leagueSort"
})
export class LeagueSortPipe implements PipeTransform {

  transform(bandNames: BandNameEntry[]): any {
    return bandNames.sort((a, b) => b.rating - a.rating)
      .map((name, index) => ({name: name.name, rating: name.rating, index: index + 1}));
  }

}
