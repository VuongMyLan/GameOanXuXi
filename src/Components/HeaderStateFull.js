import React, { Component } from 'react'
// Tao state full component bang cu phap rcc (react class component)
export default class HeaderStateFull extends Component {



    // Phuong Thuc render la phuong thuc co san cua react class component chua giao dien ung dung
    render() {
        return (
            <div className="bg-dark text-white">
                <h1 className ="display-4 p-5">Title</h1>
                <p className= "p-5">Content</p>
            </div>
        )
    }
}
