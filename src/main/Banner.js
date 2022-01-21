function Banner(){
    const path= process.env.PUBLIC_URL;
  return (
        <section id="banner" className="banner myScroll">
                        <img src={path + "/img/45641fb4fe20f30a66ce6d97e3508e67_2048w.jpg"} />
                        <div className="inner">

                      
                            <a href="" className="btnLook">Look inside Architecture</a>
                        </div>
                    </section>

  )
}
export default Banner;