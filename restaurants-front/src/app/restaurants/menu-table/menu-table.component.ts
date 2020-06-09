import { MenuList } from './../../models/menuList.model';
import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'dr-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.css']
})
export class MenuTableComponent implements OnInit {
  @Input() id: number;
  menu: MenuList;

  constructor(private service: RestaurantService) { }

  ngOnInit(): void {
    this.service.getMenus(this.id).subscribe(data => {
      this.menu = data;
    });
  }

}
