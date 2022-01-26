import { useEffect, useRef, useState } from "react";

function Popup(props){
  const popup = useRef(null);
  let [val, setVal] = useState('');
  const handleCheck = e =>{
    const isCheck = e.target.checked;
    setVal(isCheck);
  }

  return(
    <aside id="popup" ref={popup}>
      <div className="content">
        <h2>Welcome my React PortPolio</h2><br/><br/>
              <p>안녕하세요 저의 리엑트 포트폴리오입니다.<br/>
                  이 포트폴리오는 크롬 브라우저에서 호환되고 제작되었습니다.<br/>
                  방문해주셔서 감사합니다.
        </p>
     
      </div>
      <div className="wrap">
        <input type="checkbox" name="ck" id="ck" onChange={handleCheck} />
        <label htmlFor="ck">오늘 하루 그만보기</label>
      </div>
      <a href="#" className="close" onClick={e=>{
        e.preventDefault();
        if(val) setCookie("Popup", "done", 1);
        props.getIsPop(false);
        console.log(document.cookie.indexOf("Popup=done"))
      }}>CLOSE</a>
    </aside>
  )
  function setCookie(cookieName, cookieValue, time){
    const today = new Date();
    const date = today.getDate();
    today.setDate(date + time);
    const duedate = today.toGMTString(); 
  
    document.cookie = `${cookieName} = ${cookieValue}; path ="/"; expires=${duedate}`;
  }
}
export default Popup;