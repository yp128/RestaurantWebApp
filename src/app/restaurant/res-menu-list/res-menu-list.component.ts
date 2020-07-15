import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantMenuModel} from '../restaurantMenu.model';
import {RestaurantMenuService} from '../restaurantMenu.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-res-menu-list',
  templateUrl: './res-menu-list.component.html',
  styleUrls: ['./res-menu-list.component.css']
})
export class ResMenuListComponent implements OnInit, OnDestroy {
  menuList: RestaurantMenuModel[];
  itemSubscription: Subscription;

  constructor(private restaurantMenuService: RestaurantMenuService) {
  }

  ngOnInit(): void {
    this.itemSubscription = this.restaurantMenuService.updateditem.subscribe(
      (menuList: RestaurantMenuModel[]) => {
        this.menuList = menuList;
      }
    );
    this.menuList = this.restaurantMenuService.getMenuList();
  }
  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }

}
