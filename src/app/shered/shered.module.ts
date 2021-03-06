import {ModuleWithProviders, NgModule} from '@angular/core'
import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RatingComponent} from './rating/rating.component'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {RestaurantsService} from '../restaurants/restaurants.service'
import {OrderService} from '../order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import {NotificationService} from './messages/notification.service'

@NgModule({
  declarations: [InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent,
    RatingComponent, CommonModule,
    FormsModule, ReactiveFormsModule, SnackbarComponent]
})
export class SheredModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SheredModule,
      providers: [ShoppingCartService, RestaurantsService , OrderService,SnackbarComponent,NotificationService]
    }
  }

}
