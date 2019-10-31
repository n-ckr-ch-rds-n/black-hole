import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.scss']
})
export class ListerComponent implements OnInit {

  bandNames = ['mad', 'cool', 'painshark'];

  constructor() { }

  ngOnInit() {
  }

}
