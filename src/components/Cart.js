import React,{useState,useEffect} from 'react'
import CartItem from "./CartItem"
import { commerce } from '../lib/commerce';

function Cart( {cart, emptyCart, removeItem, addQuantity ,removeQuantity} ) {

    const [cartList, setCartlist]=useState([])

    useEffect(() => {
      setCartlist(cart.line_items)
    })
    
    
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                      {
                        cartList?.map((item)=>{
                          return <CartItem item={item} key={item.id} removeItem={removeItem} addQuantity={addQuantity} removeQuantity={removeQuantity}/>
                        })
                      }
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">Total-{cart?.subtotal?.formatted_with_symbol}</h1>
    </div>
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button onClick={emptyCart} className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="title-font font-medium">Empty Cart</span>
              </span>
            </button>
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="title-font font-medium">Checkout</span>
              </span>
            </button>
          </div>
        </div>
      </section>

        </div>
    )
}

export default Cart
