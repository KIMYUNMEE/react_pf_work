import axios from "axios";
import {useEffect, useState} from "react";

function Community(){
  let [posts, setPosts] = useState([]);
  const path= process.env.PUBLIC_URL;
  const url = `${path}/db/community.json`;

  useEffect(()=>{
    axios
      .get(url)
      .then(json=>{
        console.log(json.data.data);
        setPosts(json.data.data);
      })
  },[]);

  return (
    <section className="content community">
      <div className="inner">
        <h2>Community</h2>
           <div className="news">
          <div className="news_img">
            <img src={path + "/img/854ef8b1ce36f53d95eb686c5906cfaa_500w.jpg"} />
          </div>
          <div className="news_txt">
            <b>News</b>
            <strong>Ocean Space Centre</strong>
            <span>Sep 17, 2021</span>
            <p>The Ocean Space Centre’s regulation plan is now approved<vr/>by Trøndelag County Council.<br/><br/><br/>
The construction of the center is scheduled to start summer<br/> 2022. Our oceans are important sources of food, minerals<br/>and energy – all necessary to our continued existence. The Ocean<br/>Space Centre is set to be one of the world’s most advanced facilities for ocean research and<br/>education, and will be used by Norwegian University of Science and Technology (NTNU)<br/>and SINTEF. The center aims to contribute to the development and restructuring of the maritime<br/>industry locally, nationally and globally.</p>
          </div>
        </div>
        <div className="qna">
            {
          posts.map((data, index)=>{
            return (
              <article key={index}>
                <h1>{data.title}</h1>
                <h1>{data.description}</h1>
                <span>{data.writer}</span>
                <em>{data.date}</em>
              </article>
            )
          })
        }  
        </div>
              
      </div>
    </section>
  )
}

export default Community;