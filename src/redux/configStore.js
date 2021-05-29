import { combineReducers, createStore } from 'redux';
import {baiTapGameXucXacReducer} from './reducer/baiTapGameXucXacReducer.js'
import {quanLySinhVienReducer} from './reducer/quanLySinhVienReducer.js'
import {BaiTapOanXuXiReducer} from './reducer/BaiTapOanXuXiReducer.js'
const stateDefault = [
    // { maSP: '1', tenSP: 'Iphone', giaBan: 1000, soluong: 2, hinhAnh: 'https://picsum.photos/200' },
    // { maSP: '2', tenSP: 'Iphone2', giaBan: 2000, soluong: 2, hinhAnh: 'https://picsum.photos/300' },
]



const rootReducer = combineReducers({
    // Noi chua toan bo state cua ung dung
    stateGioHang: (state = stateDefault, action) => {

        switch (action.type) {
            case 'THEM GIO HANG':
                const gioHangUpdate = [...state];
                // Kiem tra sp co trong gio hang hay chua
                const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
                if (index !== -1) {
                    gioHangUpdate[index].soluong += 1;
                } else {
                    gioHangUpdate.push(action.spGioHang);
                }
                return gioHangUpdate;

            case 'XOA_GiO_HANG': {
                let gioHangUpdate = [...state];
                // Loc ra cac san pham ko chua ma sp xoa
                gioHangUpdate = gioHangUpdate.filter(spGH => spGH.maSP !== action.maSPClick);
                // reutrn ve state moi => cac ham mapStateToProps tu state se tu doong render lai
                return gioHangUpdate;
            }

            case 'Tang_GIAM_SO_LUONG': {
                console.log(action)
                let gioHangUpdate = [...state];
                let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSPClick);
                if (index !== -1) {
                    gioHangUpdate[index].soluong += action.soluong;
                    if (gioHangUpdate[index].soluong < 1) {
                        gioHangUpdate[index].soluong -= action.soluong
                    }


                }

                return gioHangUpdate;

            }


        }
        return state;


    },
    baiTapGameXucXacReducer: baiTapGameXucXacReducer,
    quanLySinhVienReducer: quanLySinhVienReducer,
    BaiTapOanXuXiReducer: BaiTapOanXuXiReducer,
    
    // State bai tap oan xu xi
    
});



export const store = createStore(rootReducer);
