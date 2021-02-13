import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
<div className="container px-5 py-5 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10">Raw Denim Heirloom Man Braid
          <br className="hidden sm:block" />Selfies Wayfarers
        </h1>
        </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default ProductsList;