import {ORDERS} from '../../data/order-data'
import {CANCEL_ORDER} from '../actions/orders-actions'

const initialState = {
  orders: ORDERS
}

export default (state = initialState, action) => {
  if (action.type === 'CANCEL_ORDER') {
    for (let i = 0; i < state.orders.length; i++) {
      if (state.orders[i].orderNo === action.orderNo) {
        state.orders[i].status = 'Cancelled'
        break
      }
    }
  }
  return state
}
