import logo from './logo.svg';
import './App.css';
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'

import {Card, Button} from 'react-bootstrap'
import Landing from './Landing page/landing'
import { useEffect } from 'react';
import axios from 'axios'
import DriverInfo from './DriverInfo';
function App() {
  // useEffect(() => {
  //   axios.get('http://162.0.237.5/api/v1/addresses/').then((res) => {
     
  //     console.log(res.data);
  // })
     
    
    
   
  


  
  // }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
             <Route path="/" element={<Landing />} exact />
             <Route path="/info" element={<DriverInfo />} exact />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
