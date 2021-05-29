import React, { Component } from 'react'
// Ket noi redux store 
import {connect} from 'react-redux';

class BTGioHangRedux extends Component {
    
    render() {
        console.log(this.props)
        return (
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
                    {this.props.gioHang.map((spGioHang,index)=>{
                        return <tr>
                            <td>{spGioHang.maSP}</td>
                            <td><img src={spGioHang.hinhAnh} width={50} height={50} alt={spGioHang.tenSP}/></td>
                            <td>{spGioHang.tenSP}</td>
                            <td> <button  className="btn btn-success mr-2" onClick={()=>{
                                this.props.tangGiamSoLuong(spGioHang.maSP,1)
                            }}>+</button></td>
                            <td>{spGioHang.soluong}</td>
                            {/* <button></button> */}
                            <td><button  className="btn btn-success mr-2"onClick={()=>{
                                this.props.tangGiamSoLuong(spGioHang.maSP,-1)
                            }}>-</button></td>
                            <td>{spGioHang.giaBan}</td>
                            <td>{spGioHang.giaBan*spGioHang.soluong}</td>
                            <td><button onClick={()=>{
                                this.props.xoaGioHang(spGioHang.maSP)
                            }}>Xoa</button></td>
                        </tr>
                    })}
                </tbody>

            </table>
        )
    }
}
// Day la ham lay state tu redux (rootReducer) => bien thanh props cua component
const mapStateToProps = (rootReducer) => {
    console.log('rootReducer', rootReducer)
    return {
        gioHang: rootReducer.stateGioHang
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            console.log('maSPCLICK', {maSPClick})
            // Tao action dua gia tri len redux
            const action = {
                type: 'XOA_GiO_HANG',
                maSPClick: maSPClick
            }
            // Dua action len store
            dispatch(action)
        },

        tangGiamSoLuong: (maSPClick,soluong) => {
            // Tao ra 1 action
            const action = {
                type: 'Tang_GIAM_SO_LUONG',
                maSPClick: maSPClick,
                soluong: soluong,
            }

            dispatch(action)
        }



    }
}
// Tao ra component moi co ket noi voi store tu component hien tai 
const GioHangConnectRedux = connect(mapStateToProps,mapDispatchToProps)(BTGioHangRedux);
export default GioHangConnectRedux;

