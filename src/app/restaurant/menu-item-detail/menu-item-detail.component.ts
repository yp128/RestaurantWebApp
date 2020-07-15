import {Component, Input, OnInit} from '@angular/core';
import {RestaurantMenuModel} from '../restaurantMenu.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RestaurantMenuService} from '../restaurantMenu.service';

@Component({
  selector: 'app-menu-item-detail',
  templateUrl: './menu-item-detail.component.html',
  styleUrls: ['./menu-item-detail.component.css']
})
export class MenuItemDetailComponent implements OnInit {
  id: number;
  @Input() menuItemDetails: RestaurantMenuModel;

  constructor(private  route: ActivatedRoute,
              private router: Router,
              private restaurantMenuService: RestaurantMenuService) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.menuItemDetails = this.restaurantMenuService.getRecipeId(this.id);
      }
    );
  }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  removeItem(): void {
    this.restaurantMenuService.deleteItem(this.id);
    this.router.navigate(['/resHome']);
  }

}
