import { Pipe, PipeTransform } from "@angular/core";
import {BandNameEntry} from "./band.name.entry";

@Pipe({
  name: "leagueSort"
})
export class LeagueSortPipe implements PipeTransform {

  transform(bandNames: BandNameEntry[]): BandNameEntry[] {
    return bandNames.sort((a, b) => a.rating - b.rating);
  }

}
