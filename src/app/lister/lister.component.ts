import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.scss']
})
export class ListerComponent implements OnInit {
  @Input()
  bandNames: string[];

  ratableNames: Array<{name: string, rating: number}>;

  constructor() { }

  ngOnInit() {
    this.ratableNames = this.bandNames.map(bandName => ({name: bandName, rating: 0}));
  }

}
