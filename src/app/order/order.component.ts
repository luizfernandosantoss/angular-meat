import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shered/radio/radio-option.model'
import {OrderService} from './order.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'
import {Router} from '@angular/router'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
      {label: "Dinheiro", value: "MON"},
      {label: "Cartão de Débito", value: "DEB"},
      {label: "Cartão Refeição", value: "REF"}
  ]
  constructor(private orderService: OrderService, private  router: Router) { }

  ngOnInit() {
  }
  delivery:number = 8
  itemsValue(): number {
    return this.orderService.itemsValue()
  }
  cartItems(): CartItem[] {
    return this.orderService.cartItens()
  }
  increaseQty(item: CartItem){
    return this.orderService.increaseQty(item)
  }
  decreaseQty(item: CartItem){
    return this.orderService.decreaseQty(item)
  }
  remove(item: CartItem){
    this.orderService.remove(item)
  }
  checkOrder(order: Order){
    order.orderItems = this.cartItems().map(
      (item:CartItem)=>new OrderItem(item.quantity,item.menuItem.id)
    )
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])
      console.log(`Compra concluida: ${orderId}`)
      this.orderService.clear()
    })

    console.log(order)
  }




}
