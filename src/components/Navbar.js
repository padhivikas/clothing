import React , { useState,useEffect } from 'react'
import {Link} from "react-router-dom";
import { commerce } from '../lib/commerce'


function Navbar(props) {

  const [ category_item, setCategory_item ] = useState([]);
  let fetchCategory=()=>
      {
        commerce.categories.list().then( (category) => { 
        
          let category_list = category.data
          category_list.map((item)=>setCategory_item( preItem =>[...preItem , item]) 
          )
        } 
       )
      }

      useEffect(() => {
        fetchCategory();
      },[]);
    




    return (
        <div>
            <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <span className="ml-3 text-xl">Shop Now</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {
          category_item.map( (item)=> <p onClick={()=>props.selectCat(item.id)} className="mr-5 hover:text-gray-900" key={item.id}>{item.name}</p> )
        }
          </nav>
          <Link to="/cart">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Cart
          <span className="mx-1 bg-red-500 px-1 rounded text-white">{props.cartbadge}</span>
          </button>
          </Link>
        </div>
      </header> 
        </div>
    )
}

export default Navbar
