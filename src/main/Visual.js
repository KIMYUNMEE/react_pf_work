
function Visual() {
   const path= process.env.PUBLIC_URL;
    return (
    
           <figure className="visual">
                        <div className="inner">
                            <p>We are Snohetta. We create<br /><a href="">architecture,</a><a href="">landscapes,</a><br /><a href="">interiors,</a><a href="">product design</a><br />and <a href="">graphic design.</a></p>
                            <div className="visual_img"><img src={path + "/img/f470e4cc3df2e718b224293c71383079_1024w.jpeg"} />
                                <div className="img_info"> <em> Snohetta는 30개국에서 온 240명 이상의 사람들이 만들고 있습니다.</em>
                                    <a href="">Read more about us</a>
                                </div></div>
                        </div>
      </figure>
  

  )
}

export default Visual;
