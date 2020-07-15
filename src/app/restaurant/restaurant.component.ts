import {Component, OnInit} from '@angular/core';
import {RestaurantMenuService} from './restaurantMenu.service';
import {RestaurantMenuModel} from './restaurantMenu.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [RestaurantMenuService]
})
export class RestaurantComponent implements OnInit {

  selectedMenuItem: RestaurantMenuModel;

  constructor(private restaurantMenuService: RestaurantMenuService) {
    this.restaurantMenuService.selectedMenuItem.subscribe(
      (menuItem: RestaurantMenuModel) => {
        this.selectedMenuItem = menuItem;
      }
    );
  }

  ngOnInit(): void {
  }

}
