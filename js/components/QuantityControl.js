/**
 * Created by cpc on 1/21/16.
 */

import React from 'react';

let QuantityControl = React.createClass({
    render() {
        let quantity = this.props.item.quantity;
        var variant = this.props.variant;
        return (
            <div className={"adjust-qty"+((variant)?` adjust-qty--${variant}`: "")}>
                <a className="adjust-qty__button">-</a>
                <div className="adjust-qty__number">{quantity}</div>
                <a className="adjust-qty__button">+</a>
            </div>

        )
    }
});

export default QuantityControl;
