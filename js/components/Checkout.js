/**
 * Created by cpc on 1/21/16.
 */

import React from 'react';
import { products, cartItems } from '../data';

let Checkout = React.createClass({
    render() {
        var amount = 0;
        Object.keys(cartItems).forEach((id) => {
            amount += cartItems[id].quantity * products[id].price;
        });
        return (
            <div className="checkout">
                <hr className="checkout__divider"/>

                <input type="text" className="checkout__coupon-input" placeholder="coupon code" />

                {/* <div className="checkout__line">
                 <div className="checkout__line__label">
                 Discount
                 </div>

                 <div className="checkout__line__amount">
                 -$90
                 </div>
                 </div>*/}

                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Subtotal
                    </div>

                    <div className="checkout__line__amount">
                        {`$${amount}`}
                    </div>
                </div>

                {/*<div className="checkout__line">
                 <div className="checkout__line__amount checkout__line__amount--omg-savings">
                 $360
                 </div>
                 </div>*/}

                <a className="checkout__button">
                    <img  className="checkout__button__icon" src="img/cart-icon.svg"/>
                    <div className="checkout__button__label">
                        Checkout
                    </div>
                </a>
            </div>
        );
    }
});

export default Checkout;
