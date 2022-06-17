import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMembers } from "../redux/actions";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
SwiperCore.use(Autoplay);

function Department() {
  let [posts, setPosts] = useState([]);
  const path = process.env.PUBLIC_URL;
  const url = `${path}/db/department.json`;
  const members = useSelector((state) => state.memberReducer.members);
  console.log(members);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then((json) => {
      console.log(json.data.data);
      setPosts(json.data.data);
    });
  }, []);

  return (
    <section className="content department">
      <div className="inner">
        <strong>Department</strong>
        <div>
          <div className="img_wrap">
            <img
              src={path + "/img/d786195f2bf190b64a83591785b586b8_2048w.jpg"}
              alt="deparment이미지"
            />{" "}
          </div>
          <p>
            Snøhetta (Norwegian pronunciation: [ˈsnøːˌhɛtɑ]) began as a
            collaborative architectural and landscape workshop, and has remained
            true to its trans-disciplinary way of thinking since its inception.
            Our work strives to enhance our sense of surroundings, identity and
            relationship to others and the physical spaces we inhabit, whether
            feral or human-made. Museums, products, reindeer observatories,
            graphics, landscapes and dollhouses get the same care and attention
            to purpose.
          </p>
          <a href="" className="btn_process">
            EXPLORE OUR PROCESS,PHILOSOPHY,AND VALUES
          </a>
          <h2>Projects</h2>
          <span>
            They are samples in a series of contextual examinations rather than
            isolated masterpieces. They are associative rather than symbolic.
            They are comments rather than statements. Every story told is a
            shared experience of contemporary conditions set within a given
            frame.
          </span>
          <ul>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={3}
              autoplay={{ delay: 3000 }}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                {" "}
                <li>
                  <a href="">
                    <img
                      src={
                        path + "/img/c77043be0662dee11ea4f6803bf6b4ad_500w.jpg"
                      }
                      alt="project이미지01"
                    />
                    <p>Joslyn Art Museum Expansion</p>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <a href="">
                    <img
                      src={
                        path + "/img/45b3b19863cec842fe4f4868953be4fc_500w.jpg"
                      }
                      alt="project이미지02"
                    />
                    <p>Ex Macello - Aria </p>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <a href="">
                    <img
                      src={
                        path + "/img/d5f7b5c4eb840250d8e097a48795530e_500w.jpg"
                      }
                      alt="project이미지03"
                    />
                    <p>Knubben</p>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <a href="">
                    <img
                      src={
                        path + "/img/3a43ce12ea53f64528be81af7bf3be7d_500w.jpg"
                      }
                      alt="project이미지04"
                    />
                    <p>Swarovski Beletage</p>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <a href="">
                    <img
                      src={
                        path + "/img/0e8cc335448fee4a99a905e532581caf_500w.jpeg"
                      }
                      alt="project이미지05"
                    />
                    <p>King Abdulaziz Centre for World Culture (Ithra)</p>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <a href="">
                    <img
                      src={
                        path + "/img/31e75d752c0005f363e15d5691c8280b_500w.jpg"
                      }
                      alt="project이미지06"
                    />
                    <p>Marmomacc</p>
                  </a>
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
          <a href="" className="btn_more" alt="더보기">
            SHOW MORE
          </a>
          <b>Selected Awards</b>
          <table>
            <caption className="hide">회원 자유게시판</caption>
            <thead>
              <tr>
                <th scope="row">Year</th>
                <th scope="row">Award</th>
                <th scope="row">Project</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2004</td>
                <td>
                  <a href="#">Aga Khan Award for Architecture </a>
                </td>
                <td>Bibliotheca Alexandrina, Egypt</td>
              </tr>
              <tr>
                <td>2009</td>
                <td>
                  <a href="#">Mies van der Rohe Award</a>
                </td>
                <td>Norwegian National Opera and Ballet, Norway</td>
              </tr>
              <tr>
                <td>2011</td>
                <td>
                  <a href="#">World Architecture Festival, Display </a>
                </td>
                <td>Norwegian National Opera and Ballet, Norway</td>
              </tr>
              <tr>
                <td>2013</td>
                <td>
                  <a href="#">AIA/ALA Library Building Awrad</a>
                </td>
                <td>James B. Hunt Jr. Library, USA</td>
              </tr>
              <tr>
                <td>2014</td>
                <td>
                  <a href="#"> MIPIM Award, Best Future Project</a>
                </td>
                <td>MAX IV Lab, Sweden</td>
              </tr>
            </tbody>
          </table>
          <a href="" className="btn_more" alt="더보기">
            SHOW MORE
          </a>
          <h2>Pepole</h2>
          <div className="wrap01">
            <ul>
              <li>
                <a href="">
                  <img
                    src={path + "/img/21dcee5f3518b517dd549d33ca245755.jpeg"}
                    alt="TEAM1"
                  />

                  <b>Alex</b>
                  <p>Co-founder</p>
                </a>
              </li>

              <li>
                <a href="">
                  <img
                    src={path + "/img/0a83df4119de27d5b9833af30d52d16e.jpeg"}
                    alt="TEAM2"
                  />
                  <b>Jess</b>
                  <p>Art director</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src={path + "/img/1c555928970e09d1f70439b7ec4b7c1d.jpeg"}
                    alt="TEAM3"
                  />
                  <b>Max</b>
                  <p>Lead architect</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src={path + "/img/1e7433a4b487f7fd43a83ca4cb3a02d6.jpeg"}
                    alt="TEAM4"
                  />
                  <b>Peter</b>
                  <p>Graphic designer</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src={path + "/img/0e135fe9e52ab7fcd2260517f6759d6c.jpeg"}
                    alt="TEAM5"
                  />
                  <b>Jim</b>
                  <p>Project manager</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src={path + "/img/3f8d8f2ab645f6f8a2a0d4d37a423399.jpeg"}
                    alt="TEAM6"
                  />
                  <b>Ann</b>
                  <p>CEO</p>
                </a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn_show" alt="모두보기">
            SHOW ALL
          </a>
          <strong className="txt_project">Start a project?</strong>
          <a href="" className="contact" alt="연락하기">
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}

export default Department;
