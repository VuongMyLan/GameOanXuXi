import React, { Component } from 'react'
import {connect} from 'react-redux';

class XucXac extends Component {
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-danger">
                            <span className="display-4 p-5" onClick={()=>{
                                const action = {
                                    type: 'CHON_TAI_XIU',
                                    ketQuaChon: true,
                                }
                                // su dung ham dispatch tu redux cung cap dua action len reducer
                                this.props.dispatch(action)
                            }}>TAI</span>
                        </button>
                    </div>
                    <div className="col-4">
                            {/* <img src={this.props.mangXucXac[0].hinhAnh} style={{width:50, height: 50}} alt="1.png"></img>
                            <img src={this.props.mangXucXac[1].hinhAnh} style={{width:50, height: 50}} alt="1.png"></img>
                            <img src={this.props.mangXucXac[2].hinhAnh} style={{width:50, height: 50}} alt="1.png"></img> */}
                            {this.props.mangXucXac.map((item,index) => {
                                return <img src={item.hinhAnh} style={{width:50, height: 50}} alt={item.diem}></img>
                            })}
                    </div>
                    <div className="col-4">
                    <button className="btn btn-danger">
                            <span className="display-4 p-5"onClick={()=>{
                                const action = {
                                    type: 'CHON_TAI_XIU',
                                    ketQuaChon: false
                                }
                                // su dung ham dispatch tu redux cung cap dua action len reducer
                                this.props.dispatch(action)
                            }}>XIU</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac,
        }
}

export default connect(mapStateToProps)(XucXac)
