import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState, addToCart } from '../cartSate'
import { productListState } from '../ProductState'

ProductList.prototype = {}

function ProductList() {
  const productList = useRecoilValue(productListState)
  const [cart, setCart] = useRecoilState(cartState)

  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product)
    setCart(newCart)
  }
  return (
    <div>
      <h2>Product List</h2>

      <ul className="product-list">
        {
          productList.map(product => (
            <li>{product.title} - {product.price}$ <br/>
              <button onClick={() => {handleAddToCart(product)}}>
                Add to cart
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductList