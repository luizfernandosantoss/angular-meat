import {BrowserModule} from '@angular/platform-browser'
import {LOCALE_ID, NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'


import {AppComponent} from './app.component'
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component'
import {HomeComponent} from './home/home.component'
import {ROUTES} from './app.routes'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantComponent} from './restaurants/restaurant/restaurant.component'
import {RestaurantsService} from './restaurants/restaurants.service'
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component'
import {MenuComponent} from './restaurant-detail/menu/menu.component'
import {ShoppingCartComponent} from './restaurant-detail/shopping-cart/shopping-cart.component'
import {MenuItemComponent} from './restaurant-detail/menu-item/menu-item.component'
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component'
import {ShoppingCartService} from './restaurant-detail/shopping-cart/shopping-cart.service'
import {OrderService} from './order/order.service'
import {OrderSummaryComponent} from './order/order-summary/order-summary.component'
import {SheredModule} from './shered/shered.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    SheredModule
  ],
  providers: [RestaurantsService,
    ShoppingCartService,
    OrderService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}],
    bootstrap: [AppComponent]
})
export class AppModule { }
