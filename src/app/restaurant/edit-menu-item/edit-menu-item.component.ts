import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {RestaurantMenuService} from '../restaurantMenu.service';


@Component({
  selector: 'app-edit-menu-item',
  templateUrl: './edit-menu-item.component.html',
  styleUrls: ['./edit-menu-item.component.css']
})
export class EditMenuItemComponent implements OnInit {
  id: number;
  editable = false;
  addEditItem: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private restaurantMenuService: RestaurantMenuService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editable = params.id != null;
        this.init();
      }
    );
  }

  onSubmit(): void {
    if (this.editable) {
      this.restaurantMenuService.updateItem(this.id, this.addEditItem.value);
      this.router.navigate(['/resHome']);
    }else{
      this.restaurantMenuService.addItem(this.addEditItem.value);
      this.router.navigate(['/resHome']);
    }
  }

  private init(): void  {
    let itemName = '';
    let itemDescription = '';
    let itemPrice: number;
    let itemImage = '';
    let itemAvailibility: boolean;
    let Ingrediants: string;

    if (this.editable) {
      const item = this.restaurantMenuService.getRecipeId(this.id);
      itemName = item.itemName;
      itemDescription = item.itemDescription;
      itemPrice = item.itemPrice;
      Ingrediants = item.itemIngrediants;
      itemImage = item.itemImage;
      itemAvailibility = item.itemAvailable;
    }

    this.addEditItem = new FormGroup({
      itemName: new FormControl(itemName),
      itemDescription: new FormControl(itemDescription),
      itemPrice: new FormControl(itemPrice),
      itemImage: new FormControl(itemImage),
      itemAvailable: new FormControl(true),
      itemIngrediants: new FormControl(Ingrediants)
    });
  }

}
