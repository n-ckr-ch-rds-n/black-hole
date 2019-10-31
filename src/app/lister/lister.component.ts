import { Component, OnInit } from '@angular/core';
import {BandNameService} from '../band-name-service/band-name-service';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.scss']
})
export class ListerComponent implements OnInit {

  bandNames = ['mad', 'cool', 'painshark'];
  bandNamePromise: Promise<string[]>;

  constructor(private bandNameService: BandNameService) { }

  ngOnInit() {
    this.bandNamePromise = this.bandNameService.listBandNames();
  }

}
