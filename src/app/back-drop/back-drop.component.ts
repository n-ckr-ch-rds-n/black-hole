import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-back-drop',
  templateUrl: './back-drop.component.html',
  styleUrls: ['./back-drop.component.scss']
})
export class BackDropComponent implements OnInit {
  environment = environment;

  rgbValues: number[];
  rgbString: string;

  constructor() {}

  setColourValues(values: number[]): number[] {
    return values.map(colour => {
      return colour === 255
        ? colour - 1
        : colour === 0
          ? colour + 1
          : colour + this.plusOrMinusOne();
    });
  }

  plusOrMinusOne() {
    const index = Math.floor(Math.random() * Math.floor(2));
    return [-1, 1][index];
  }

  ngOnInit() {
    this.rgbValues = [0, 0, 0];
    setInterval(() => {
      this.rgbValues = this.setColourValues(this.rgbValues);
      this.rgbString = `rgb(${this.rgbValues[0]}, ${this.rgbValues[1]}, ${this.rgbValues[2]})`;
      }, 1);
  }

}
