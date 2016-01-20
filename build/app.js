"use strict";

var App = React.createClass({
    displayName: "App",

    // The `render` method will generate the `buyshoes` site's virtual DOM.
    render: function render() {
        return React.createElement(
            "div",
            { className: "site" },
            React.createElement(
                "div",
                { className: "bg" },
                React.createElement("div", { className: "bg__img" })
            ),
            React.createElement(
                "div",
                { className: "site__main" },
                React.createElement(
                    "div",
                    { className: "site__left-sidebar" },
                    React.createElement(SiteTitle, null)
                ),
                React.createElement(
                    "div",
                    { className: "site__content" },
                    React.createElement(Products, null)
                )
            ),
            React.createElement(
                "div",
                { className: "site__right-sidebar" },
                React.createElement(Cart, null),
                React.createElement(Checkout, null)
            ),
            React.createElement(
                "a",
                { className: "site__right-sidebar-toggle" },
                React.createElement("img", { src: "img/arrow-icon.svg" })
            )
        );
    }
});

window.onload = function () {
    // Replace innerHTML of `#root` with the App component.
    React.render(React.createElement(App, null), document.querySelector("#root"));
};

var SiteTitle = React.createClass({
    displayName: "SiteTitle",

    render: function render() {
        return React.createElement(
            "div",
            { className: "title" },
            React.createElement(
                "h2",
                null,
                "Buy Me Shoes"
            ),
            React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
        );
    }
});

var Product = React.createClass({
    displayName: "Product",

    render: function render() {
        var _props$product = this.props.product;
        var name = _props$product.name;
        var price = _props$product.price;
        var imagePath = _props$product.imagePath;
        var id = _props$product.id;

        return React.createElement(
            "div",
            { className: "product" },
            React.createElement(
                "div",
                { className: "product__display" },
                React.createElement(
                    "div",
                    { className: "product__img-wrapper" },
                    React.createElement("img", { className: "product__img", src: imagePath })
                ),
                cartItems[id] ? React.createElement(QuantityControl, { item: cartItems[id], variant: "gray" }) : React.createElement(
                    "a",
                    { className: "product__add" },
                    React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
                ),
                React.createElement(
                    "div",
                    { className: "product__price" },
                    "$" + price
                )
            ),
            React.createElement(
                "div",
                { className: "product__description" },
                React.createElement(
                    "div",
                    { className: "product__name" },
                    name
                ),
                React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
            )
        );
    }
});
var Products = React.createClass({
    displayName: "Products",

    render: function render() {
        return React.createElement(
            "div",
            { className: "products" },
            Object.keys(products).map(function (item, index) {
                return React.createElement(Product, {
                    key: index,
                    product: products[item]
                });
            })
        );
    }
});

var Cart = React.createClass({
    displayName: "Cart",

    componentDidMount: function componentDidMount() {
        var $content = React.findDOMNode(this.refs.content);
        Ps.initialize($content);
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "cart" },
            React.createElement(
                "h3",
                { className: "cart__title" },
                "Shopping Cart"
            ),
            React.createElement(
                "div",
                { className: "cart__content", ref: "content" },
                React.createElement(
                    "h3",
                    { className: "cart__title cart__title--spacer" },
                    "Shopping Cart"
                ),
                Object.keys(cartItems).map(function (id, index) {
                    return React.createElement(
                        "div",
                        { className: "cart-item", key: index },
                        React.createElement(
                            "div",
                            { className: "cart-item__top-part" },
                            React.createElement(
                                "div",
                                { className: "cart-item__image" },
                                React.createElement("img", { src: products[id].imagePath })
                            ),
                            React.createElement(
                                "div",
                                { className: "cart-item__top-part__middle" },
                                React.createElement(
                                    "div",
                                    { className: "cart-item__title" },
                                    products[id].name
                                ),
                                React.createElement(
                                    "div",
                                    { className: "cart-item__price" },
                                    "$" + products[id].price + (cartItems[id].quantity > 1 ? " x " + cartItems[id].quantity : "")
                                )
                            ),
                            React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
                        ),
                        React.createElement(
                            "div",
                            { className: "cart-item__qty" },
                            React.createElement(QuantityControl, { item: cartItems[id] })
                        )
                    );
                })
            )
        );
    }
});
var Checkout = React.createClass({
    displayName: "Checkout",

    render: function render() {
        var amount = 0;
        Object.keys(cartItems).forEach(function (id) {
            amount += cartItems[id].quantity * products[id].price;
        });
        return React.createElement(
            "div",
            { className: "checkout" },
            React.createElement("hr", { className: "checkout__divider" }),
            React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code" }),
            React.createElement(
                "div",
                { className: "checkout__line" },
                React.createElement(
                    "div",
                    { className: "checkout__line__label" },
                    "Subtotal"
                ),
                React.createElement(
                    "div",
                    { className: "checkout__line__amount" },
                    "$" + amount
                )
            ),
            React.createElement(
                "a",
                { className: "checkout__button" },
                React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
                React.createElement(
                    "div",
                    { className: "checkout__button__label" },
                    "Checkout"
                )
            )
        );
    }
});

var QuantityControl = React.createClass({
    displayName: "QuantityControl",

    render: function render() {
        var quantity = this.props.item.quantity;
        var variant = this.props.variant;
        return React.createElement(
            "div",
            { className: "adjust-qty" + (variant ? " adjust-qty--" + variant : "") },
            React.createElement(
                "a",
                { className: "adjust-qty__button" },
                "-"
            ),
            React.createElement(
                "div",
                { className: "adjust-qty__number" },
                quantity
            ),
            React.createElement(
                "a",
                { className: "adjust-qty__button" },
                "+"
            )
        );
    }
});

var products = {
    "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        gender: "man"
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        gender: "man"
    },

    "jameson-e-lite": {
        id: "jameson-e-lite",
        name: "Jameson E-Lite",
        price: 69.99,
        imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
        gender: "man"
    },

    "jameson-e-lite-julian-davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        gender: "man"
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "corby-womens-2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        gender: "woman"
    }
};

var cartItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        quantity: 1
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        quantity: 2
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        quantity: 2
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        quantity: 1
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        quantity: 1
    }
};
/* <div className="checkout__line">
   <div className="checkout__line__label">
       Discount
   </div>
    <div className="checkout__line__amount">
       -$90
   </div>
</div>*/ /*<div className="checkout__line">
            <div className="checkout__line__amount checkout__line__amount--omg-savings">
                $360
            </div>
         </div>*/
