
const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanXuXi/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/gameOanXuXi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/gameOanXuXi/bao.png', datCuoc: false },
    ],

    ketQua: 'Iron Man, I love 3000!!!',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/gameOanXuXi/bao.png' }
}

const BaiTapOanXuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KBB': {
            // reset mang cuoc
            let mangCuocUpdate = [...state.mangDatCuoc];
            // Tao ra mang cuoc moi tu mang cuoc cu va action.maCuoc do nguoi dung truyen len
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })

            // tim ra ma cuoc de change trang thai cuoc ung voi ma cuoc

            // let index = mangCuocUpdate.findIndex(qc=>qc.ma === action.maCuoc);
            // if(index !== -1) {
            //     mangCuocUpdate[index].datCuoc = true;
            // }

            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }

        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return { ...state }
        }

        case 'END_GAME': {
            state.soBanChoi +=1;

            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'hòa nhau'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'thua rồi, so sad'
                    } else {
                        state.soBanThang +=1
                        state.ketQua = 'Iam iron, I love you 3000'
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang +=1
                        state.ketQua = 'Iam iron, I love you 3000'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'hòa nhau'
                    } else {
                        state.ketQua = 'thua rồi, so sad'
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'thua rồi, so sad'
                    } else if (computer.ma === 'bua') {
                        state.soBanThang +=1
                        state.ketQua = 'Iam iron, I love you 3000'
                    } else {
                        state.ketQua = 'hòa nhau'
                    } break;
                default: state.ketQua= 'Iam iron, I love you 3000';
               
                return {...state}
            }
            return { ...state }
        }

        default: return { ...state }
    }
}

export { BaiTapOanXuXiReducer };