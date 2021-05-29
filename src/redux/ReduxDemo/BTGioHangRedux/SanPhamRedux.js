import React, { Component } from 'react'
// Ket noi component voi redux store
import {connect} from 'react-redux';

class SanPhamRedux extends Component {

    render() {
        const {sanPham} = this.props;
        return (
            <div className="card text-left">
                <img  height={300} className="card-img-top img-fluid" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.themGioHang(sanPham)
                    }}>Them Gio Hang</button>
                </div>
            </div>

        )
    }
}
// Ham sinh ra props la ham xu ly de dua du lieu redux
const mapDispatchToProps = (dispatch) => {
    // dispatch  giong ham setState
    return {
      themGioHang: (spClick) =>{
        //   console.log('spClick', spClick);
        // action la 1 object chua du lieu gui len reduc store
        const action = {
            type: 'THEM GIO HANG', //THUOC TINH BAT BUOC CUA ACTION
            spGioHang: {...spClick, soluong:1}
            // SU dung ham dispatch de gui du lieu len redux
            
        }
        dispatch(action);
      }
    }
}



export default connect (null,mapDispatchToProps)(SanPhamRedux)