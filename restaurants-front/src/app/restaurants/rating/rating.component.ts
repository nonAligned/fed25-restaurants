import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dr-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() type: string;
  @Input() rating: number;
  starFullPath: string = "assets/images/star-full.png";
  starEmptyPath: string = "assets/images/star-empty.png";
  coinFullPath: string = "assets/images/coin-full.png";
  coinEmptyPath: string = "assets/images/coin-empty.png";
  emptyArray;
  fullArray;

  constructor() { }

  ngOnInit(): void {
    this.fullArray = new Array(this.rating);
    this.emptyArray = new Array(5-this.rating);
  }

}
