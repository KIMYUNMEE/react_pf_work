import axios from "axios";
import { useEffect, useState } from "react";
  const path= process.env.PUBLIC_URL;
function Intro() {
    
  let [process, setProcess] = useState([]);

  const url = `${path}/db/process.json`;

  useEffect(()=>{
    axios
      .get(url)
      .then(json=>{
        // console.log(json.data.data);
       setProcess(json.data.data);
      })
  })
  return (
       <section id="intro" className="contents_about myScroll">
          <div className="inner">
              <div className="wrap01">
                   <h2>Projects</h2>
                                <div className="wrap02">
                  {
          process.map((data, index)=>{
            return (
                <article key={index}>
                    <div className="pic">
                        <img src={path + data.image} alt={data.alt}></img>
                          <p>{data.date}</p>
                        <span>{data.title}</span>
                        </div>
              </article>
            )
          })
        }     
                    </div>
    <a href="#" className="btn_see">SEE ALL</a>
                </div>
            </div>
</section>

  )
}

export default Intro;