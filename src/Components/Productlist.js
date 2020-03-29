import React, { Component } from 'react';
import Title from "./Title";
import {storeProducts} from "../data";
import {ProductConsumer} from "../context";
import Product from './Product';
export default class Productlist extends Component {
    
    render() {
        //console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products"/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
