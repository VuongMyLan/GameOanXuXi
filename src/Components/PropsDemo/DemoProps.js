import React, { Component } from 'react'
import Product from './Product'

export default class DemoProps extends Component {
    render() {
        let object1 = {
            price: 1000,
            id: 1,
            title: 'Iphone',
            img: 'https://picsum.photos/200'

        }

        let object2 = {
            price: 2000,
            id: 2,
            title: 'IphoneXS',
            img: 'https://picsum.photos/200'

        }

        let object3 = {
            price: 3000,
            id: 3,
            title: 'Iphone XS Max',
            img: 'https://picsum.photos/200'

        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Product title="Iphone" price="1000" product={object1}/>
                    </div>
                    <div className="col-4">
                        <Product title="Samsung note 10" price="2000" product={object2}></Product>
                    </div>
                    <div className="col-4">
                        <Product title="Sony XZ" price="3000" product={object3}></Product>
                    </div>

                </div>
            </div>
        )
    }
}
