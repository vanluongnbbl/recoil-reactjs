import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartState, cartTotal } from '../cartSate'

function CartInfo() {
  const  carts = useRecoilValue(cartState)
  const total = useRecoilValue(cartTotal)

  return (
    <div>
    <h2>CartInfo</h2>
    <h5>Total: {total}$</h5>
    {carts.map(cart => (
      <li>{cart.product.title} - {cart.quantity}</li>
    ))}
    </div>
  
  )
}

export default CartInfo