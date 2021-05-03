import React, { Component } from 'react';

class Result extends Component{
    
  render(){
      var result = this.props.result;
      console.log(this.props)
      return(
         <div>
             <p>{result}</p>
         </div>
      )
  }
}

export default Result;