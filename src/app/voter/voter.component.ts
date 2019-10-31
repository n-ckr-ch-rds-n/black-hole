import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  color = 'accent';
  ratingArr = [1, 2, 3, 4, 5];
  rating = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick(index: number) {
    this.rating = index;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
