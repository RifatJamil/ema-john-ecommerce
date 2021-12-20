import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        console.log(product.name)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h3>products {products.length}</h3>
                { products.map( product => <Product handleAddToCart ={handleAddToCart} key ={product.key} product ={product}></Product>)}
            </div> 
            <div className='cart-container'>
                <h3>Order Summary</h3>
                <h5>Confirm Order</h5>
            </div>
        </div>
    );
};

export default Shop;