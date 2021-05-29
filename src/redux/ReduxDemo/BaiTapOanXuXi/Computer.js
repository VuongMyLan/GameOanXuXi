import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
       let keyframe = `@keyframes randomItem${Date.now()} {
        0% {top: -50px;}
        25% {top: 100px;}
        50% {top: -50px;}
        75% {top: 100px;}
        100% {top: 0;}
    
    }` 
        return (
            <div className="text-center playerGame">
                <style>
                    {keyframe}
                </style>
                <div className="theThink" style={{position:'relative'}}>
                <img className="mt-3" style={{transform:'rotate(120deg)', left: '30%', width: 100, height: 100,position: 'absolute', animation: `randomItem${Date.now()} 0.5s`}} src={this.props.computer.hinhAnh}></img>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src={"./img/gameOanXuXi/playerComputer.png"}></img>             

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanXuXiReducer.computer
    }
}
export default connect(mapStateToProps)(Computer)

