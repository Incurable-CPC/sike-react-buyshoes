/**
 * Created by cpc on 1/21/16.
 */

import React from 'react';
import SiteTitle from './SiteTitle';
import Products from './Products'
import Cart from './Cart';
import Checkout from './Checkout';

let App = React.createClass({
    // The `render` method will generate the `buyshoes` site's virtual DOM.
    render() {
        return (
            <div className="site">
                <div className="bg">
                    <div className="bg__img">
                    </div>
                </div>
                <div className="site__main">
                    <div className="site__left-sidebar">
                        <SiteTitle />
                    </div>
                    <div className="site__content">
                        <Products />
                    </div>
                </div>
                <div className="site__right-sidebar">
                    <Cart />
                    <Checkout />
                </div>
                <a className="site__right-sidebar-toggle">
                    <img src="img/arrow-icon.svg"/>
                </a>

            </div>
        );
    }
});

export default App;
