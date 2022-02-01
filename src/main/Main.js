import Header from '../common/Header.js';
import Visual from './Visual.js';
import News from './News.js';
import Intro from './Intro.js';
import Info from './Info.js';
import Btns from './Btns.js';
import Process from './Process.js';
import Team from './Team.js';
import Banner from './Banner.js';
import You from './You.js';
import Popup from './Popup.js';
import Anime from '../class/anime.js';
import { useEffect, useState, useRef } from 'react';


function Main() {
    const main = useRef(null);
    const pos = useRef([]);
    const [index, setIndex] = useState(0);
 let [isPop, setIsPop] = useState(false);

  const getIsPop = val => {
    setIsPop(val);
  }
    const getIndex = index => {
        setIndex(index);
        
    }
    const handleResize = () => {
        const secs = main.current.querySelectorAll('.myScroll');
        let arr = [];
        for (let sec of secs) arr.push(sec.offsetTop);
        pos.current = arr;

    }
 
    const handleScroll = () => {
        let scroll = window.scrollY;
        const btns = main.current.querySelectorAll('#btns li');
         const section = main.current.querySelectorAll('.myScroll');
         const point = 500;
       
   
        pos.current.map((pos, index) => {
            
            if (scroll >= pos - point) {
            for(const btn of btns) btn.classList.remove('on');
        btns[index].classList.add('on');    
            for(const sec of section) sec.classList.remove("on");
        section[index].classList.add("on");
    
            }
        })
        
   
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        new Anime(window, {
            prop: 'scroll',
            value: pos.current[index],
            duration: 500
        })
        const isCookie = document.cookie.indexOf("Popup=done");
    //console.log(document.cookie);
    if(isCookie === -1){
      //console.log("쿠키 없음");
      getIsPop(true);
    } else {
      //console.log("쿠키 있음");
      getIsPop(false);
    }
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
           
        }
    }, [index]);
    return (
        <div id='mainWrap' ref={main} >
            <Header type={'main'} />
            <Visual />
            <Intro />
            <Info />
            <Process />
            <Team />
            <News />
               <You />
            <Banner />
            <Btns getIndex={getIndex} />
              {isPop ? <Popup getIsPop={getIsPop} /> : ""}
            
        </div>
    )



}

export default Main;