import React, { Component } from 'react';
import ProductContext from '../context/product';

class Product extends Component {
    static contextType = ProductContext;

    render() { 
        
        return (
            <div>
                <span className='m-2 text-info'>{this.props.productName}</span>
                <span className='m-2 badge bg-primary'>{this.format()}</span>
                <button onClick={this.handleIncreament} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
                <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger' style={{ borderRadius: '50%' }}>delete</button>
                
            </div>
        );
    } 

    format(){
        return this.props.count === 0 ? 'Zero' : this.props.count;
    }

    handleIncreament = () =>{
       this.context.onIncreament(this.props.id)
    }

    handleDecrement = () =>{
       this.context.onDecreament(this.props.id)
    }

    handleDelete= () =>{
        this.context.onDelete(this.props.id)
    }
}
 
export default Product;