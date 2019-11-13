import { Pipe, PipeTransform } from "@angular/core";
import {BandNameEntry} from "./band.name.entry";

@Pipe({
  name: "leagueSort"
})
export class LeagueSortPipe implements PipeTransform {

  transform(bandNames: BandNameEntry[]): BandNameEntry[] {
    const sorted = bandNames.sort((a, b) => b.rating - a.rating);
    console.log(sorted);
    return bandNames.sort((a, b) => b.rating - a.rating);
  }

}
