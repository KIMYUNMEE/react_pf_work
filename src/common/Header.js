import {NavLink} from "react-router-dom";

function Header(){
  const active = {color: "#000"};
  return (  
    <header>
      <div className="inner">
        <h1>
        <NavLink activeStyle={active} exact to="/">Snohetta</NavLink>
        </h1>

        <ul id="gnb">
          <li><NavLink activeStyle={active}  to="/department">DEPARTMENT</NavLink></li>
          <li><NavLink activeStyle={active}  to="/board">BOARD</NavLink></li>
          <li><NavLink activeStyle={active}  to="/gallery">GALLERY</NavLink></li>
          <li><NavLink activeStyle={active}  to="/youtube">YOUTUBE</NavLink></li>
          <li><NavLink activeStyle={active}  to="/location">LOCATION</NavLink></li>
          <li><NavLink activeStyle={active}  to="/membership">MEMBERSHIP</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;