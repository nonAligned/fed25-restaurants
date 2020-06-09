import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { HeaderComponent } from './core/header/header.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { NavComponent } from './core/nav/nav.component';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { SearchComponent } from './restaurants/search/search.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RatingComponent } from './restaurants/rating/rating.component';
import { MenuTableComponent } from './restaurants/menu-table/menu-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    RestaurantsListComponent,
    NavComponent,
    PaginationComponent,
    SearchComponent,
    RestaurantComponent,
    RatingComponent,
    MenuTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
