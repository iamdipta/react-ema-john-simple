import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {

    // slice for  print 10 data from 80
    const first10 =fakeData.slice(0,10); 
    const [product,setProduct]=useState(first10);
    const[cart,setCart]=useState([]);

    const handleAddProduct=(products)=>{
        const newCart = [...cart,products];
        setCart (newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        product.map(pd => <Product product={pd}  handleAddProduct={handleAddProduct}></Product>)
                    }      
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;