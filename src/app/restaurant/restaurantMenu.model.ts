export class RestaurantMenuModel {
  constructor(
    public itemName: string,
    public itemDescription: string,
    public itemIngrediants: string,
    public itemImage: string,
    public itemPrice: number,
    public itemAvailable: boolean
  ) {
  }

}
