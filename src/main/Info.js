function Info() {
    const path= process.env.PUBLIC_URL;
  return (
 <section id="info" className="contents_about02 myScroll">
                        <div className="inner">
                            <h2>Services</h2>
                            <div className="wrap01">
                                <ul>
                                    <li><a href="">Architecture</a></li>
                                    <li><a href="">Landscape</a></li>
                                    <li><a href="">Interior</a></li>
                                    <li><a href="">Product design</a></li>
                                    <li><a href="">Graphic design</a></li>
                                </ul>
                            </div>
                            <div className="wrap02">
                                <img src={path + "/img/e1f202f866fb9af65509c9302c64ad8e_500w.jpg"} />
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