class OrderModel {
  constructor(orderNo, email, amount, status, year, month, date, subTotal, deliveryFee, discount) {
    this.orderNo = orderNo
    this.email = email
    this.amount = amount
    this.status = status
    this.year = year
    this.month = month
    this.date = date
    this.subTotal = subTotal
    this.deliveryFee = deliveryFee
    this.discount = discount
  }
}

export default OrderModel
