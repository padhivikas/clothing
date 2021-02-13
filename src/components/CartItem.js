import React,{useEffect} from 'react'
import { commerce } from '../lib/commerce';

function CartItem({item , removeItem,addQuantity ,removeQuantity}) {

    
  console.log(item)
    return (
        <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item?.media?.source} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <span className="title-font text-lg font-medium text-gray-900 mb-3">{item?.product_name}</span>
                  <button onClick={()=>removeItem(item?.id)} className="float-right bg-red-500	 text-white transition duration-500 ease-in-out hover:bg-red-800 
                  transform hover:-translate-y-1 hover:scale-100 rounded px-2">Delete</button>
                  <div className="flex items-center flex-wrap ">
                    <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">{item?.quantity}</p>
                    <span onClick={()=>{removeQuantity(item?.id,item?.quantity)}} className="btn bg-yellow-500 hover:bg-yellow-700 p-3 rounded cursor-pointer text-white text-2xl inline-flex items-center leading-none text-sm ml-auto mx-1">-</span>
                    <span onClick={()=>{addQuantity(item?.id,item?.quantity)}} className="btn bg-green-500 hover:bg-green-700 p-3 rounded cursor-pointer text-white text-2xl inline-flex items-center leading-none text-sm mx-1">+</span>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default CartItem
