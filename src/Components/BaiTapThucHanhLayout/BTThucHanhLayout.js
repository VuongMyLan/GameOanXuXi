import React, { Component } from 'react'
import BT3Carousel from './BT3Carousel'
import BT3Footer from './BT3Footer'
import BT3ProductList from './BT3ProductList'
import BTHeader from './BTHeader'


export default class BTThucHanhLayout extends Component {
    render() {
        return (
            <div>
            <BTHeader></BTHeader>
            <BT3Carousel></BT3Carousel>
            <BT3ProductList></BT3ProductList>
            <BT3Footer></BT3Footer>
            </div>
        )
    }
}
