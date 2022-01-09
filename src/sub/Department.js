const path=process.env.PUBLIC_URL;
function Department() {
  return (
    <section className="content department">
      <div className="inner">
        <strong>Snohetta is a place that nobody<br />is from, but anyone can go to.</strong>
        <div>
          <div className="img_wrap">
          <img src={path + "/img/8bded8c72d8e6472af7313be0043ae12_1024w.jpeg"} /> </div>
          <p>Snøhetta (Norwegian pronunciation: [ˈsnøːˌhɛtɑ]) began as a collaborative architectural and landscape workshop, and has remained true to its trans-disciplinary way of thinking since its inception.
Our work strives to enhance our sense of surroundings, identity and relationship to others and the physical spaces we inhabit, whether feral or human-made. Museums, products, reindeer observatories, graphics, landscapes and dollhouses get the same care and attention to purpose.</p>
          <a href="" className="btn_process">EXPLORE OUR PROCESS,PHILOSOPHY,AND VALUES</a>
          <h2>Projects</h2>
          <span>They are samples in a series of contextual examinations rather than isolated masterpieces. They are associative rather than symbolic. They are comments rather than statements. Every story told is a shared experience of contemporary conditions set within a given frame.</span>
          <ul>
            <li><a href=""><img src={path + "/img/d5f7b5c4eb840250d8e097a48795530e_500w.jpg"} /><p>Knubben</p></a></li>
            <li><a href=""><img src={path + "/img/d5f7b5c4eb840250d8e097a48795530e_500w.jpg"} /><p>Knubben</p></a></li>
            <li><a href=""><img src={path + "/img/d5f7b5c4eb840250d8e097a48795530e_500w.jpg"} /><p>Knubben</p></a></li>
          </ul>
          <a href="" className="btn_more">SHOW MORE</a>
          <b>Selected Awards</b>
            <table summary="게시글 번호, 게시글 제목, 작성자, 작성일을 포함한 자유게시판">
                <caption class="hide">회원 자유게시판</caption>
               <thead>
                   <th>Year</th>
                   <th>Award</th>
                   <th>Project</th>
               </thead>
                <tbody>
                    <tr>
                        <td>2004</td>
                        <td><a href="#">Aga Khan Award for Architecture </a></td>
                        <td>Bibliotheca Alexandrina, Egypt</td>
                    </tr>
                    <tr>
                        <td>2009</td>
                        <td><a href="#">Mies van der Rohe Award</a></td>
                        <td>Norwegian National Opera and Ballet, Norway</td>
                    </tr>
                    <tr>
                        <td>2011</td>
                        <td><a href="#">World Architecture Festival, Display </a></td>
                        <td>Norwegian National Opera and Ballet, Norway</td>

                    </tr>
                    <tr>
                        <td>2013</td>
                        <td><a href="#">AIA/ALA Library Building Awrad</a></td>
                        <td>James B. Hunt Jr. Library, USA</td>
                    </tr>
                    <tr>
                        <td>2014</td>
                        <td><a href="#"> MIPIM Award, Best Future Project</a></td>
                        <td>MAX IV Lab, Sweden</td>
                    </tr>
 
                </tbody>
            </table>
          <a href="" className="btn_more">SHOW MORE</a>
          <h2>Pepole</h2>
           <div className="wrap01">
            <ul>
              <li><a href=""><img src={path + "/img/21dcee5f3518b517dd549d33ca245755.jpeg"} /><b>Alex</b><p>Co-founder</p></a></li>
              
              <li><a href=""><img src={path + "/img/0a83df4119de27d5b9833af30d52d16e.jpeg"} /><b>Jess</b><p>Art director</p></a></li>
              <li><a href=""><img src={path + "/img/1c555928970e09d1f70439b7ec4b7c1d.jpeg"} /><b>Max</b><p>Lead architect</p></a></li>
                   
              <li><a href=""><img src={path + "/img/1e7433a4b487f7fd43a83ca4cb3a02d6.jpeg"} /><b>Peter</b><p>Graphic designer</p></a></li>

              <li><a href=""><img src={path + "/img/0e135fe9e52ab7fcd2260517f6759d6c.jpeg"} /><b>Jim</b><p>Project manager</p></a></li>
         <li><a href=""><img src={path + "/img/3f8d8f2ab645f6f8a2a0d4d37a423399.jpeg"} /><b>Ann</b><p>CEO</p></a></li>
               </ul>
            </div>
          <a href="#" className="btn_show">SHOW ALL</a>
            <strong className="txt_project">Start a project?</strong>
                    <a href="" className="contact">CONTACT US</a>
      </div>
      </div>
    </section>
  )
}

export default Department;