import 'antd/dist/antd.css';
import './App.css';
import Welcome from './components/cpn1/header'
import Main1 from './components/cpn2/main1'
import Link from 'next/link'

const App = () => {
  
  return (
   <div>
       <Welcome/>
       <Main1/>
       {/* <Link href="./pages//header">
        <a> My second page</a>
      </Link> */}
   </div>
  );
};

export default App;