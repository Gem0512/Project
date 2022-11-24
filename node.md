# Arrow Function
    
    // Trước ES6
    function phuongThuc1() 
    { 
        console.log('niithanoi.edu.vn'); 
    }
    // Hoặc
    var phuongThuc2 = function(){ 
        console.log('niithanoi.edu.vn'); 
    }
    // Từ ES6+
    var phuongThuc3 = () => {
        console.log('niithanoi.edu.vn');
    }
# Let và Const
    + Để quản lý code tốt hơn, từ ES6 bạn sẽ sử dụng từ khóa let và const thay vì từ khóa var.
          - let là từ khóa xác định một biến cục bộ giới hạn phạm vi của chúng đối với khối mà chúng được khai báo.
          - const cũng giống let, nhưng dùng để xác định một biến hằng số có giá trị không thể thay đổi.
# Class và từ khoá this
        
    // Tạo ra một class SinhVien
    class SinhVien {
        //Hàm khởi tạo 
        constructor(hoTen, gioiTinh, MSSV, namSinh) {
            this.hoTen = hoTen;
            this.gioiTinh = gioiTinh;
            this.namSinh = namSinh;
            this.MSSV = MSSV;
        }
        
        //Khai báo phương thức
        hocBai() {
            console.log('Đang học bài...');
        }
        diNgu() {
            console.log('Đang ngủ...');
        }
        xemPhim() {
            console.log('Đang xem phim...');
        }

    }
    ==> Khi muốn tạo ra đối tượng cụ thể thì ta sẽ sử dụng class SinhVien này:
        var sinhVien1 = new SinhVien();
        var sinhVien2 = new SinhVien();
        var sinhVien3 = new SinhVien();
    + Sau đó khi khởi tạo đối tượng thì ta sẽ truyền đối số như thế này:
         var sinhVien1 = new SinhVien(a, b, c, d);

# Phương thức getter và setter
    + Các phương thức getter và setter được sử dụng để truy cập / sửa đổi thuộc tính trong class.

    + Có thể hiểu là một loại hàm để lấy dữ liệu(getter) và một loại hàm dùng đế gán dữ liệu(setter).
    1. Getter 
            get getHoTen() {
                return this.hoTen;
            }
            get getGioiTinh() {
                return this.gioiTinh;
            }
            get getNamSinh() {
                return this.hoTen;
            }
            get getMSSV() {
                return this.MSSV;
            }
    2. Setter   
                        
            set setHoTen(hoTen) {
                this.hoTen = hoTen;
            }

            set setGioiTinh(gioiTinh) {
                this.gioiTinh = gioiTinh;
            }
            set setNamSinh(namSinh) {
                this.namSinh = namSinh;
            }
            set setMSSV(MSSV) {
                this.MSSV = MSSV;
            }
# Phương thức tĩnh
    Từ khóa static định nghĩa một phương thức static cho một lớp, còn được gọi là phương thức tĩnh.

    Các phương thức tĩnh được gọi mà không cần khởi tạo lớp của chúng và không thể được gọi thông qua một đối tượng của lớp.

    Phương thức tĩnh thường được sử dụng để tạo các chức năng tiện ích cho một ứng dụng.

    Ví dụ:
        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static distance(a, b) {
                const dx = a.x - b.x;
                const dy = a.y - b.y;

                return Math.hypot(dx, dy);
            }
        }

        const p1 = new Point(5, 5);
        const p2 = new Point(10, 10);
        p1.distance; //undefined
        p2.distance; //undefined

        console.log(Point.distance(p1, p2)); // 7.0710678118654755

    ==> Chúng ta không thể gọi hàm distance thông qua p1 hoặc p2. Mà phải gọi trực tiếp từ class của nó đó chính là Point.
# Kiểm tra loại đối tượng với instanceof
     + instanceof còn có tác dụng xác định xem đối tượng có phải là một thể hiện (đối tượng) của một class hay không.
# NodeJs 
     + NodeJS là một môi trường thực thi cho javascript. 

     1. NPM  
      - NPM là một trình quản lý package để cài đặt Packages và Node modules vào dự án của bạn giống như PIP cho python.
     2. Import and Export 
       - Import: Sau khi bạn cài đặt Node module bằng NPM trong dự án của mình, bạn sẽ phải sử dụng từ khóa import để sử dụng module đó.
       - Export: Sử dụng từ khóa này khi bạn đang tạo một module / component và bạn chỉ phải return một phần, không phải tất cả các phương thức và biến.
