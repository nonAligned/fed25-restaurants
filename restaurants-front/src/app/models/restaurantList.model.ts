import { Restaurant } from './restaurant.model';

export class RestaurantList {
    count: number;
    results: Restaurant[]

    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        if (this.count != 0) {
            this.results = obj && obj.results || null;
        } else {
            this.results = [];
        }
    }
}