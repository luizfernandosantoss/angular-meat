class Order {
  constructor(
    public andress: string,
    public number: number,
    public optinalAndress: string,
    public paymentOption: string,
    public orderItems: OrderItem[] = []
  ){}

}
class OrderItem {
  constructor(public quantity: number, public menuId: string){}
}

export {Order, OrderItem}
