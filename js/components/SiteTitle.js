/**
 * Created by cpc on 1/21/16.
 */

import React from 'react';

let SiteTitle = React.createClass({
    render() {
        return (
            <div className="title">
                <h2>Buy Me Shoes</h2>
                <img className="title__heart" src="img/heart.svg"/>
            </div>
        );
    }
});

export default SiteTitle;
