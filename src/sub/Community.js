import { useEffect, useRef, useState } from "react";

function Community() {
  const frame = useRef(null);
  const input = useRef(null);
  const textarea = useRef(null);
  const updateInput = useRef(null);
  const updateTextarea = useRef(null);
  const showBox = useRef(null);
  const getLocalItems = () => {
    let data = localStorage.getItem("posts");

    if (data) {
      return JSON.parse(data);
    } else {
      return [
        { title: "Hello0", content: "Here comes description in detail." },
        { title: "Hello1", content: "Here comes description in detail." },
        { title: "Hello2", content: "Here comes description in detail." },
        { title: "Hello3", content: "Here comes description in detail." },
      ];
    }
  };
  const [posts, setPosts] = useState(getLocalItems);

  const createPost = () => {
    if (!input.current.value || !textarea.current.value) {
      alert("제목과 본문을 입력하세요");
      return;
    }
    setPosts([
      {
        title: input.current.value,
        content: textarea.current.value,
      },
      ...posts,
    ]);
    input.current.value = "";
    textarea.current.value = "";
  };

  const deletePost = (index) => {
    setPosts(posts.filter((_, postIndex) => postIndex !== index));
  };

  const enableUpdate = (index) => {
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = true;
        return post;
      })
    );
    console.log(posts);
  };

  const disableUpdate = (index) => {
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = false;
        return post;
      })
    );
    console.log(posts);
  };

  const updatePost = (index) => {
    if (!updateInput.current.value || !updateTextarea.current.value) {
      alert("수정할 제목과 본문을 모두 입력하세요.");
      return;
    }
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) {
          post.title = updateInput.current.value;
          post.content = updateTextarea.current.value;
          post.enableUpdate = false;
        }
        return post;
      })
    );
  };
  const path = process.env.PUBLIC_URL;

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
    frame.current.classList.add("on");
  }, [posts]);

  return (
    <section ref={frame} className="content community">
      <div className="inner">
        <h2>Community</h2>
        <div className="news">
          <div className="news_img">
            <img
              src={path + "/img/854ef8b1ce36f53d95eb686c5906cfaa_500w.jpg"}
              alt="community visual이미지"
            />
          </div>
          <div className="news_txt">
            <b>News</b>
            <strong>Ocean Space Centre</strong>
            <span>Sep 17, 2021</span>
            <p>
              The Ocean Space Centre’s regulation plan is now approved
              <br />
              by Trøndelag County Council.
              <br />
              <br />
              <br />
              The construction of the center is scheduled to start summer
              <br /> 2022. Our oceans are important sources of food, minerals
              <br />
              and energy – all necessary to our continued existence. The Ocean
              <br />
              Space Centre is set to be one of the world’s most advanced
              facilities for ocean research and
              <br />
              education, and will be used by Norwegian University of Science and
              Technology (NTNU)
              <br />
              and SINTEF. The center aims to contribute to the development and
              restructuring of the maritime
              <br />
              industry locally, nationally and globally.
            </p>
            <a href="#" className="btn_load">
              Load more news
            </a>
          </div>
        </div>
        <div className="faq">
          <h2>Notice</h2>
          <ul className="notice_tab">
            <li>
              <a href="">
                QNA
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  <br />
                  adipisicing elit.
                </p>
              </a>
            </li>
            <li>
              <a href="">
                FAQ
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  <br />
                  adipisicing elit.
                </p>
              </a>
            </li>
            <li>
              <a href="">
                EVENT
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  <br />
                  adipisicing elit.
                </p>
              </a>
            </li>
          </ul>
          <div className="answer">
            <div>
              <span>FAQ</span>
            </div>
            <div>
              <label htmlFor="search"></label>
              <input type="text" placeholder="Your search" id="search" />
            </div>
          </div>
          <section className="inputBox">
            <label htmlFor="title"></label>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              id="title"
              ref={input}
            />
            <br />
            <label htmlFor="content"></label>
            <textarea
              cols="30"
              rows="5"
              id="content"
              placeholder="질문하고자 하는 내용을 입력하세요"
              ref={textarea}
            ></textarea>
            <br />
            <button
              onClick={() => {
                input.current.value = "";
                textarea.current.value = "";
              }}
            >
              cancel
            </button>
            <button onClick={createPost}>create</button>
          </section>
          <section className="showBox" ref={showBox}>
            {posts.map((post, index) => {
              return (
                <article key={index}>
                  {post.enableUpdate ? (
                    // 수정모드
                    <>
                      <div className="post">
                        <input
                          type="text"
                          defaultValue={post.title}
                          ref={updateInput}
                        />
                        <br />
                        <textarea
                          defaultValue={post.content}
                          ref={updateTextarea}
                        ></textarea>
                      </div>
                      <ul className="btns">
                        <li onClick={() => updatePost(index)}>입력</li>
                        <li onClick={() => disableUpdate(index)}>취소</li>
                      </ul>
                    </>
                  ) : (
                    // 출력모드
                    <>
                      <div className="post">
                        <strong>{post.title}</strong>
                        <p>{post.content}</p>
                      </div>
                      <ul className="btns">
                        <li onClick={() => enableUpdate(index)}>수정</li>
                        <li onClick={() => deletePost(index)}>삭제</li>
                      </ul>
                    </>
                  )}
                </article>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
}

export default Community;
