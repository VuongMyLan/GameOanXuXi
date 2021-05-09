import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
            <section className="text-center">BEST SMARTPHONE</section>
            <div className="row">
                <div className ="col-3">
                    <BTProduct></BTProduct>
                </div>
                <div className ="col-3">
                    <BTProduct></BTProduct>
                </div>
                <div className ="col-3">
                    <BTProduct></BTProduct>
                </div>
                <div className ="col-3">
                    <BTProduct></BTProduct>
                </div>
            </div>
            </div>
            
        )
    }
}

