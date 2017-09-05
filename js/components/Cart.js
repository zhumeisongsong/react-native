import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Product from './Product';

class Cart extends React.Component {

  render() {
    const hasProductd = products.length > 0;
    const nodes = hasProducts ? (
        products.map(product =>
          <Product
            name={product.name}
            price={product.price}
            key={product.id}
          />
        )
    return (
      <Text>sdsdsd</Text>
    )
  }
}

module.exports = Cart;