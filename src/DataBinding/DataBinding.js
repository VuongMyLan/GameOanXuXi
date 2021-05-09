import React, { Component } from 'react'

export default class DataBinding extends Component {
    // Ngoai phuong thuc la thuoc tinh va phuong thuc khac
    sinhVien = {
        maSV: 'sv01',
        tenSV: ' Nguyen Van A',
        hinhAnh: 'http://picsum.photos/200'
    }

    // Phuong Thuc

    renderProduct = () => {
        const product = {
            id: 1,
            name: 'Iphone',
            img: './img/sp_iphoneX.png',
            price: 1000
        }

        return (
            <div className="card text-left">
                <img className="card-img-top w-100" src={product.img} alt />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                </div>
            </div>


        )

    }




    render() {
        // Khai bao bien trong phuong thuc
        const tittle = "cybersoft";
        const imgSrc = 'http://picsum.photos/200';
        return (
            <div className="container">
                <h1>DataBinding</h1>
                <p id="tittle">{tittle}</p>
                <img src={imgSrc} />
                <br />
                <div className="card text-white bg-primary">
                    <img className="card-img-top img-fluid" src={this.sinhVien.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">Ho Ten {this.sinhVien.tenSV}</h4>
                        <p className="card-text">Ma {this.sinhVien.maSV}</p>
                    </div>
                </div>
                
                {this.renderProduct()}
            </div> 
            
        )
       
    }
}
