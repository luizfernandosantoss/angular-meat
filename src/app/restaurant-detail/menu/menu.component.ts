import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../restaurants/restaurants.service'
import {ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs'
import {MenuItem} from '../menu-item/menu-item.model'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private restaurantsService:RestaurantsService,
              private route:ActivatedRoute) { }
  menu: Observable<MenuItem[]>

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }


}
