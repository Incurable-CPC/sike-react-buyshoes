/**
 * Created by cpc on 1/21/16.
 */

import React from 'react';
import Ps from 'perfect-scrollbar';
import { products, cartItems } from '../data';
import QuantityControl from './QuantityControl';

let Cart = React.createClass({
    componentDidMount() {
        let $content= React.findDOMNode(this.refs.content);
        Ps.initialize($content);
    },
    render() {
        return (
            <div className="cart">
                <h3 className="cart__title">Shopping Cart</h3>
                <div className="cart__content" ref="content">
                    <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                    {Object.keys(cartItems).map((id, index) => (
                        <div className="cart-item" key={index}>
                            <div className="cart-item__top-part">
                                <div className="cart-item__image">
                                    <img  src={products[id].imagePath}/>
                                </div>

                                <div className="cart-item__top-part__middle">
                                    <div className="cart-item__title">
                                        {products[id].name}
                                    </div>

                                    <div className="cart-item__price">
                                        {`$${products[id].price}`+((cartItems[id].quantity > 1)? ` x ${cartItems[id].quantity}`: ``)}
                                    </div>
                                </div>

                                <img className="cart-item__trash" src="img/trash-icon.svg"/>
                            </div>

                            <div className="cart-item__qty">
                                <QuantityControl item={cartItems[id]}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
});

export default Cart;
