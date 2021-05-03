import React, { Component } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Qr from './qr.js';
import './App.css';
 
class App extends Component {

  render(){
    
    return(
      <div>
        <Navbar/>
        <h1 className= "title">QR code reader</h1>
        <Qr />
        <div className="footer-container">
        <footer class="site-footer">
      <div >        
       <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by Saydul Kader</p>
          

          
      </div>
      </footer>
      </div>
      </div>
    )
  }
}
export default App;
