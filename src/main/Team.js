import React from 'react'
import { useSelector } from "react-redux";
function Team() {
  const path = process.env.PUBLIC_URL
     const members = useSelector(state=>state.memberReducer.members);
  return (
      <section id="team" className="contents_about04 myScroll">
                        <div className="inner">
              <h2>Our team</h2>
                {
          members.map((member, index)=>{
            return (
              
              <article key={index} className="wrap01">
                <ul >
                  <li><a href=""> <img src={path+member.image} alt={member.alt}></img>
                 <h3>{member.name}</h3>
                    <p>{member.position}</p>
                    </a>
                    </li>
                  </ul>
                </article>
              
            )            
          })
        }
                <a href="#" className="btn_show">SHOW ALL</a>
                        </div>
                    </section>
  )
}

export default Team;