import React, { Component } from 'react'
import {connect} from 'react-redux'// thu vien ket noi store

class KetQuaTroChoi extends Component {
    render() {


        return (
            <div className="text-center container">
                <div className="display-4">
                    <div>Ban chon <span className="text-danger">{this.props.ketQuaChon ? 'TAI' : 'XIU'}</span></div>
                </div>
                <div className="display-4">
                    <div>So ban thang <span className="text-danger">{this.props.soBanThang}</span></div>
                </div>
                <div className="display-4">
                    <div>So ban choi <span className="text-danger">{this.props.tongsoBanChoi}</span></div>
                </div>
                <div className="display-4">
                <button className="btn btn-success">
                    <span className="display-4 p-2"onClick={()=>{
                        const action = {
                            // tao 1 action dua len redux
                            type: 'PLAY_GAME',

                        }
                        this.props.dispatch(action)
                    }}>Play Game</span>
                </button>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        soBanThang: rootReducer.baiTapGameXucXacReducer.soBanThang,
        tongsoBanChoi: rootReducer.baiTapGameXucXacReducer.tongSoBanChoi,
        ketQuaChon: rootReducer.baiTapGameXucXacReducer.ketQuaChon,

    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)