import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  priceFrom: number;
  priceTo: number;
  @Output() priceRangeChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePrice() {
    let priceRange = {
      from: this.priceFrom || 1,
      to: this.priceTo || 5
    }
    this.priceRangeChange.emit(priceRange);
  }

}
