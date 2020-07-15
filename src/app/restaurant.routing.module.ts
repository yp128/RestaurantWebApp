import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {ResMenuListComponent} from './restaurant/res-menu-list/res-menu-list.component';
import {MenuItemDetailComponent} from './restaurant/menu-item-detail/menu-item-detail.component';
import {OrdersComponent} from './restaurant/orders/orders.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {EditMenuItemComponent} from './restaurant/edit-menu-item/edit-menu-item.component';


const appRestaurantRoutes: Routes = [
  {path: '', redirectTo: '/resHome', pathMatch: 'full'},
  {path: 'orders', component: OrdersComponent},
  {path: 'resHome', component: RestaurantComponent, children: [
      {path: '', component: ResMenuListComponent},
      {path: 'addNewItem', component: EditMenuItemComponent},
      {path: ':id', component: MenuItemDetailComponent},
      {path: ':id/edit', component: EditMenuItemComponent}
    ]},
  {path: '**', redirectTo: '/resHome' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRestaurantRoutes)
  ],
  exports: [RouterModule]
})

export class RestaurantRoutingModule {
}
