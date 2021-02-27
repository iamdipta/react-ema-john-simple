import React from 'react';
import "./cart.css";

const Cart = (props) => {
    const cart =props.cart;    
    const total = cart.reduce((total,prd)=>total+prd.price,0);
    const totals =total.toFixed(2);
    const  tax =total/10;
    const taxs =tax.toFixed(2)
    const subTotal =Math.ceil(total+tax);
    return (
        <div>
                <h3 className="cart-top">Order Summary </h3>
                <br/>
                <h4 className="cart-top">Items ordered: {cart.length}</h4>
                <br/>
                <p>Items:     {totals}</p>
                <p>Shipping & Handling:     </p>
                <p>Total before tax:     </p>
                <p>Estimate Tax:     {taxs}</p>
                <h2>Order Total:<span>{subTotal}</span></h2>    
                <button className="main-button">Review your order</button>
        </div>
    );
};

export default Cart;