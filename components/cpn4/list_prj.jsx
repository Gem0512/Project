import React, { Component } from "react";
import 'antd/dist/antd.css';
import './style4.css'


class List extends Component {
  render() {
    const style = {
      opacity: 0.5,  
      // filter: alpha(opacity=50),
      padding: '10px',
      border: '5px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      color: 'white',
      height:'80px',
      background: 'linear-gradient(to right, #4876bd, #009ddc, #00c0c8, #00da88, #b0e736)',
      textAlign: 'center',
      fontFamily: '"Comic Sans MS", cursive, sans-serif'
      
  }
  return (
  <header style={style} class="container">
  
  </header>
  );
  }
}
export default List; 



