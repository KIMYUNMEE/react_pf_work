import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Masonry from "react-masonry-component";

const path=process.env.PUBLIC_URL;

const masonryOptions = {
  fitWidth: false, 
  gutter: 0, 
  itemSelector: ".item" 
}

function Gallery(){ 
  let [items, setItems] = useState([]);   
  let [loading, setLoading] = useState(true);
  let [enableClick, setEnableClick] = useState(true);
  let [interest, setInterest] = useState(true);
  let list = useRef(null);
  let input = useRef(null);
  
  useEffect(()=>{ 
    getFlickr({
      type: "interest",
      count: 10
    });
  },[]);  

  return (
    
    <section className="content gallery">
      <div className="inner">
        <h2 onClick={()=>{          
          if(enableClick && !interest){ 
            setEnableClick(false);           
            list.current.classList.remove("on");         
            setLoading(true);

            getFlickr({
              type: "interest",
              count: 500
            });
          }          
        }}>Gallery</h2>
        <p>Our projects are axamples of attitudes rather than designs.</p>
        <span>They are samples in a series of contextual examinations rather than isolated masterpieces. They are associative rather than symbolic. They are comments rather than statements. Every story told is a shared experience of contemporary conditions set within a given frame.</span>

        <div className="searchBox">
          <input type="text" ref={input} onKeyPress={e=>{
            const tags = input.current.value; 
             
            if(e.key !== "Enter" || tags==="") return;
            if(enableClick){
              setEnableClick(false);  
              setInterest(false);          
              list.current.classList.remove("on");         
              setLoading(true);
      
              const tags = input.current.value;              
              input.current.value = "";

              getFlickr({
                type: "search",
                count: 500,
                tags: tags 
              });
            }            
          }}  placeholder="Your search"/>
          <button onClick={()=>{
            if(enableClick){
              const tags = input.current.value; 
              if(tags==="") return;  

              setEnableClick(false);  
              setInterest(false);             
              list.current.classList.remove("on");         
              setLoading(true);
             
                         
              input.current.value = "";

              getFlickr({
                type: "search",
                count: 500,
                tags: tags 
              });
            }
          }}>Search</button>
        </div>      

       
        {(loading) ? <img className="loading" src={path + "/img/loading2.gif"} /> : ""}
        
        <nav>
          <ul>
            <li><a href="">ALL GALLERY</a></li>
            <li><a href="">ARCHITECTURE</a></li>
            <li><a href="">LANDSCAPE</a></li>
            <li><a href="">INTERIOR</a></li>
            <li><a href="">GRAPHIC DESIGN</a></li>
            <li><a href="">PRODUCT DESIGN</a></li>
        </ul>
        </nav>
      
        <div className="list" ref={list}>         
          <Masonry
            className={"frame"} 
            elementType={"ul"} 
            disableImagesLoaded= {false}
            updateOnEachImageLoad= {false}
            options= {masonryOptions}
          > 
            {
              items.map((item, index)=>{
                
                const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
                return (
                  <li key={index} className="item">                  
                    <div className="inner" >
                      <h2>{item.title}</h2>
                      <img src={imgSrc} />
                      <p>{item.owner}</p>
                      <a href="">View more</a>

                    </div>
                  </li>
                )
              })
              
            }
          </Masonry>  
        </div>
        
      </div>
      
    </section>
  )  
  async function getFlickr(opt){ 
    let url = "";
    
    const baseURL = "https://www.flickr.com/services/rest/?";
    const method1 = "flickr.interestingness.getList";
    const method2 = "flickr.photos.search";
    const key= "b7af47ce68181695942511b2b8cb5b97";
    const count = opt.count;
 
    
    if(opt.type === "interest"){
      url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;  
    }
   
    else if(opt.type === "search"){
      url = `${baseURL}method=${method2}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&tags=${opt.tags}`;
    
    }else{
      console.error("api요청 타입을 interest, search중에서 지정하세요.");
    }

    await axios
    .get(url)
    .then(json=>{      
      setItems(json.data.photos.photo);
    })    
    
   
    setTimeout(()=>{
      list.current.classList.add("on");      
      setLoading(false);
      setTimeout(()=>{
        setEnableClick(true);
      },1000); 
    },1000); 
     
  }

}

export default Gallery;