# ReactJS 
      - Reactjs là một thư viện Javascript do Facebook phát triển để xây dựng các Giao diện người dùng tương tác.
      - Nó tuân theo kiến ​​trúc dựa trên components.
  
      - Có nghĩa là bạn sẽ chia toàn bộ phần giao diện người dùng của mình thành các thành phần có thể sử dụng lại, tất cả đều được tạo riêng biệt và cuối cùng được lắp ghép vào một component cha và sau đó được render.
      - Dưới đây là một số nguyên tắc cơ bản, quan trọng cần học trong ReactJS:
         1. Kiến trúc component.
              src
                ├─ components 
                │  ├─ User
                │  │ ├─ Form
                │  │ │ ├─ Form.jsx
                │  │ │ └─ Form.css
                │  │ └─ List.jsx
                │  └─ UI 
                │
                └─ screens
                ├─ User
                │ ├─ Form.jsx
                │ └─ List.jsx
                └─ Root.jsx
# Một lớp component cơ bản trong ReactJS:
    import React from "react";
    class Profile extends React.Component {
    render(){
        // this.props.img_url = 'http://via.placeholder.com/350x150'
    const style = {
        padding: '10px',
        border: '1px solid green',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        color: '#4db1e8',
        textAlign: 'center',
        fontFamily: 'sans-serif'
    }
    return (
    <div style={style}>
    <img src={this.props.logo_url} height="250px"/>
    <h1>{this.props.title}</h1>
    </div>
    );
    }
    }
    module.exports = Profile;
# Import và sử dụng một trong các component ReactJS ở trên:
    import React from "react";
    import ReactDOM from "react-dom";
    import Profile from "./components/Profile"
    ReactDOM.render(
     <Profile 
         logo_url="https://books.agiliq.com/projects/django-design-patterns/en/latest/_static/logo.png"
         title="Mobile App, Web App and API Development and More"/>,
     document.getElementById("main")
    );  
# State and Props   
    + State: Về cơ bản ‘state’ giữ biến đồng bộ. Nếu bạn thay đổi giá trị của một biến state thì thay đổi sẽ được phản ánh ngay lập tức ở tất cả những nơi mà biến cụ thể được sử dụng.
    + Props: Giống như các đối số được truyền trong một hàm hoặc phương thức. Trong React, Props (đối số) được chuyển vào thẻ HTML làm đối số đầu vào.
# Functional (Stateless) Components
    + 1 functional component là một hàm Javascript (hoặc ES6) trả về 1 phần tử/1 element React.
    + Ví dụ: 
        // ES6
        const Example = () => {
        return ( <h1>I'm a functional component!</h1> );
        };
        // cũ
        function Example() {
        return ( <h1>I'm a functional component!</h1> );
        };
    + Vậy 1 React Functional Component là:
        - một function Javascript / ES6 function
        - phải trả về 1 React element
        - nhận props làm tham số nếu cần
# Class (Stateful) Components
    + Chúng phức tạp hơn functional components ở chỗ nó còn có: phương thức khởi tạo, life-cycle, hàm render() và quản lý state (data).
    + Vì vậy, một React class component là:
        - là một class ES6, nó sẽ là một component khi nó "kế thừa" React component.
        - có thể nhận props (trong hàm khởi tạo) nếu cần.
        - có thể maintain data của nó với state
        - phải có 1 method render() trả về 1 React element (JSX), or null
# Tạo kiểu (CSS) trong React.
    1. CSS Stylesheet
       + Đơn giản là các bạn sẽ import file css vào component bằng cách

        import './App.css'
    ==> chỉ import ở 1 component nhưng css được import sẽ được áp dụng lên toàn bộ ứng dụng.
    2. Inline styling
    (
       const styleObject = {backgroundColor: 'white', color: 'red'}

    <div style={styleObject}>Hello</div>
    )
    or 
    (<div style={{backgroundColor: 'white', color: 'red'}}>Hello</div>
    )
    3. CSS Modules
       + CSS Module là một file CSS mà tất cả các tên class và tên hiệu ứng sẽ được bao bọc lại và chỉ có tác dụng trong những file được import.
       (import React from 'react';
        import styles from './DashedBox.css';

        const DashedBox = () => (
        <div className={styles.container}>
            <p className={styles.content}>Get started with CSS Modules style</p>
        </div>
        );

        export default DashedBox;
        )
    // Trong file CSS
        (//DashedBox.css
        :local(.container) {
        margin: 40px;
        border: 5px dashed pink;
        }
        :local(.content) {
        font-size: 15px;
        text-align: center;
        }
        )
    4. Styled-components 
        + Styled-components là một thư viện dành cho React và React Native cho phép bạn viết style ở cấp độ component trong ứng dụng của bạn.
       