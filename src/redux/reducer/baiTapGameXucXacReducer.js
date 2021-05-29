
const stateDefaultGame = {
    ketQuaChon: true, //boolean
    soBanThang: 0,
    tongSoBanChoi: 90,
    mangXucXac: [
        {hinhAnh: './img/imgGame/1.png', diem:1},
        {hinhAnh: './img/imgGame/2.png', diem:1},
        {hinhAnh: './img/imgGame/6.png', diem:1}
    ]
}

export const  baiTapGameXucXacReducer = (state = stateDefaultGame, action) => {
    switch (action.type){
        case 'CHON_TAI_XIU':{
            state.ketQuaChon = action.ketQuaChon;
            console.log('state',state);
            // Tinh chat bat bien cua redux doi voi kieu du lieu la object hoac array
            return {...state}
        }

        case 'PLAY_GAME': {
            let mangXXNN = [];
            // Ramdom 3 lan de tao ra 3 xuc xac ngau nhien
            for (var i = 1; i <=3; i++) {
                    let soNN = Math.floor(Math.random()*6) +1;
                    // Tu so ngau nhien tao ra 1 object xuc xac
                    let xxnn = {hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN};
                    mangXXNN.push(xxnn);

            }
            // cap nhat lai state
            state.mangXucXac = mangXXNN;
            // Tinh diem tra ket qua
            var tongDiem = mangXXNN.reduce((diem,xxnn,index)=>{
                return diem +=xxnn.diem;
            },0) 
            // so sanh xu ly ket qua
            if((tongDiem > 11 && state.ketQuaChon === true) || (tongDiem <= 11 && state.ketQuaChon === false)) {
                state.soBanThang += 1
            
            }
        // xu ly tang ban choi

            state.tongSoBanChoi += 1
            console.log('state',state)
            return {...state};
        }
    }
    return state;
}
