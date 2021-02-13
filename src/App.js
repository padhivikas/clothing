import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import ProductDetail from './components/ProductDetail'
import Home from './components/Home'
import {BrowserRouter , Route , Switch} from "react-router-dom"
import { commerce } from './lib/commerce'
import { CartProvider } from "./components/CartContext";
import Cart from './components/Cart';

function App() {

  let [cat_id,setCat_id]=useState()
  const [cart,setCart]=useState({})

  let selectCategory=(category_id)=>
  {
    setCat_id(`${category_id}`)
  }

  const fetchCart=async ()=>{
    const cart_list=await commerce.cart.retrieve()
    setCart(cart_list)
  }

  const addTocart=async (productId, quantity)=>{
   const item =await commerce.cart.add(productId, quantity)
   setCart(item.cart)
  }

  const emptyCart=()=>{
    commerce.cart.empty().then((response) => setCart(response.cart));
  } 

  const removeItem=(lineItemId)=>{
    commerce.cart.remove(lineItemId).then(response => setCart(response.cart));
  }

  const addQuantity=(lineItemId,PrevQuantity)=>{
    const newQuantity=PrevQuantity+1
    commerce.cart.update(lineItemId, { quantity: newQuantity }).then(response => setCart(response.cart));
  }

  const removeQuantity=(lineItemId,PrevQuantity)=>{
    const newQuantity=PrevQuantity-1
    if(newQuantity>=1)
    {
      commerce.cart.update(lineItemId, { quantity: newQuantity }).then(response => setCart(response.cart));
    }
  }

    useEffect(() => {
      fetchCart()
    }, [])
 
  return (
      <BrowserRouter>
        <div className="App">
        <Navbar selectCat={selectCategory} cartbadge={cart.total_unique_items}/>
        <Switch>
          <Route exact path='/' render={() => 
            <CartProvider value={addTocart} >
                <Home catid={cat_id}/>
            </CartProvider>
           } />
           <Route path='/cart' >
              <Cart cart={cart} emptyCart={emptyCart} removeItem={removeItem} 
              addQuantity={addQuantity} removeQuantity={removeQuantity} />
           </Route>

          <Route path='/:product_id' component={ProductDetail} />
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
