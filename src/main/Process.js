function Process() {
      const path= process.env.PUBLIC_URL;
  return (
        <section id='process' className="contents_about03 myScroll">
                        <div className="inner">
                            <h2>Process</h2>
                            <div className="wrap01">
                                <p>Our working method practices a simultaneous exploration of<br />traditional handicraft and cutting edge difital technology
                                    - a<br/>complementary relationship that drives our creative process.</p>
                                <a href="">LEARN MORE</a>
                            </div>
                            <div className="wrap02">
                                <img src={path + "/img/493b4aed433ebbe96ab8f0f17cbe02ca_1024w.jpeg"} />
                            </div>
                            <strong>Start a project?</strong>
                            <a href="" className="contact">CONTACT US</a>
                        </div>
                    </section>

  )
}

export default Process;