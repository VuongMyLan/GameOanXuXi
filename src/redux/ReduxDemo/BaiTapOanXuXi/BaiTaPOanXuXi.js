import React, { Component } from 'react'
import './BaiTapOanXuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import {connect} from'react-redux'

class BaiTaPOanXuXi extends Component {
    render() {
        let keyframe = `@keyframes randomItem ${Date.now()} {
            from {top: 0px;}
            to {top: 200px;}`
          
        return (
            <div className="gameOanXuXi">
               
                <div className="row text-center mt-5">
                    <div className="col-4 mt-3">
                        <Player></Player>
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi></KetQuaTroChoi>
                        <button className="btn btn-success p-2 mt-5 display-5" onClick={()=>{
                               this.props.playGame() 
                            
                        }}>Play Game</button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer></Computer>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        playGame: ()=>{
            let count = 0;


            // Khai Bao Ham Lap di lap lai
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type: 'RAN_DOM'
                })
                count ++
                if(count >5){
                    // Dung ham set Interval
                    clearInterval(randomComputerItem)
                    dispatch ({
                        type: 'END_GAME'
                    })
                }
            },100)
            
        } 
    }
}

export default connect(null,mapDispatchToProp)(BaiTaPOanXuXi)