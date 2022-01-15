import { useEffect, useRef, useState } from "react";
function Location(){ 
  const {kakao} = window; 
  const container = useRef(null);
  const btnBranch = useRef(null);
  const [map, setMap] = useState(null);  
  const [index, setIndex] = useState(0); 
  const [toggle, setToggle] = useState(false);
  const info = [
    {
      title: "본점",  
      description:"감자",
      latlng : new kakao.maps.LatLng(37.48771318663092,126.75344867275281),
      imgSrc : process.env.PUBLIC_URL+"/img/marker1.png", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}
    },  
    {
      title: "지점1", 
      description:"감자",
      latlng : new kakao.maps.LatLng(37.507099899564444,126.75639338893572),
      imgSrc : process.env.PUBLIC_URL+"/img/marker2.png", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}
    },
    {
      title: "지점2", 
      description:"감자",
      latlng : new kakao.maps.LatLng(35.17422705914147,129.10766665201712),
      imgSrc : process.env.PUBLIC_URL+"/img/marker3.png", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}
    }
  ];
  const [mapInfo] = useState(info);

  useEffect(()=>{
    console.log('map');
    console.log(index);
    const options = { 
      center: mapInfo[index].latlng, 
      level: 3 
    }  
    const map = new kakao.maps.Map(container.current, options);
    setMap(map);
 
    new kakao.maps.Marker({
      map: map, 
      position: mapInfo[index].latlng, 
      title : mapInfo[index].title,
      image : new kakao.maps.MarkerImage(mapInfo[index].imgSrc, mapInfo[index].imgSize, mapInfo[index].imgPos)
    });
    map.setCenter(mapInfo[index].latlng);   
  
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);  
    map.setZoomable(true); 
    map.setDraggable(true);

    for(const btn of btnBranch.current.children) btn.classList.remove('on');
    btnBranch.current.children[index].classList.add('on');


    const mapSet = ()=> map.setCenter(mapInfo[index].latlng);  
    window.addEventListener('resize',mapSet);

    return ()=>{
      window.removeEventListener('resize',mapSet);
      //컴포넌트가 사라질때마다 container안쪽의 기존 지도내용은 삭제
      //마우스휠 이벤트로 zoom 설정시 밑에쪽에 기존 지도 표시문제 해결
      container.current.innerHTML='';
    } 

  },[index]); 

  return (
    <section className='content location'>
      <div className="inner">
        <h2>Location</h2>
        <p>Snohetta에 오시는 길을 알려드립니다.</p>
        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error.<br />
Maiores delectus cum beatae animi nemo illo veniam excepturi labore et est.</span>
      
        <div id="map" ref={container}></div>

        <ul className="traffic">
          <li>Traffic info</li>
          { 
            toggle ? 
              <li onClick={()=>{
                map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
                setToggle(!toggle);
              }}>Off</li>       
            :            
              <li onClick={()=>{           
                map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                setToggle(!toggle);
              }}>On</li>
          } 
        </ul>

        <ul className="branch" ref={btnBranch}> 
        {  
          mapInfo.map((data,index)=>{
            return <li key={index} onClick={() => setIndex(index)}>{data.title}</li>

            
          })          
          }  
          <li className="off">경기도 부천시 송내대로 43 (상동 632-4번지)
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <p>0(82+)10-1234-5678</p></li>
          <li className="off">부산광역시 수영구 망미동 430-7번지 4층 <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <p>0(82+)10-2345-6789</p></li>
          <li className="off">부산광역시 수영구 망미동 430-7번지 4층 <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <p>0(82+)10-3456-7891</p></li>
        </ul>
        <div className="contact">
          <h3>
            <p className="txt">contact</p>
            We'd love to hear from you.</h3>
          <div><span>Fill out the form and we will<br />contact you shortly to discuss<br />the details of the project</span></div>
          <div>
            <ul>
              <li>
                   <input type="text" name='userid' placeholder='Full name'/>
              </li>
              <li>
                   <input type="text" name='email' placeholder='Email'/>
              </li>
              <li>
                   <input type="number" name='tel' placeholder='Tel'/>
              </li>
              <li>
                   <input type="text" name='company' placeholder='Company' />
              </li>
              <li>
                   <a href="#" className="btn_send">SEND</a>
              </li>
            </ul>
          </div>

        </div>
        
      </div>
    </section>
  )
}
export default Location;