import React, { Component } from 'react'

export default class GioHang extends Component {

    renderGioHang = () => {
        
        // Nhan props gioHang tu component cha (BTDanhSachSanPham) this.props.gioHang
        return this.props.gioHang.map((item, index) => {
            return  <tr key={index}>
                    <td>1</td>
                    <td><img src={item.hinhAnh} width={50} height={50} /></td>
                    <td>{item.tenSP}</td>
                    <td><button className="btn btn-success mr-2" onClick={()=>{
                        this.props.tangGiamSoLuong(item.maSP,1)
                    }}>+</button>
                                {item.soluong}
                        <button className="btn btn-success" onClick={()=>{
                        this.props.tangGiamSoLuong(item.maSP,-1)
                    }}>-</button>
                    </td>
                    <td>{item.giaBan.toLocaleString()}</td>
                    <td>{(item.giaBan*item.soluong).toLocaleString()}</td>
                    <button className="btn btn-danger" onClick={()=>{
                        this.props.xoaSanPham(item.maSP);
                    }}>Xoa</button>

                </tr>
            
        });



    }


    tinhTongSoLuong = () => {
        let tongSL = 0;
        for ( let spGH of this.props.gioHang) {
            tongSL += spGH.soluong;
            console.log(spGH);
        }
       
        return tongSL;

    }




    render() {
        return (
            <div className="container">
                <h3>Gio Hang</h3>
                <div className="text-right">
                    <i class="fa fa-cart-arrow-down"></i> ({this.tinhTongSoLuong()})
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma sp</th>
                            <th>Hinh anh</th>
                            <th>Ten Sp</th>
                            <th>So luong</th>
                            <th>Gia Ban</th>
                            <th>Tong tien</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                        {/* <tr>
                            <td>1</td>
                            <td><img src="./img/applephone.jpg" width={50} height={50}/></td>
                            <td>Iphone</td>
                            <td><button className="btn btn-success mr-2">+</button>
                                2
                                <button className="btn btn-success">-</button>
                            </td>
                            <td>1000</td>
                            <td>2000</td>
                            <button className="btn btn-danger">Xoa</button>

                        </tr> */}

                    </tbody>
                </table>




            </div>
        )
    }
}
