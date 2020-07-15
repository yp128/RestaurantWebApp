import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ResMenuListComponent } from './restaurant/res-menu-list/res-menu-list.component';
import { ResMenuItemComponent } from './restaurant/res-menu-list/res-menu-item/res-menu-item.component';
import { MenuItemDetailComponent } from './restaurant/menu-item-detail/menu-item-detail.component';
import { RestaurantHeaderComponent } from './restaurant/restaurant-header/restaurant-header.component';
import {RestaurantRoutingModule} from './restaurant.routing.module';
import { OrdersComponent } from './restaurant/orders/orders.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RestaurantMenuService} from './restaurant/restaurantMenu.service';
import { EditMenuItemComponent } from './restaurant/edit-menu-item/edit-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    ResMenuListComponent,
    ResMenuItemComponent,
    MenuItemDetailComponent,
    RestaurantHeaderComponent,
    OrdersComponent,
    EditMenuItemComponent
  ],
  imports: [
    BrowserModule,
    RestaurantRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RestaurantMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
