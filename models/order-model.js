class OrderModel {
  constructor(orderNo, email, amount, status, year, month, date) {
    this.orderNo = orderNo
    this.email = email
    this.amount = amount
    this.status = status
    this.year = year
    this.month = month
    this.date = date
  }
}

export default OrderModel
