import React, { Children, Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCycleReact extends Component {

    constructor(props) {
        super (props);
        console.log('constructor');

        this.state = {
            object : {
                like: 1
            },
            like: 1
        }

    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps');
        return null;
    }
    render() {
        console.log('render')
        return (
            
            <div>
                <h1>{this.state.like}</h1>
                <button className="btn btn-success" onClick={()=>{

                let object = {...this.state.object};
                object.like +=1
                    this.setState({
                       
                            like: this.state.like  + 1,
                            object: object
                    })
                }}>Like</button>
                hello men!  
                <ChildComponent object={this.state.object}></ChildComponent>
            {/* {this.state.like > 5 ? '': <ChildComponent></ChildComponent>} */}
            </div>
        )
    }
// Thuong dung de call api tu backend
    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate')
    }

   componentWillUnmount(){
       console.log('componentWillUnmount')
   }


}
