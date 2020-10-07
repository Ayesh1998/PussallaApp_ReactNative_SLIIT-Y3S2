import OrderModel from '../models/order-model'

export const ORDERS_ = [
  new OrderModel(
    123456,
    1500.00,
    'Pending',
    2020,
    'OCT',
    10
  ),
  new OrderModel(
    123457,
    2400.00,
    'Cancelled',
    2020,
    'SEP',
    27
  ),
  new OrderModel(
    123458,
    1800.00,
    'Delivered',
    2020,
    'AUG',
    28
  )
]

export const ORDERS = [
  {
    orderNo: 123456,
    amount: 1500.00,
    status: 'Pending',
    year: 2020,
    month: 'OCT',
    date: 10
  },
  {
    orderNo: 123457,
    amount: 2400.00,
    status: 'Cancelled',
    year: 2020,
    month: 'SEP',
    date: 27
  },
  {
    orderNo: 123458,
    amount: 1800.00,
    status: 'Delivered',
    year: 2020,
    month: 'AUG',
    date: 28
  }
]
