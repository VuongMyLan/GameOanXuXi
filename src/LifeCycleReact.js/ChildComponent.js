import React, { PureComponent } from 'react'

export default class ChildComponent extends PureComponent {
  
// Purecomponent se nhan dang this.props cua component nay neu khong co gi thay doi ==> ko kich hoat render
    constructor(props) {
        super (props);
        console.log('constructor child');
        this.timeout = {}
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps child');
        return null;
    }

    // shouldComponentUpdate(newProps,newState){
    //     // if else nhu the nao de xac dinh co can chay lai hay hong?
    //     return false;
    // }

    render() {
      
        return (
            <div>
            <div className="bg-dark text-white">
              <p className="p-2">child component</p>
              {this.props.object.like}
            </div>
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount child')
        this.timeout = setInterval(()=>{
            console.log('notification')
        },1000)
    }

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate child')
    }

    componentWillUnmount(){
        // thuong dung de clear cac ham hoac gia tri chay ngam cua ung dung
        clearInterval(this.timeout)
        console.log('componentWillUnmount child')
    }
}

