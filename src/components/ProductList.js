import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { loadProducts, addToCart } from '../actionCreators';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

class ProductList extends Component {
  constructor() {
    super();
    this.handleAddToCart = this.handleAddToCart.bind(this);

    this.state = { products: [] }

    store.subscribe(() => {
      this.setState({
        products: store.getState().products
      });
    });

    setTimeout(() => {
      store.dispatch(loadProducts());
    }, 2000);
  }

  render() {
    return (
      <div style={styles.products}>
        {this.state.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => this.handleAddToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  handleAddToCart(product) {
    store.dispatch(addToCart(product));
  }
}

export default ProductList;
