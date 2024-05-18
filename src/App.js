import logo from './logo.svg';
import './App.css';
// import TestUseEffect from './TestUseEffect'
import {Conditional1, Conditional2} from './Conditional'


function App() {
  return (
    <div>
      {/* <TestUseEffect/> */}
      {(10+2)>10?<Conditional1/>:<Conditional2/>}
      <Conditional1/>
      <Conditional2/>
    </div>
  );
}

export default App;
