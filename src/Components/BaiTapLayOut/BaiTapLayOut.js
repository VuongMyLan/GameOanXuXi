import React, { Component } from 'react'
import BaiTapHeader from './BaiTapHeader'
import BTCarousel from './BTCarousel'
import BTLapTop from './BTLapTop'
import BTPromotion from './BTPromotion'
import BTSmartPhone from './BTProductList'
import BTProductList from './BTProductList'

export default class BaiTapLayOut extends Component {
    render() {
        return (
            <div>
        <BaiTapHeader></BaiTapHeader>
        <BTCarousel></BTCarousel>
        <BTProductList></BTProductList>
        <BTLapTop></BTLapTop>
        <BTPromotion></BTPromotion>

            </div>
        )
    }
}
