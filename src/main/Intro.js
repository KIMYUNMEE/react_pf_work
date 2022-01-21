function Intro() {
  const path= process.env.PUBLIC_URL;
  return (
       <section id="intro" className="contents_about myScroll">
                        <div className="inner">
                            <div className="wrap01">
                                <h2>Projects</h2>
                                <div className="wrap02">
                                    <article>
                                        <div className="pic">
                                            <img src={path + "/img/8e0ea114c467c7bccc4af47e13ea6ebf_500w.jpg"} />
                                            <p>2000-2008</p>
                                            <span>Norwegian National Opera and Ballet</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="pic">
                                            <img src={path + "/img/f5941d7b5f21c4ce86b97178c325b18f_500w.jpg"} />
                                            <p>2017-2022</p>
                                            <span>Airside Hong Kong</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="pic">
                                            <img src={path + "/img/cb7ecdbe7742076504c3b05024d19d91_500w.jpg"} />
                                            <p>2017-2024</p>
                                            <span>Shanghai Grand Opera House</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="pic">
                                            <img src={path + "/img/76246a2559c136b35d977e57eae04a35_500w.jpg"} />
                                            <p>in process</p>
                                            <span>Pirelli 35 Refurbishment</span>
                                        </div>
                                    </article>
                                </div>
                                <a href="#" className="btn_see">SEE ALL</a>
                            </div>
            
                        </div>
                    </section>

  )
}

export default Intro;