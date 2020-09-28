import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center">BEST SMART PHONE</h3>
                    <div class="row">
                        <div class="col-3">
                                <Product/>
                        </div>
                        <div class="col-3">
                                <Product/>
                        </div>
                        <div class="col-3">
                                <Product/>  
                        </div>
                        <div class="col-3">
                                <Product/>  
                        </div>


                    
                    </div>
                
            </div>


        )
    }
}
