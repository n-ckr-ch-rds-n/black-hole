import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-lister",
  templateUrl: "./lister.component.html",
  styleUrls: ["./lister.component.scss"]
})
export class ListerComponent implements OnInit {
  @Input()
  bandNames: string[];

  ratableNames: Array<{name: string, rating: number, src: string}>;

  constructor() { }

  ngOnInit() {
    this.ratableNames = this.bandNames.map(bandName => ({
      name: bandName,
      rating: 0,
      src: `https://picsum.photos/900/500?random&t=${Math.random()}`}));
  }

  vote() {
    console.log(this.ratableNames);
  }

}
