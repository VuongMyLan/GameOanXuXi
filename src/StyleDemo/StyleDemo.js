import React, { Component } from 'react'
// c1: IMPORT DUONG DAN css truc tiep
import './styleDemo.css';

// C2: import css module
import style from './styleDemo.module.css';


export default class StyleDemo extends Component {

state = {
    fontSize: 15
}


    render() {
        return (
            <div className="container">
               <p style={{
                   color:'red',
                   fontSize: this.state.fontSize
                   }}className="text-red">HEHEHE</p>
               <p className={`${style.bgColor} ${style['text-green']} display-4`}>
                    cybersoft
               </p>
               <button onClick={()=>{
                   this.setState({
                       fontSize: this.state.fontSize + 10
                   })
               }}> Click</button>
            </div>
        )
    }
}

// co 2 cach truy thuoc thuoc tinh
// Object.tenThuocTinh
// Object['tenThuocTinh]
