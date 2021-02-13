import React, { Component } from "react";
import stripHtml from 'string-strip-html';
import {Link} from "react-router-dom";
import {CartConsumer} from './CartContext';
class ProductItem extends Component {
  render() {
    const { product } = this.props
    const { result } = stripHtml(product.description);
    return (
<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<Link to={"/" + product.id } className="block relative h-48 rounded overflow-hidden">
  <img alt="ecommerce" className="object-cover object-center w-full h-full block transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-400" src={product.media.source} alt={product.name} />
</Link>
<div className="mt-4">
  <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.name}</h2>
  <h4 className="text-gray-900 title-font text-lg font-medium">{result}</h4>
  <p className="mt-1">{product.price.formatted_with_symbol}</p>
        <CartConsumer>
         {
            (addtocart)=>{
              return (
                <button onClick={()=>{addtocart(product.id,1)}} className="bg-gray-100	transition duration-500 ease-in-out hover:bg-gray-200 
                  transform hover:-translate-y-1 hover:scale-100 rounded p-2">
                  Add to Cart
                </button>
              )
            }
          }
        </CartConsumer>

</div>
</div>
    );
  }  
};
export default ProductItem;