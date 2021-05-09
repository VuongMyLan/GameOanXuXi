import React, { Component } from 'react'

export default class BTChonXe extends Component {

    state = {
        imgSrc: './img/car/products/black-car.jpg'
    }

    changeColor = (color) => {
        this.setState({
            imgSrc: `./img/car/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4" >
                            <img className="w-100" src={this.state.imgSrc} alt='123'></img>
                        </div>

                        <div className="col-8">
                            <div className="row">
                                <div className="col-3">
                                    <button className="btn bg-dark text-white" onClick={()=>{
                                       this.changeColor('black');
                                    }}>Black color</button>

                                </div>
                                <div className="col-3">
                                    <button className="btn bg-danger text-white" onClick={()=>{
                                       this.changeColor('red');
                                    }}>Red color</button>

                                </div>
                                <div className="col-3">
                                    <button className="btn bg-secondary" onClick={()=>{
                                         this.changeColor('silver');
                                    }}> Silver color</button>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        )
    }
}
