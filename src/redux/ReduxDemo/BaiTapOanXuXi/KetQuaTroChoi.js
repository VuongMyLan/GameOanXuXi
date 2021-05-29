import React, { Component } from 'react'
import {connect} from'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.ketQua}</div>
                <div className="display-4 text-success">So Ban Thang: 
                <span className="text-warning"> {this.props.soBanThang}</span>
                </div>  
                <div className="display-4 text-success">Tong so ban thua: 
                <span className="text-warning"> {this.props.soBanChoi}</span>
                </div> 
                 
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.BaiTapOanXuXiReducer.ketQua,
        soBanThang: state.BaiTapOanXuXiReducer.soBanThang,
        soBanChoi: state.BaiTapOanXuXiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)