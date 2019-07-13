import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItem[]
  @Output() incressQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }
  emitIncreaseQty(item: CartItem){
    this.incressQty.emit(item)
  }
  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }
  emitRemove(item: CartItem){
    this.remove.emit(item)
  }
}
