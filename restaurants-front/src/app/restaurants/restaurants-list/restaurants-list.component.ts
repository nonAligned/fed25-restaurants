import { Component, OnInit } from '@angular/core';
import { RestaurantList } from 'src/app/models/restaurantList.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'dr-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  restaurantsList: RestaurantList;
  parameters = {
    page: 1,
    pageSize: 12,
    sort: "rating",
    sortDirection: "desc",
    filter: {
      cuisine: "",
      priceFrom: 1,
      priceTo: 5
    }
  }

  constructor(private service: RestaurantService, private ar: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ar.params.subscribe(data => {
      let cuisine = data['cuisine'] == 'all'? '' : data['cuisine'];
      this.parameters.filter.cuisine = cuisine;
      this.updateRestaurants();
    });
  }

  updateRestaurants() {
    this.service.getAll(this.parameters).subscribe(data => {
      this.restaurantsList = data;
    });
  }

  updatePage(newPage: number) {
    this.parameters.page = newPage;
    this.updateRestaurants();
  }

  updatePriceRange(newPriceRange: any) {
    this.parameters.filter.priceFrom = newPriceRange.from;
    this.parameters.filter.priceTo = newPriceRange.to;
    this.updateRestaurants();
  }

  openModal(content) {
    this.modalService.open(content);
  }

}
