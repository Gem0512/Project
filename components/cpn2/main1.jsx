import React, { Component } from "react";
import 'antd/dist/antd.css';
import './style2.css'
// import ava from './images/ava.jpg';

class Welcome extends Component {
  render() {
    const style = {
    fontWeight: 'bold',

      // opacity: 1,
    // filter: alpha(opacity=50),
    background: 'linear-gradient(to right, #4876bd, #009ddc, #00c0c8, #00da88, #b0e736)',
      // textAlign: 'center',
      // width:'100%',
      fontFamily: '"Comic Sans MS", cursive, sans-serif',
      // fontFamily: 'Helvetica, Arial, sans-serif',
      height:'2080px'
  }
  return (
  <div style={style} class="container" >
    <div class="left">
    {/* <img class="img-responsive" src={ava} height="500px"></img> */}

    <img class="img-responsive" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/300430276_629579768754788_7080948339937979712_n.png?stp=dst-png_p1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=vKkUJrTAAa0AX_bUAPl&_nc_ht=scontent.fhan2-4.fna&oh=03_AdTYgvSQ6ay7RiBC6Qspf4Wil4Rr8QAl4_dzPUO1fwbjfw&oe=63709C12" height="500px"></img>
    <div class="left-2">
    <span>GIỚI THIỆU VỀ BẢN THÂN</span>
    <p>Mình là Ngọc, một người rất nhiệt tình trong mọi việc, mình tự thấy mình là một người cầu toàn, chăm chỉ tìm tòi, học hỏi</p>
   </div>
   
   <div class="left-1">
   <span>
      MỤC TIÊU NGHỀ NGHIỆP
    </span>
    <p>
    Trở thành 1 front end delopver và sau đó thành full stack

    </p>
   </div>
   
    </div>
    <div class="right">
    <div class="right-profile">
      <div class="right-profile-1">
      <ul>INFORMATION</ul>
        <li>Name: Nguyễn Thị Thanh Ngọc</li>
        <li>Date of birth: 05/12/2002</li>
        <li>Home town: Thanh Hóa</li>
        <li>Address: Hà Đông, Hà Nội</li>
      </div>
     
      <div class="right-profile-3">
        <ul>EDUCATION LEVEL</ul>
        <li>Major: Information Technology</li>
        <li>Univecity: Học viện Công nghệ Bưu chính Viễn thông</li>

       
      </div>
      <div class="container1">
    <ul>SKILL-SET</ul>
    <div class="bar learning" data-skill="JAVA"></div>
    <div class="bar back basic" data-skill="Python"></div>
    <div class="bar back intermediate" data-skill="C/C++"></div>
    <div class="bar front advanced" data-skill="CSS3"></div>
    <div class="bar front expert" data-skill="HTML5"></div>
    <div class="bar front expert" data-skill="JAVASCRIPT"></div>

  </div>

  <div class="container1">
    <ul>SOFTWARE-SKILLS</ul>
    <div class="bar learning1" data-skill="VS CODE"></div>
    <div class="bar back basic1" data-skill="DEVC"></div>
    <div class="bar back intermediate1" data-skill="NETBEAN"></div>
    <div class="bar front advanced1" data-skill="INTELLIJ"></div>
    <div class="bar front expert1" data-skill="Adobe Illustrator"></div>
    <div class="bar front expert1" data-skill="PHOTOSHOP"></div>

  </div>
 
    </div>
    </div>
  </div>
  );
  }
}
export default Welcome; 







