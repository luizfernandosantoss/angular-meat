import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  constructor() { }
  @Input() delevery: number
  @Input() itemsValue: number

  ngOnInit() {
  }
  total(): number{
    return this.delevery + this.itemsValue
  }


}
