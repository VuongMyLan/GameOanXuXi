import React, { Component } from 'react'
import GioHang from './GioHang'
import SanPham from './SanPham'

export default class BTDanhSachSanPham extends Component {


    dataProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]

    state = {
        sanPhamChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        }, //state luon co gia trinh mac dinh ban dau

        gioHang: [
            // {maSP: '1', tenSP: 'Iphone', giaBan:1000, soluong:2, hinhAnh:'https://picsum.photos/200'},
            // {maSP: '2', tenSP: 'Iphone2', giaBan:2000, soluong:2, hinhAnh:'https://picsum.photos/300'},

        ]



    }

    setStateXoaSanPham = (maSPXoa) => {
        // console.log('maSPXoa', maSPXoa);

        let gioHangCapNhat = this.state.gioHang;
        // Tim san pham trong gio Hang
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSPXoa);
        if(index != -1) {
            gioHangCapNhat.splice(index,1)
        }

        // setState: set lai state cho gio hang 
        this.setState({
            gioHang: gioHangCapNhat
        })

    }


    tangGiamSoLuong = (maSP, soluong) => {
            console.log('masp',maSP);
            console.log('soluong',soluong);

        let gioHangCapNhat = this.state.gioHang;
        // Tìm sp bam nut +  hoac - dua vao mã sp
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);
        if(index != -1 ){
            console.log(index)
            gioHangCapNhat[index].soluong += soluong;
            if( gioHangCapNhat[index].soluong <1){
                // Tra ve gia tri cũ
                gioHangCapNhat[index].soluong -= soluong;
                alert('So luong toi thieu la 1')
            }

        }
        this.setState({
            gioHang: gioHangCapNhat
        })


    }


// Ham setState se dc dinh nghia tai component chua state do

    setStateThemGioHang = (sanPhamClick) => {
        // console.log('spClick',sanPhamClick)
        // Tu san Pham nguoi dung click tao ra 1 object giong object trong gio hang
        const spGioHang = {...sanPhamClick,soluong:1}
// Dua vao san pham dc click them vao mang gio hang
        let gioHangCapNhat = this.state.gioHang;
        // gioHangCapNhat.push(spGioHang);
        // Kiem tra san pham click co trong gio hang hay ko
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === sanPhamClick.maSP);
        if(index != -1) {
            // tim thay
            // console.log(index)
            gioHangCapNhat[index].soluong += 1;
        } else {
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
            gioHang: gioHangCapNhat
        })


    }

    renderSanPham = () => {
        return this.dataProduct.map((item, index) => {
            return <div className="col-4" key={index}>
            {/* <div className="card text-white">
                <img className="card-img-top" height={350} src={item.hinhAnh} alt={item.tenSP} />
                <div className="card-body">
                    <h4 className="card-title text-dark">{item.tenSP}</h4>
                    <p className="card-text text-dark">{item.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{
                        this.xemChiTiet(item)
                    }}> Xem Chi tiet</button>
                </div>
            </div> */}
                 <SanPham item = {item} xemChiTiet ={this.xemChiTiet} themGioHang={this.setStateThemGioHang}></SanPham> 
                 {/* Callback function: la ham dong vai tro la tham so truyen vao ham hoac component khac
                    <button onClick ={()=>
                    // call back  function
                    this.setStateThemGioHang
                    } */}
            </div>

        })
    }

     xemChiTiet = (sanPhamClick) => {
         console.log("San pham click", sanPhamClick)
// Goi set state giong ham change color
        this.setState({
            sanPhamChiTiet: sanPhamClick  //gia tri mới
        })


     }

    render() {
        let {maSp, tenSP, heDieuHanh, hinhAnh, ram, rom, giaBan, manHinh,cameraTruoc, cameraSau} = this.state.sanPhamChiTiet;
        return (
            
            <div className="container">
                <GioHang gioHang={this.state.gioHang} xoaSanPham={this.setStateXoaSanPham} tangGiamSoLuong={this.tangGiamSoLuong}></GioHang>
                <h3 className="text-center">
                    Danh Sách Sản phẩm
                </h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row mt-5">
                    <div className="col-4">
                        <h3 className="text-center">Iphone</h3>
                        <img className="w-100" src={hinhAnh} alt={tenSP}/>
                    </div>
                    <div className="col-8">
                    <h3 className="text-center">Thông tin san pham</h3>
                    <table className="table"> 
                        <thead>
                            <tr>
                                <th>Ten San Pham</th>
                                <th>{tenSP}</th>
                            </tr>
                            <tr>
                                <th>Man Hinh</th>
                                <th>{manHinh}</th>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <th>{cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <th>{cameraSau}</th>
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <th>{ram}</th>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <th>{rom}</th>
                            </tr>


                        </thead>
                    </table>
                    </div>

                </div>


            </div>
        )
    }
}
