import React from 'react';
import { connect } from 'react-redux';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart } from '../actionCreators';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
};

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <Panel header="Shopping Cart">
      <Table fill>
        <tbody>
          {cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>

    </Panel>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
