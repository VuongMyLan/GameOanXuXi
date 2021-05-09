import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    arrProduct = [
        { id: 1, name: 'Iphone', price: 1000 },
        { id: 2, name: 'Iphone X', price: 2000 },
        { id: 3, name: 'Iphone XS', price: 3000 }
    ]


    renderProduct = () => {
        //         const arrTagJSX = [];

        //         for (let i= 0; i< this.arrProduct.length; i++) {
        //             // Moi lan duyet lay ra 1 object trong arrProduct
        //             let product = this.arrProduct[i];
        //             // tu du lieu product tao ra tag jsx
        //             let tagJSX = <div className="card text-white bg-primary">
        //               <img className="card-img-top" src="https://picsum.photos" alt="123" />
        //               <div className="card-body">
        //                 <h4 className="card-title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //               </div>
        //             </div>
        // ;           
        //         // Dua tagjsx vao mang
        //         arrTagJSX.push(tagJSX);
        //         }
        //         return arrTagJSX;
        const arrTagJSX = this.arrProduct.map((product, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src="https://picsum.photos" alt="123" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
                </div>
        });
        return arrTagJSX
    }

// C2: su dung ham map



    render() {
        return (
            <div className="container">
                    <div className="text-center">
                        Danh sách Sản phẩm
                </div>
                    <div className="row">
                        {this.renderProduct()}
                    </div>
                </div>
        )
    }
}
