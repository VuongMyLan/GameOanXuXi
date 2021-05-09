import React, { Component } from 'react'

export default class HandleEvent extends Component {
    
    
    
    handleClick = (name) =>{
        alert(`hello ${name}`);
    }

    handleClick2 = (event) => {
        this.handleClick('Man dep trai')
    }

    render() {
        return (
            <div className="container">
                {/* C1: su dung arrow function khai bao xu ly su kien */}
                < button id="btn" className="btn btn-success" onClick={(event) => {
                    // event.target.id; //event.target la chinh the xay ra su kien
                    // alert(event.target.className);
                    // alert('cybersoft');
                    this.handleClick('Man dep trai')
                }}>click</button>

                {/* C2: su dung callback function */}
                 <button id="btn" className= "btn btn-succcess" onClick={this.handleClick2}>Click 2</button>


                
            </div>
        )
    }
}
