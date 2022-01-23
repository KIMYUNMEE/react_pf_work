
import {useEffect, useState, useRef} from 'react';
import {useSelector} from 'react-redux';

function Youtube(){
  const frame = useRef(null);
  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);

 const youtube = useSelector(state=>state);
  const vidData = youtube.youtubeReducer.youtube;  

  useEffect(()=>{    
    frame.current.classList.add('on');
  },[]);
  return (
    <section className="content youtube" ref={frame}>
      <div className="inner">
        <h2>Youtube</h2>
        <p className="youtube_txt">Our working method practices a simultaneous exploration of traditional handcraft and cutting edge digital technology - a<br />complementary relationship that drives our creative process.</p>
         <span>They are samples in a series of contextual examinations rather than isolated masterpieces. They are associative rather than symbolic. They are comments rather than statements. Every story told is a shared experience of contemporary conditions set within a given frame.</span>
        <section className="frame">
          {            
            vidData.map((item, index)=>{
              let tit = item.snippet.title;
              let tit_len = tit.length;
              let desc = item.snippet.description;
              let desc_len = desc.length;              
              return (
                <article key={index}>
                  <div className="inner">  
                    <div className="txt">
                      <h2>{(tit_len > 30) ? tit =  tit.substr(0,30)+"..." : tit}</h2>
                      <p>{(desc_len > 150) ? desc =  desc.substr(0,150)+"..." : desc}</p>
                    </div>
                    <div className="pic" onClick={()=>{
                      setIsPop(true);
                      setIndex(index);
                    }}>
                      <img src={item.snippet.thumbnails.medium.url} />    
                      <p className="btn_click">Click me!</p>
                    </div>
                  </div>
                  <a href="#" className="btn_show">SHOW ALL</a>
                </article>
                
              )
            })
          }
        </section>

        {isPop ? <Pop /> : null}
      </div>
      <div className="btn_wrap">
        <button className="btn_more">SEE MORE</button>
      </div>
    </section>
  )

  function Pop(){    
    return (
      <aside className="pop">
        <iframe 
          src={"https://www.youtube.com/embed/"+vidData[index].snippet.resourceId.videoId}  width='100%' height='100%' allowFullScreen
        ></iframe>
        <span onClick={()=>{
          setIsPop(false);
        }}>close</span>
      </aside>
    )
  }
}

export default Youtube;