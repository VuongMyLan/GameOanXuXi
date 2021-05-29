import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        console.log(this.props.mangDatCuoc)
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img className="mt-3" style={{ transform:'rotate(120deg',width: 100, height: 100 }} src={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh}></img>


                </div>
                <div className="speech-bubble">

                    
                </div>
                <img style={{ widht: 200, height: 200 }} src="./img/gameOanXuXi/player.png"></img>

                <div className="row">
                    {this.props.mangDatCuoc.map((item,index)=>{
                        // Xet gia tri cuoc, them vien cho item chon
                        let border = {};
                        if(item.datCuoc){
                            border = {border: '3px solid orange'}
                        }
                        return  <div className="col-4">
                        <button style={border} className="btnItem" onClick={()=>{
                            this.props.datCuoc(item.ma)
                        }}>
                            <img style={{ width: 50, height: 50 }} src={item.hinhAnh} ></img>
                        </button></div>
                    })}
                   
                   
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.BaiTapOanXuXiReducer.mangDatCuoc
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        datCuoc: (maCuoc)=>{
            dispatch({
                type: 'CHON_KBB',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Player)