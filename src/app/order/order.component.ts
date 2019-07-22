import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shered/radio/radio-option.model'
import {OrderService} from './order.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'
import {Router} from '@angular/router'
import {FormBuilder, FormGroup} from '@angular/forms'

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
  constructor(private orderService: OrderService, private  router: Router, private formBulder: FormBuilder) { }

  orderForm: FormGroup

  ngOnInit() {
    this.orderForm = this.formBulder.group({
      name: '',
      email: this.formBulder.control(''),
      emailConfirmation: this.formBulder.control(''),
      andress: this.formBulder.control(''),
      number: this.formBulder.control(''),
      optinalAndress: this.formBulder.control(''),
      paymentOption: this.formBulder.control('')

    })
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
