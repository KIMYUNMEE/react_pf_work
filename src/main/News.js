
import { useEffect, useState } from "react";
function News() {
        const basic = [        
    {title: 'Hello1', content: 'Here comes description in detail.' ,date:'2021-01-01'},  
    {title: 'Hello2', content: 'Here comes description in detail.',date:'2021-02-01'},  
    {title: 'Hello3', content: 'Here comes description in detail.',date:'2021-03-01'},  
    {title: 'Hello4', content: 'Here comes description in detail.',date:'2021-04-01'},  
    {title: 'Hello5', content: 'Here comes description in detail.',date:'2021-05-01'},  
    {title: 'Hello6', content: 'Here comes description in detail.',date:'2021-06-01'}      
  ];  
  
  const getLocalItems = () => {
    let data = localStorage.getItem('posts');

    if (data) {
      
      return JSON.parse(data);
    
    } else {
      return basic;
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
            posts.map((post, index) => {
              if (index < 6) {
          
              return (
                <article key={index}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <p>{post.date}</p>
                </article>
                )      
              }
            })
          }
        </div>
      </div>
    </section>
  )
}
export default News;