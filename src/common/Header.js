import {NavLink} from "react-router-dom";



function Header(){
  const active = {color: "darkgreen"};
 
  return (  
    <header className="myScroll">
      <div className="inner">
        <h1>
        <NavLink activeStyle={active} exact to="/">React Portfolio</NavLink>
        </h1>

        <ul id="gnb">
          <li><NavLink activeStyle={active} exact to="/department">DEPARTMENT</NavLink></li>
          <li><NavLink activeStyle={active}  to="/community">COMMUNITY</NavLink></li>
          <li><NavLink activeStyle={active}  to="/gallery">GALLERY</NavLink></li>
          <li><NavLink activeStyle={active}  to="/youtube">YOUTUBE</NavLink></li>
          <li><NavLink activeStyle={active}  to="/location">LOCATION</NavLink></li>
          <li><NavLink activeStyle={active}  to="/join">JOIN</NavLink></li>
        </ul>

   
        <a href="#" className="btnCall" onClick={(e) => {
          e.preventDefault();
           const btnCall = document.querySelector(".btnCall"); 
const menuMo = document.querySelector(".menuMo"); 
     btnCall.classList.toggle("on"); 
    menuMo.classList.toggle("on");
        }}>
                <span>메뉴호출</span>
            </a>
            <nav className="menuMo">
                <h1>
                    <a href="#">Snohetta</a>
          </h1>
         
                <ul id="gnbMo">
            <li><NavLink activeStyle={active} exact to="/department">DEPARTMENT</NavLink></li>
            <li><NavLink activeStyle={active}  to="/community">COMMUNITY</NavLink></li>
              <li><NavLink activeStyle={active}  to="/gallery">GALLERY</NavLink></li>
                    <li><NavLink activeStyle={active}  to="/youtube">YOUTUBE</NavLink></li>
                    
                  
                    <li><NavLink activeStyle={active}  to="/location">LOCATION</NavLink></li>
                    <li><NavLink activeStyle={active}  to="/join">JOIN</NavLink></li>
                </ul>
            </nav>
      </div>
    </header>
  )
}

export default Header;