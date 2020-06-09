import { MenuList } from './../models/menuList.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestaurantList } from '../models/restaurantList.model';

const URL: string = "http://localhost:3000/api/restaurants";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAll(parameters?: any): Observable<RestaurantList> {
    let queryParams = {}
    if(parameters) {
      queryParams = {
        params: new HttpParams()
        .set("page", parameters.page && parameters.page.toString() || "")
        .set("pageSize", parameters.pageSize && parameters.pageSize.toString() || "")
        .set("sort", parameters.sort && parameters.sort.toString() || "")
        .set("sortDirection", parameters.sortDirection && parameters.sortDirection.toString() || "")
        .set("filter", parameters.filter && JSON.stringify(parameters.filter) || "")
      }
    }
    return this.http.get(URL, queryParams).pipe(map(data => {
      return new RestaurantList(data);
    }));
  }

  getMenus(id: number): Observable<MenuList> {
    return this.http.get(URL + '/' + id + '/menus').pipe(map(data => {
      return new MenuList(data);
    }));
  }
}
