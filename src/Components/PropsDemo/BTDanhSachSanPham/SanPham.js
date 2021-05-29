import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className="card text-white">
                <img className="card-img-top" height={350} src={item.hinhAnh} alt={item.tenSP} />
                <div className="card-body">
                    <h4 className="card-title text-dark">{item.tenSP}</h4>
                    <p className="card-text text-dark">{item.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.xemChiTiet(item);
                    }}> Xem Chi tiet</button>

                    <button className="btn btn-primary ml-2" onClick={()=>{
                        this.props.themGioHang(item)
                    }}>Them Gio Hang</button>
                </div>
            </div>
        )
    }
}
