import OrderModel from '../models/order-model'

export const ORDERS_ = [
  new OrderModel(
    '126456',
    'tharindarajapakshe@y7mail.com',
    '1500.00',
    'Pending',
    '2020',
    'OCT',
    '08',
    '1400.00',
    '100.00',
    '0.00',
    [
      {
        name: 'Australian Lamb 500g',
        unitPrice: '700.00',
        quantity: '2',
        amount: '1400.00'
      }
    ]
  ),
  new OrderModel(
    '125457',
    'tharindarajapakshe@y7mail.com',
    '2400.00',
    'Cancelled',
    '2020',
    'SEP',
    '27',
    '2300.00',
    '100.00',
    '0.00',
    [
      {
        name: 'Australian Lamb 500g',
        unitPrice: '700.00',
        quantity: '2',
        amount: '1400.00'
      },
      {
        name: 'Brown Eggs 10 Pack',
        unitPrice: '300.00',
        quantity: '3',
        amount: '900.00'
      }
    ]
  ),
  new OrderModel(
    '124458',
    'tharindarajapakshe@y7mail.com',
    '1800.00',
    'Delivered',
    '2020',
    'AUG',
    '28',
    '1700.00',
    '100.00',
    '0.00',
    [
      {
        name: 'Chicken Meat Balls 1kg',
        unitPrice: '850.00',
        quantity: '2',
        amount: '1700.00'
      }
    ]
  ),
  new OrderModel(
    '123459',
    'tharindarajapakshe@y7mail.com',
    '1900.00',
    'Delivered',
    '2020',
    'JUL',
    '20',
    '1750.00',
    '150.00',
    '0.00',
    [
      {
        name: 'Chicken Meat Balls 1kg',
        unitPrice: '850.00',
        quantity: '1',
        amount: '850.00'
      },
      {
        name: 'Brown Eggs 10 Pack',
        unitPrice: '300.00',
        quantity: '3',
        amount: '900.00'
      }
    ]
  ),
  new OrderModel(
    '122460',
    'tharindarajapakshe@y7mail.com',
    '1850.00',
    'Cancelled',
    '2020',
    'JUN',
    '18',
    '1750.00',
    '200.00',
    '50.00',
    [
      {
        name: 'Chicken Meat Balls 1kg',
        unitPrice: '850.00',
        quantity: '1',
        amount: '850.00'
      },
      {
        name: 'Brown Eggs 10 Pack',
        unitPrice: '300.00',
        quantity: '3',
        amount: '900.00'
      }
    ]
  ),
  new OrderModel(
    '121461',
    'tharindarajapakshe@y7mail.com',
    '1850.00',
    'Cancelled',
    '2020',
    'JUN',
    '18',
    '1750.00',
    '100.00',
    '0.00',
    [
      {
        name: 'Chicken Meat Balls 1kg',
        unitPrice: '850.00',
        quantity: '1',
        amount: '850.00'
      },
      {
        name: 'Brown Eggs 10 Pack',
        unitPrice: '300.00',
        quantity: '3',
        amount: '900.00'
      }
    ]
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
    date: '08',
    subTotal: '1400.00',
    deliveryFee: '100.00',
    discount: '0.00',
    products: [
      {
        name: 'Australian Lamb 500g',
        unitPrice: '700.00',
        quantity: '2',
        amount: '1400.00'
      }
    ]
  },
  {
    orderNo: '125457',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '2400.00',
    status: 'Cancelled',
    year: '2020',
    month: 'SEP',
    date: '27',
    subTotal: '2300.00',
    deliveryFee: '100.00',
    discount: '0.00',
    products: [
      {
        name: 'Australian Lamb 500g',
        unitPrice: '700.00',
        quantity: '2',
        amount: '1400.00'
      },
      {
        name: 'Brown Eggs 10 Pack',
        unitPrice: '300.00',
        quantity: '3',
        amount: '900.00'
      }
    ]
  },
  {
    orderNo: '124458',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '1800.00',
    status: 'Delivered',
    year: '2020',
    month: 'AUG',
    date: '28',
    subTotal: '1700.00',
    deliveryFee: '100.00',
    discount: '0.00',
    products: [
      {
        name: 'Chicken Meat Balls 1kg',
        unitPrice: '850.00',
        quantity: '2',
        amount: '1700.00'
      }
    ]
  },
  {
    orderNo: '123459',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '1900.00',
    status: 'Delivered',
    year: '2020',
    month: 'JUL',
    date: '20',
    subTotal: '1750.00',
    deliveryFee: '150.00',
    discount: '0.00',
    products: [
      {
        name: 'Chicken Meat Balls 1kg',
        unitPrice: '850.00',
        quantity: '1',
        amount: '850.00'
      },
      {
        name: 'Brown Eggs 10 Pack',
        unitPrice: '300.00',
        quantity: '3',
        amount: '900.00'
      }
    ]
  },
  {
    orderNo: '122460',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '1850.00',
    status: 'Cancelled',
    year: '2020',
    month: 'JUN',
    date: '18',
    subTotal: '1750.00',
    deliveryFee: '200.00',
    discount: '50.00',
    products: [
      {
        name: 'Chicken Meat Balls 1kg',
        unitPrice: '850.00',
        quantity: '1',
        amount: '850.00'
      },
      {
        name: 'Brown Eggs 10 Pack',
        unitPrice: '300.00',
        quantity: '3',
        amount: '900.00'
      }
    ]
  },
  {
    orderNo: '121461',
    email: 'tharindarajapakshe@y7mail.com',
    amount: '1850.00',
    status: 'Cancelled',
    year: '2020',
    month: 'JUN',
    date: '18',
    subTotal: '1750.00',
    deliveryFee: '100.00',
    discount: '0.00',
    products: [
      {
        name: 'Chicken Meat Balls 1kg',
        unitPrice: '850.00',
        quantity: '1',
        amount: '850.00'
      },
      {
        name: 'Brown Eggs 10 Pack',
        unitPrice: '300.00',
        quantity: '3',
        amount: '900.00'
      }
    ]
  }
]
