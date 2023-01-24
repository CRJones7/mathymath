import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./Components/Home"
import Addition from './Components/Addition';
import Subtraction from './Components/Subtraction';
import MixedMath from './Components/MixedMath';
import Multiplication from "./Components/Multiplication"
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
       <div className="App">
        <div className='main'>
      <NavBar/>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/Addition" element={<Addition/>}></Route>
    <Route exact path="/Subtraction" element={<Subtraction/>}></Route>
    <Route exact path="/MixedMath" element={<MixedMath/>}></Route>
    <Route exact path='Multiplication' element={<Multiplication/>}></Route>
    </Routes>
    </div>
    </div>
    </Router>
    
  );
}

export default App;
