import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
    <>
      {props.productList.map((product, index) => (
        <Product
          product={product}
          key={index}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          index={index}
        />
      ))}
    </>
  );
}
