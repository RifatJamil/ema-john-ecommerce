import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, seller, star, starCount, stock, img} = props.product;
    console.log(props.product)
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'> {name}</h4>
                <p>price: ${price}</p>
                <p><small>Only <strong>{stock}</strong> left in stock</small></p>
                <p><small>sold by: <strong>{seller}</strong> </small></p>

            </div>
            
        </div>
    );
};

export default Product;