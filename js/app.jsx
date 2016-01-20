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

window.onload = () => {
    // Replace innerHTML of `#root` with the App component.
    React.render(<App/>,document.querySelector("#root"));
};

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

let Product = React.createClass({
    render() {
        let {name,price,imagePath,id} = this.props.product;
        return (
            <div className="product">
                <div className="product__display">
                    <div className="product__img-wrapper">
                        <img className="product__img" src={imagePath}/>
                    </div>
                    {(cartItems[id])? (
                        <QuantityControl item={cartItems[id]} variant="gray"/>
                    ): (
                        <a className="product__add">
                            <img className="product__add__icon" src="img/cart-icon.svg"/>
                        </a>
                    )}
                    <div className="product__price">
                        {`$${price}`}
                    </div>
                </div>
                <div className="product__description">
                    <div className="product__name">
                        {name}
                    </div>
                    <img className="product__heart" src="img/heart.svg"/>
                </div>
            </div>
        )
    }
});
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

const products = {
    "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        gender: "man",
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        gender: "man",
    },

    "jameson-e-lite": {
        id: "jameson-e-lite",
        name: "Jameson E-Lite",
        price: 69.99,
        imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
        gender: "man",
    },

    "jameson-e-lite-julian-davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        gender: "man",
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "corby-womens-2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        gender: "woman",
    },
};

let cartItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        quantity: 1,
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        quantity: 2,
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        quantity: 2,
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        quantity: 1,
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        quantity: 1,
    },
};
