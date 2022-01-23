
import { useEffect, useState } from "react/cjs/react.development";
function News() {
         
  
  const getLocalItems=()=>{
    let data = localStorage.getItem('posts');

    if (data) {
      
      let result = JSON.parse(data);
      result = result.splice(0,6);
      return result;
    } else {
     
      return [

         {  sr:'../img/21dcee5f3518b517dd549d33ca245755.jpeg', title: 'Hello0', content: 'Here comes description in detail.'},
        {sr:'../img/1b81f603faf67d4874078616a3e4827a.jpeg', title: 'Hello112345', content: 'Here comes description in detail.'},  
        {sr:'../img/21dcee5f3518b517dd549d33ca245755.jpeg', title: 'Hello2', content: 'Here comes description in detail.'},  
        {sr:'../img/21dcee5f3518b517dd549d33ca245755.jpeg', title: 'Hello3', content: 'Here comes description in detail.'}    
      ];
    }
    }
 
   const [posts]= useState(getLocalItems);

  useEffect(()=>{
    localStorage.setItem('posts', JSON.stringify(posts));
  },[posts])
        
  return (
    <section id='news' className='contents_about05 myScroll'>
      <div className="inner">
        <h2>RECENT NEWS</h2>
        
        <div className="txtBox">

          {
            posts.map((post,index)=>{
              return (
                <article key={index}>
                  <img src={post.sr} alt="상자"></img>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
export default News;