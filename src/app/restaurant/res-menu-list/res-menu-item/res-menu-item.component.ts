import {Component, Input, OnInit} from '@angular/core';
import {RestaurantMenuModel} from '../../restaurantMenu.model';
import {RestaurantMenuService} from '../../restaurantMenu.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-res-menu-item',
  templateUrl: './res-menu-item.component.html',
  styleUrls: ['./res-menu-item.component.css']
})
export class ResMenuItemComponent implements OnInit {
  @Input() menuItem: RestaurantMenuModel;
  @Input() index: number;

  constructor(private restaurantMenuService: RestaurantMenuService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onEditClick(): void {
    this.router.navigate([this.index, 'edit'], {relativeTo: this.route});
  }


}
