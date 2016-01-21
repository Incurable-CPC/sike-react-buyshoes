/**
 * Created by cpc on 1/21/16.
 */

import React from 'react';
import Product from './Product';
import { products } from '../data';

let Products = React.createClass({
    render() {
        return (
            <div className="products">
                {Object.keys(products).map((item, index) => (
                    <Product
                        key={index}
                        product={products[item]}
                    />
                ))}
            </div>
        );
    }
});

export default Products;
