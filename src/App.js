import {Route,Switch} from "react-router-dom";
import "./css/style.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import Main from "./main/Main.js";
import Department from "./sub/Department.js";
import Community from "./sub/Community.js";
import Gallery from "./sub/Gallery.js";
import Location from "./sub/Location.js";
import Join from "./sub/Join.js";
import Youtube from "./sub/Youtube.js";
import { useEffect } from 'react';
function App() {  
  useEffect(()=>{
    document.body.classList.remove('first');

    const mask = document.querySelector('.mask');
    if(mask){      
      setTimeout(()=>{
        mask.classList.add('off');
        setTimeout(()=>{
          mask.remove();
        },1000); //transiton 1초동안 fadeout될때까지 기다리는 시간
      },4000);//처음 App컴포넌트가 index.html에 연결될때까지의 시간 지연
    } 

  },[]);
  return (
    <div className="App"> 
  
        <Switch>
        <Route exact path="/">
          <Main />
        </Route> 

        <Route path='/'>
          <Header type={'sub'} />
        </Route>
      </Switch>   

    
      {/* <Route exact path="/" component={Main}></Route>  */}
      <Route  path="/department" component={Department}></Route>
      <Route  path="/Community" component={Community}></Route>
      <Route  path="/gallery" component={Gallery}></Route>
      <Route  path="/youtube" component={Youtube}></Route>
      <Route path="/location" component={Location}></Route>
      <Route  path="/join" component={Join}></Route>  
          
      <Footer />      
    </div>
  );
}

export default App;
