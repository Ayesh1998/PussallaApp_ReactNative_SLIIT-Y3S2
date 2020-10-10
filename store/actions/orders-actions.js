export const CANCEL_ORDER = 'CANCEL_ORDER'

export const cancelOrder = (orderNo) => {
  return {
    type: CANCEL_ORDER,
    orderNo: orderNo
  }
}
