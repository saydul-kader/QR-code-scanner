import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import Result from './result'
import { Button } from './components/Button';
import './qr.css'
import './App.css'

 
class Qr extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 15000,
      result: null,
      show_qr: false
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleClick(){
    this.setState({show_qr: true});
    
  }
  handleStop(){
    this.setState({show_qr: false});
    
  }
  handleScan(data){
    this.setState({
      result: data
    })
    console.log(this.state.result)
  }
  handleError(err){
    console.error(err)
  }
  render(){
    if(this.state.result != null){
      var ress = this.state.result; 
    }
    
    const previewStyle = {
      height: 240,
      width: 320,
      
    }
    return(
      <div>
      {this.state.result == null ?
        <div  className="buttons">
        <div className="container">
        
        {!this.state.show_qr? <Button className="btn effect01" target="_blank" onClick={()=> this.handleClick()}><span>Start Scanning</span></Button> : null}
        
        {this.state.show_qr ? <div className="qr"><h1 className="scan-msg">Scan your QR code here</h1>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          /><p>Scanning QR code</p>
          </div> : null}
        </div>
        </div>
         : <Result result={this.state.result}/> }
      </div>
    )
  }
}
export default Qr;
