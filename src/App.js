import logo from './logo.svg';
import './App.css';
import {Card, Button} from 'react-bootstrap'
import Landing from './Landing page/landing'
import { useEffect } from 'react';
import axios from 'axios'
function App() {
  useEffect(() => {
    axios.get('http://162.0.237.5/api/v1/addresses/').then((res) => {
     
      console.log(res.data);
  })
     
    
    
   
  


  
  }, []);
  return (
    <div className="App">
    <Landing />
    </div>
  );
}

export default App;
