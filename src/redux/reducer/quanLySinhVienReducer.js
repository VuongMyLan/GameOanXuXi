
const stateDefault = {
    mangSinhVien: [
        {maSinhVien: '1', tenSinhVien:'NguyenVan a', soDienThoai: '00101010101010101', email:'abc@gmail.com'},
        {maSinhVien: '2', tenSinhVien:'NguyenVan b', soDienThoai: '00101010101010101', email:'abcd@gmail.com'}
    ],

    sinhVienSua : {
        maSinhVien: '1', 
        tenSinhVien:'NguyenVan a', 
        soDienThoai: '00101010101010101', 
        email:'abc@gmail.com',
    }
}

export const quanLySinhVienReducer = (state = stateDefault, action) => {
    switch(action.type) {

        case 'THEM_SINH_VIEN':
            {
                let mangSinhVienCapNhat = [...state.mangSinhVien];
                mangSinhVienCapNhat.push(action.sinhVien);
                // Cap nhat lai state
                state.mangSinhVien = mangSinhVienCapNhat;
                return {...state}
            }

        case 'XOA_SINH_VIEN': 
        {
            let mangSinhVienCapNhat = [...state.mangSinhVien];
            mangSinhVienCapNhat = mangSinhVienCapNhat.filter(sv => sv.maSinhVien != action.maSinhVien);

            // Cap nhat lai state
            state.mangSinhVien = mangSinhVienCapNhat;
            return {...state}

        }

        case 'SUA_SINH_VIEN': 
        {
            state.sinhVienSua = action.sinhVien;
            console.log(state.sinhVien)
            return {...state}
        }
        default: {
            return state
        }
    }
}