import React, { Component } from 'react';
import Product from './product';
import ProductContext from '../context/product';

class Products extends Component {
    static contextType = ProductContext; 

    render() { 
        return (
            <>
                <button className='btn btn-primary' onClick={this.context.onReset}>Reset</button>
               {this.context.products.map((p,index) => (
                    <Product key={index} productName={p.title} count={p.count} id={p.id} />
               ))}
            </>
        );
    }

}
 
export default Products;