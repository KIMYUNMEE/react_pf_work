import axios from "axios";
import { useEffect, useState } from "react";
function Info() {
     const [service, setService] = useState([]);
    const path = process.env.PUBLIC_URL;
    const url = `${path}/db/service.json`;

  useEffect(()=>{
    axios
      .get(url)
      .then(json=>{
        // console.log(json.data.data);
     setService(json.data.data);
      })
  },[])
      return(
    <section id="info" className="contents_about02 myScroll">
                        <div className="inner">
                            <h2>Services</h2>
                  <div className="wrap01">
                      <ul>
                      {
                            service.map((award,index)=>{
                                
                                return (
                                    <div className="hi" key={index}>
                                    <li >
                                        {award.title}
                                    </li>
                                      <div className="h">
                                        <img src={`${path}` + award.img} className="h2" alt={ award.alt}/>
                                            </div>
                                            </div>
                                        
                                )
                            })
                          }
                          </ul>
                            </div>
                            <div className="wrap03">
                                <span>About us</span>
                                <p>Snohetta is a place that<br />nobody is from, but<br />anyone can go to.</p>
                                <a href="">DISCOVER</a>
                                {/* <i class="fas fa-long-arrow-alt-right"></i> */}
                            </div>
                        </div>
                    </section>

  )
}
export default Info;