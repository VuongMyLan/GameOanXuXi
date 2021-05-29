import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let {price, title} = this.props
        let {product} = this.props


        // this.props: la thuoc tinh co san cua react class component, giup chung ta nhan gia tri tu component cha truyen vao
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={product.img} alt={product.title} />
                <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.price}</p>
                </div>
            </div>

        )
    }
}
