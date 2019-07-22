import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shered/radio/radio-option.model'
import {OrderService} from './order.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'
import {Router} from '@angular/router'
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/
  paymentOptions: RadioOption[] = [
      {label: "Dinheiro", value: "MON"},
      {label: "Cartão de Débito", value: "DEB"},
      {label: "Cartão Refeição", value: "REF"}
  ]
  constructor(private orderService: OrderService, private  router: Router, private formBulder: FormBuilder) { }

  orderForm: FormGroup

  ngOnInit() {
    this.orderForm = this.formBulder.group({
      name: this.formBulder.control('',[Validators.required, Validators.minLength(5)]),
      email: this.formBulder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBulder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      andress: this.formBulder.control('',[Validators.required, Validators.minLength(5)]),
      number: this.formBulder.control('',[Validators.required,Validators.pattern(this.numberPattern)]),
      optinalAndress: this.formBulder.control(''),
      paymentOption: this.formBulder.control('',Validators.required)

    },{validator: OrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined

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
