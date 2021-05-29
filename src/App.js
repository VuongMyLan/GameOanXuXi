import logo from './logo.svg';
import './App.css';
import HeaderStateLess from './Components/HeaderStateLess';
import HeaderStateFull from './Components/HeaderStateFull';
import BaiTapLayOut from './Components/BaiTapLayOut/BaiTapLayOut';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import BTChonXe from './StateDemo/BTChonXe';
import StyleDemo from './StyleDemo/StyleDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BTThucHanhLayout from './Components/BaiTapThucHanhLayout/BTThucHanhLayout';
import BTQuanLyPhim from './RenderWithMap/BTQuanLyPhim';
import DemoProps from './Components/PropsDemo/DemoProps';
import BTDanhSachSanPham from './Components/PropsDemo/BTDanhSachSanPham/BTDanhSachSanPham';
import DanhSachSanPhamRedux from './redux/ReduxDemo/BTGioHangRedux/DanhSachSanPhamRedux';
import BTGameXucXac from './redux/ReduxDemo/BTGameXucXac/BTGameXucXac';
import FormQuanLySinhVIen from './FormQuanLySinhVien/FormQuanLySinhVIen';
import LifeCycleReact from './LifeCycleReact.js/LifeCycleReact';
import Api from './api/Api';
import BaiTaPOanXuXi from './redux/ReduxDemo/BaiTapOanXuXi/BaiTaPOanXuXi';





function App() {
  return (
    <div className = "App">
     {/* <BaiTapLayOut/> */}
     {/* <DataBinding></DataBinding> */}
     {/* <HandleEvent></HandleEvent> */}
      {/* <StateDemo></StateDemo> */}
      {/* <BTChonXe ></BTChonXe> */}
      {/* <StyleDemo></StyleDemo> */}
        {/* <RenderWithMap></RenderWithMap> */}
      <BTThucHanhLayout></BTThucHanhLayout>
      {/* <BTQuanLyPhim></BTQuanLyPhim> */}
      {/* <DemoProps></DemoProps> */}
      {/* <BTDanhSachSanPham></BTDanhSachSanPham> */}
      {/* <DanhSachSanPhamRedux></DanhSachSanPhamRedux> */}
      {/* <BTGameXucXac></BTGameXucXac> */}
      {/* <FormQuanLySinhVIen></FormQuanLySinhVIen> */}
      {/* <LifeCycleReact/> */}
      {/* <Api></Api> */}
      {/* <BaiTaPOanXuXi></BaiTaPOanXuXi> */}
      
    </div>
  );
}

export default App;
