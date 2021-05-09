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
      
    </div>
  );
}

export default App;
