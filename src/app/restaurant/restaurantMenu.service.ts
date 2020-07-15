import {RestaurantMenuModel} from './restaurantMenu.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class RestaurantMenuService {

  selectedMenuItem = new EventEmitter<RestaurantMenuModel>();
  updateditem = new Subject<RestaurantMenuModel[]>();


  private menuList: RestaurantMenuModel[] = [
    new RestaurantMenuModel('burger', 'bun with a meat patty', 'bun, meat, veggies', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/285px-RedDot_Burger.jpg', 10, false),
    new RestaurantMenuModel('Pizza', 'bun with a meat patty', 'bun, meat, veggies', 'https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2.jpg.webp', 20, true),
    new RestaurantMenuModel('Burrito', 'tortilla roll with stuffing', 'tortila, veggies', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-breakfast-burrito-horizontaljpg-1541624805.jpg?resize=768:*', 15, true),
  ];

  getMenuList(): RestaurantMenuModel[] {
    return this.menuList;
  }

  getRecipeId(index: number): RestaurantMenuModel{
    return this.menuList[index];
  }

  addItem(item: RestaurantMenuModel): void {
    const it = item;
    this.menuList.push(new RestaurantMenuModel(it.itemName,
      it.itemDescription,
      it.itemIngrediants,
      it.itemImage,
      it.itemPrice,
      it.itemAvailable));
    this.updateditem.next(this.menuList.slice());
    console.log(this.menuList);
  }

  updateItem(index: number, updatedItem: RestaurantMenuModel): void {
    this.menuList[index] = updatedItem;
    this.updateditem.next(this.menuList);
  }

  deleteItem(index: number): void {
    this.menuList.splice(index, 1);
  }


}
