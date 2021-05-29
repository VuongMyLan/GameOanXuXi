import React, { Component } from 'react'
import {connect} from 'react-redux';

class TableSinhVien extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Ma Sinh Vien</th>
                        <th>Ten Sinh Vien</th>
                        <th>Email</th>
                        <th>So dien thoai</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.mangSinhVien.map((sinhVien,index)=>{
                            return <tr key ={index}>
                                <td>{sinhVien.maSinhVien}</td>
                                <td>{sinhVien.tenSinhVien}</td>
                                <td>{sinhVien.email}</td>
                                <td>{sinhVien.soDienThoai}</td>
                                <td><button className="btn btn-danger" onClick={()=>{
                                    // gui du lieu len redux 
                                    const action = {
                                        type: 'XOA_SINH_VIEN',
                                        maSinhVien: sinhVien.maSinhVien
                                    }
                                    this.props.dispatch(action);
                                }}>Xóa</button></td>
                                <td><button className="btn btn-primary ml-2" onClick={()=>{
                                   const action = {
                                    type: 'SUA_SINH_VIEN',
                                    sinhVien: sinhVien
                                   }
                                   
                                   this.props.dispatch(action)
                                }}>Chinh Sua</button></td>
                            </tr>
                    })}
                </tbody>
                
            </table>
        )
    }
}

const mapStateToProps = (rootReducer) =>{
    return {
        mangSinhVien: rootReducer.quanLySinhVienReducer.mangSinhVien,
    
    }
}
export default connect(mapStateToProps)(TableSinhVien);