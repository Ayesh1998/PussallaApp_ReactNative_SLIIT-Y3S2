import OrderModel from '../models/order-model'

export const ORDERS_ = [
  new OrderModel(
    '126456',
    'tharindarajapakshe@y7mail.com',
    '1500.00',
    'Pending',
    '2020',
    'OCT',
    '08'
  ),
  new OrderModel(
    '125457',
    'tharindarajapakshe@y7mail.com',
    '2400.00',
    'Cancelled',
    '2020',
    'SEP',
    '27'
  ),
  new OrderModel(
    '124458',
    'tharindarajapakshe@y7mail.com',
    '1800.00',
    'Delivered',
    '2020',
    'AUG',
    '28'
  ),
  new OrderModel(
    '123459',
    'tharindarajapakshe@y7mail.com',
    '1900.00',
    'Delivered',
    '2020',
    'JUL',
    '20'
  ),
  new OrderModel(
    '122460',
    'tharindarajapakshe@y7mail.com',
    '1850.00',
    'Cancelled',
    '2020',
    'JUN',
    '18'
  ),
  new OrderModel(
    '121461',
    'tharindarajapakshe@y7mail.com',
    '1850.00',
    'Cancelled',
    '2020',
    'JUN',
    '18'
  )
]

export const ORDERS = [
  {
    orderNo: '126456',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '1500.00',
    status: 'Pending',
    year: '2020',
    month: 'OCT',
    date: '08'
  },
  {
    orderNo: '125457',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '2400.00',
    status: 'Cancelled',
    year: '2020',
    month: 'SEP',
    date: '27'
  },
  {
    orderNo: '124458',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '1800.00',
    status: 'Delivered',
    year: '2020',
    month: 'AUG',
    date: '28'
  },
  {
    orderNo: '123459',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '1900.00',
    status: 'Delivered',
    year: '2020',
    month: 'JUL',
    date: '20'
  },
  {
    orderNo: '122460',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '1850.00',
    status: 'Cancelled',
    year: '2020',
    month: 'JUN',
    date: '18'
  },
  {
    orderNo: '121461',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '1850.00',
    status: 'Cancelled',
    year: '2020',
    month: 'JUN',
    date: '18'
  }
]
