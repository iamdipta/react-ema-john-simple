import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // for efficient code
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className ="products-container">
                <h4 className="product-text">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only{stock}left in stock - Order soon</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className='main-button'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;