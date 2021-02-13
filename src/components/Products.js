import React, { Component } from 'react'
import { commerce } from '../lib/commerce';
import ProductsList from './ProductsList'



class Products extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products: [],
          catid:null,
        }
      }
    
      fetchProducts() {
        commerce.products.list({category_id:this.state.catid}).then((products) => {
          this.setState({ products: products.data });
        }).catch((error) => {
          console.log('There was an error fetching the products', error);
        });
      }

      componentDidMount() {
        this.fetchProducts()
      }

      static getDerivedStateFromProps(props, state) {
        return {catid: props.cat_id };
      }

      componentDidUpdate(prevProps)
      {
        if (this.props.cat_id !== prevProps.cat_id) {
          this.fetchProducts();
        }
      }
   
         
      render() {
        const {products}=this.state
        return (
          <div>
              <ProductsList products={products}/>
          </div>
        );
      }
}

export default Products 
