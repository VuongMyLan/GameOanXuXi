import React, { Component, Fragment } from 'react'
import TableSinhVien from './TableSinhVien'
import {connect} from'react-redux'

class FormQuanLySinhVIen extends Component {
    state = {
        value: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }
    }

    handleChangeInput = (event) => {
        // Lay thong tin the dua vao bien event
        let { value, name } = event.target
        //   let value = event.target.value;
        //   let name = event.target.name;
        // this.setState({
        //     [name]: value
        // }, () => {
        //     console.log(this.state);
        // })
        // Lay ra gia tri this.state.value hien tai
        let newValue = {...this.state.value};
        // Lay ra gia tri erroes hien tai
        let newErrors = {...this.state.errors};
        // Thay doi thuoc tinh trong this.state.values
        newValue[name] = value;

        let errorMess = '';
       

        // Lay thuoc tinh minh tu tao tren the
        let typeEmail  = event.target.getAttribute('typeEmail');

        // Xu ly thay doi errors
        if(newValue[name].trim() === ''){
            errorMess = name + 'khong dc bo trong'
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if(typeEmail === 'email'){
            // neu truong dang thay doi sai dinh dang email
            if(!re.test(newValue[name])){
                errorMess = name + 'Khong Dung Dinh dang'
            }
        }
        newErrors[name] = errorMess;

 // Cap nhat lai this.state.values = newValue (gia tri moi thay doi khi nguoi dung handleChange)
        this.setState({
            value: newValue,
            errors: newErrors
        })
        console.log(this.state)
    }

    handleSubtmit = (event) => {
        event.preventDefault(); //Chan su kien reload browser
        // Form hop le khi tat ca value khac rong va tat ca loi phai = rong ==> submit
        let {value, errors} = this.state;
        let valid = true;
        for(let keyName in value) {
            if(value[keyName].trim() === ''){
                // value co 1 truong vi pham ==> bi bo trong
                valid = false
            }
        }

        for(let keyName in errors) {
            if(errors[keyName != '']) {
                valid = false;
            }
        }
        if(!valid) {
            alert('Du Lieu Khong hop Le');
            return;
        }

        // dua du lieu len reduc sau khi lay thong tin tu nguoi dung
        const action = {
            type: 'THEM_SINH_VIEN',
            sinhVien: this.state.value

        }
        this.props.dispatch(action)

    }

    componentWillReceiveProps(newProps){
        this.setState({
            // khi nguoi dung bam nut chinh sua ==> dem props moi tu redux ve gan cho state
            value: newProps.sinhVienSua
        })
    } //Props moi this.props(truoc khi thay doi), newProps la props sau khi thay doi


    render() {
        let {maSinhVien, tenSinhVien, soDienThoai, email} = this.state.value
        return (

            <div className="container">
                <form onSubmit={this.handleSubtmit}>
                    <div className="card-header bg-dark text-white">QUAN LY SINH VIEN</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Ma Sinh Vien</p>
                                    <input className="form-control" name="maSinhVien" value={maSinhVien} onChange={this.handleChangeInput}/>
                                    <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>So dien thoai</p>
                                    <input className="form-control" name="soDienThoai" value={soDienThoai} onChange={this.handleChangeInput}/> 
                                    <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                                    
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Ten Sinh Vien</p>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} value={tenSinhVien}></input>
                                    <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>Email</p>
                                    <input typeEmail="email" className="form-control" name="email" onChange={this.handleChangeInput} value={email}></input>
                                    <p className="text text-danger">{this.state.errors.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-right">
                        <button className="btn btn-success">Them Sinh Vien</button>
                    </div>
                </form>
                <TableSinhVien></TableSinhVien>
            </div>



        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        sinhVienSua: rootReducer.quanLySinhVienReducer.sinhVienSua
    }
}

export default connect(mapStateToProps)(FormQuanLySinhVIen);