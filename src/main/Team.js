function Team() {
      const path= process.env.PUBLIC_URL;
  return (
      <section id="team" className="contents_about04 myScroll">
                        <div className="inner">
                            <h2>Our team</h2>
                            <div className="wrap01">
                                <ul>
                                    <li><a href="">
                                        <img src={path + "/img/21dcee5f3518b517dd549d33ca245755.jpeg"} />
                                        <b>Alex</b><p>Co-founder</p></a></li>
                                    <li><a href="">
                                        <img src={path + "/img/0a83df4119de27d5b9833af30d52d16e.jpeg"} />
                                        <b>Jess</b><p>Art director</p></a></li>
                                    <li><a href="">
                                    
                                        <img src={path + "/img/1c555928970e09d1f70439b7ec4b7c1d.jpeg"} />
                                        <b>Max</b><p>Lead architect</p></a></li>
                                    <li><a href="">
                                        <img src={path + "/img/1e7433a4b487f7fd43a83ca4cb3a02d6.jpeg"} />
                                        <b>Peter</b><p>Graphic designer</p></a></li>
                                    <li><a href="">
                                        <img src={path + "/img/0e135fe9e52ab7fcd2260517f6759d6c.jpeg"} />
                                        <b>Jim</b><p>Project manager</p></a></li>
                                    <li><a href="">
                                        <img src={path + "/img/3f8d8f2ab645f6f8a2a0d4d37a423399.jpeg"} />
                                        <b>Ann</b><p>CEO</p></a></li>
                                </ul>
                            </div>
                            <a href="#" className="btn_show">SHOW ALL</a>
                        </div>
                    </section>
  

      
  )
}

export default Team;