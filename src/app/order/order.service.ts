import {Injectable} from '@angular/core'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order} from './order.model'
import {Observable} from 'rxjs'
import {Headers, Http, RequestOptions} from '@angular/http'
import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http ) {}

  cartItens(): CartItem[] {
    return this.cartService.items
  }

  remove(item: CartItem) {
    this.cartService.removerItem(item)
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }


  itemsValue() {
    return this.cartService.total()
  }

  checkOrder(order: Order): Observable<String>{
    const  headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post(`${MEAT_API}/orders`,
                              JSON.stringify(order),
                              new RequestOptions({headers: headers}))
      .map(response => response.json())
  }

  clear() {
    this.cartService.clear()
  }
}
