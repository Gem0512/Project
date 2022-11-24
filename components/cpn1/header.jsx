import React, { Component } from "react";
import 'antd/dist/antd.css';
import './style1.css'


class Welcome extends Component {
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
   <ul>
      <ul class="nav1">
        {/* <img src="https://anhdephd.vn/wp-content/uploads/2022/04/anh-dong-anime-3.gif" height="80px"></img> */}
        <img src="https://i.pinimg.com/originals/4f/cc/1d/4fcc1d2821711b78be84ecea8a0c9322.gif" height="90px"></img>
       Xin chào, mình là Ngọc ^^
      </ul>
      <ul class="nav2">
         <li> HOME </li>
         <li> SẢN PHẨM</li>
         <li> CONTACT </li>
      </ul>
   </ul>
  </header>
  );
  }
}
export default Welcome; 



