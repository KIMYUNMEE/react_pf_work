import { useEffect, useState } from "react";
function Join() {
  const initVal = {
    userid: "",
    pwd1: "",
    pwd2: "",
    email: "",
    comments: "",
    gender: "",
    interests: "",
    essential: "",
  };
  const [val, setVal] = useState(initVal);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  const handleCheck = (e) => {
    const { name } = e.target;
    const isCheck = e.target.checked;
    setVal({ ...val, [name]: isCheck });
  };
  const handleSelect = (e) => {
    const { name } = e.target;
    //console.log(e.target.options);
    const isSelected = e.target.options[e.target.selectedIndex].value;
    setVal({ ...val, [name]: isSelected });
  };
  //submit이벤트 발생하면 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setErr(check(val));
    console.log(val);
  };
  //에러 객체를 반환하는 함수
  const check = (val) => {
    let errs = {};
    let eng = /[a-zA-Z]/;
    let num = /[0-9]/;
    let spc = /[!@#$%^&*]/;
    if (!val.userid || val.userid.length < 5) {
      errs.userid = "아이디 5글자 이상 입력하세요";
    }
    if (
      !val.pwd1 ||
      val.pwd1.length < 5 ||
      !eng.test(val.pwd1) ||
      !num.test(val.pwd1) ||
      !spc.test(val.pwd1)
    ) {
      errs.pwd1 =
        "비밀번호는 5글자 이상, 문자,숫자,특수문자를 모두 포함해서 입력하세요";
    }
    if (!val.email || val.email.length < 8 || !/@/.test(val.email)) {
      errs.email = "이메일주소를 8글자 이상 입력하세요";
    }
    if (!val.pwd2 || val.pwd1 !== val.pwd2) {
      errs.pwd2 = "두개의 비밀번호를 동일하게 입력하세요";
    }
    if (!val.comments || val.comments.length < 10) {
      errs.comments = "남기는말을 10글자 이상 입력하세요";
    }
    if (!val.gender) {
      errs.gender = "성별을 선택하세요";
    }
    if (!val.interests) {
      errs.interests = "관심사를 하나이상 선택하세요.";
    }
    if (!val.agree) {
      errs.agree = "수신동의를 하나이상 선택하세요.";
    }
    if (!val.essential) {
      errs.essential = "필수항목에 동의하세요.";
    }
    return errs;
  };

  useEffect(() => {
    console.log(err);
    const len = Object.keys(err).length;
    if (len === 0 && isSubmit) {
      console.log("인증 성공");
      setSuccess(true);
    } else {
      console.log("인증 실패");
      setSuccess(false);
    }
  }, [err]);
  return (
    <section className="content join">
      <div className="inner">
        <h2>
          Join
          <br />
          us
        </h2>
        <p>Welcome! Refolio</p>
        <span>Let's scale your brand, together</span>
        <div className="join_box">회원정보입력 > 약관동의 > 회원가입</div>
        {success ? <div>회원가입을 축하합니다.</div> : null}
        <h3>필수입력</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="h">회원가입 입력 폼 양식</legend>
            <table>
              <caption className="h">회원가입 입력</caption>
              <tbody>
                {/* userid */}
                <tr>
                  <th scope="row">
                    <label htmlFor="userid">아이디</label>
                  </th>
                  <td>
                    <input
                      type="text"
                      id="userid"
                      name="userid"
                      placeholder="아이디를 입력하세요"
                      onChange={handleChange}
                    />
                    <span className="err">{err.userid}</span>
                  </td>
                </tr>
                {/* password */}
                <tr>
                  <th scope="row">
                    <label htmlFor="pwd1">비밀번호</label>
                  </th>
                  <td>
                    <input
                      type="password"
                      id="pwd1"
                      name="pwd1"
                      placeholder="비밀번호를 입력하세요"
                      onChange={handleChange}
                    />
                    <span className="err">{err.pwd1}</span>
                  </td>
                </tr>
                {/* re password */}
                <tr>
                  <th scope="row">
                    <label htmlFor="pwd2">비밀번호 확인</label>
                  </th>
                  <td>
                    <input
                      type="password"
                      id="pwd2"
                      name="pwd2"
                      placeholder="비밀번호를 재입력하세요"
                      onChange={handleChange}
                    />
                    <span className="err">{err.pwd2}</span>
                  </td>
                </tr>
                {/* email */}
                <tr>
                  <th scope="row">
                    <label htmlFor="email">이메일</label>
                  </th>
                  <td>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="이메일 주소를 입력하세요"
                      onChange={handleChange}
                    />
                    <span className="err">{err.email}</span>
                  </td>
                </tr>

                <tr>
                  <th scope="row">이메일 수신동의</th>
                  <td>
                    <p>관련된 정보의 이메일 수신에 동의합니다.</p>
                    <label htmlFor="male">동의함</label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      onChange={handleCheck}
                    />
                    <label htmlFor="femal">동의안함</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      onChange={handleCheck}
                    />
                    <span className="err">{err.agree}</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">SMS 수신동의</th>
                  <td>
                    <p>관련된 정보의 SMS 수신에 동의합니다.</p>
                    <label htmlFor="male">동의함</label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      onChange={handleCheck}
                    />
                    <label htmlFor="femal">동의안함</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      onChange={handleCheck}
                    />
                    <span className="err">{err.agree}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
        <h3>추가입력</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="h">회원가입 입력 폼 양식</legend>
            <table>
              <caption className="h">회원가입 입력</caption>
              <tbody>
                {/* gender */}
                <tr>
                  <th scope="row">성별</th>
                  <td>
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      onChange={handleCheck}
                    />
                    <label htmlFor="femal">Female</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      onChange={handleCheck}
                    />
                    <span className="err">{err.gender}</span>
                  </td>
                </tr>
                {/* interests */}
                <tr>
                  <th scope="row">관심분야</th>
                  <td>
                    <label htmlFor="sport">Sports</label>
                    <input
                      type="checkbox"
                      id="sports"
                      name="interests"
                      onChange={handleCheck}
                    />
                    <label htmlFor="music">Music</label>
                    <input
                      type="checkbox"
                      id="music"
                      name="interests"
                      onChange={handleCheck}
                    />
                    <label htmlFor="game">Game</label>
                    <input
                      type="checkbox"
                      id="game"
                      name="interests"
                      onChange={handleCheck}
                    />
                    <span className="err">{err.interests}</span>
                  </td>
                </tr>
                {/* comments */}
                <tr>
                  <th scope="row">
                    <label htmlFor="comments">남기는말</label>
                  </th>
                  <td>
                    <textarea
                      col="30"
                      row="10"
                      id="comments"
                      name="comments"
                      placeholder="남기는 말을 입력해주세요."
                      onChange={handleChange}
                    ></textarea>
                    <span className="err">{err.comments}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="h">회원가입 입력 폼 양식</legend>
            <table>
              <caption className="h">회원가입 입력</caption>
              <tbody>
                <tr className="mem">
                  <td className="member_wrap">
                    <div className="member">
                      <p>회원약관</p>

                      <textarea
                        id="comments"
                        name="comments"
                        onChange={handleChange}
                      >
                        제 1 장 총칙 제 1 조 (목적) 1. 본 약관은 기업마당
                        사이트가 제공하는 모든 서비스(이하 "서비스")의 이용조건
                        및 절차, 이용자와 기업마당 사이트의 권리, 의무,
                        책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
                        제 2 조 (약관의 효력과 변경) 1. 기업마당 사이트는 귀하가
                        본 약관 내용에 동의하는 경우 기업마당 사이트의 서비스
                        제공 행위 및 귀하의 서비스 사용 행위에 본 약관이
                        우선적으로 적용됩니다. 2. 기업마당 사이트는 본 약관을
                        사전 고지 없이 변경할 수 있고 변경된 약관은 기업마당
                        사이트 내에 공지하거나 e-mail을 통해 회원에게 공지하며,
                        공지와 동시에 그 효력이 발생됩니다. 이용자가 변경된
                        약관에 동의하지 않는 경우, 이용자는 본인의 회원등록을
                        취소 (회원탈락)할 수 있으며 계속 사용의 경우는 약관
                        변경에 대한 동의로 간주 됩니다. 제 3 조 (약관 외 준칙)
                        1. 본 약관에 명시되지 않은 사항은 전기통신기본법,
                        전기통신사업법, 정보통신윤리위원회심의규정, 정보통신
                        윤리강령, 프로그램보호법 및 기타 관련 법령의 규정에
                        의합니다. 제 4 조 (용어의 정의) 본 약관에서 사용하는
                        용어의 정의는 다음과 같습니다. 1. 이용자 : 본 약관에
                        따라 기업마당 사이트가 제공하는 서비스를 받는 자. 2.
                        가입 : 기업마당 사이트가 제공하는 신청서 양식에 해당
                        정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을
                        완료시키는 행위. 3. 회원 : 기업마당 사이트에 개인 정보를
                        제공하여 회원 등록을 한 자로서 기업마당 사이트가
                        제공하는 서비스를 이용할 수 있는 자. 4. 비밀번호 :
                        이용자와 회원ID가 일치하는지를 확인하고 통신상의 자신의
                        비밀보호를 위하여 이용자 자신이 선정한 문자와 숫자의
                        조합. 5. 탈퇴 : 회원이 이용계약을 종료시키는 행위.
                      </textarea>
                      <input
                        type="checkbox"
                        id="sports"
                        name="essential"
                        onChange={handleCheck}
                      />
                      <label htmlFor="sport">
                        이용약관에 동의합니다.(필수)
                      </label>
                      <span className="err">{err.essential}</span>
                      <p>개인정보 수집 및 이용 동의</p>
                      <textarea
                        id="comments"
                        name="comments"
                        onChange={handleChange}
                      >
                        제 5 조 (이용계약의 성립) 1. 이용계약은 신청자가
                        온라인으로 기업마당 사이트에서 제공하는 소정의 가입신청
                        양식에서 요구하는 사항을 기록하여 가입을 완료하는 것으로
                        성립됩니다. 2. 기업마당 사이트는 다음 각 호에 해당하는
                        이용계약에 대하여는 가입을 취소할 수 있습니다. ① 다른
                        사람의 명의를 사용하여 신청하였을 때 ② 이용계약 신청서의
                        내용을 허위로 기재하였거나 신청하였을 때 ③ 다른 사람의
                        기업마당 사이트 서비스 이용을 방해하거나 그 정보를
                        도용하는 등의 행위를 하였을 때 ④ 기업마당 사이트를
                        이용하여 법령과 본 약관이 금지하는 행위를 하는 경우 ⑤
                        기타 기업마당 사이트가 정한 이용신청요건이 미비 되었을
                        때 제 6 조 (회원정보 사용에 대한 동의) 1. 회원의
                        개인정보는 공공기관의 개인정보보호에 관한 법률에 의해
                        보호됩니다. 2. 기업마당 사이트의 회원 정보는 다음과 같이
                        사용, 관리, 보호됩니다. ① 개인정보의 사용 : 기업마당
                        사이트는 서비스 제공과 관련해서 수집된 회원의 신상정보를
                        본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다. 단,
                        전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가
                        있는 경우, 범죄에 대한 수사상의 목적이 있거나
                        정보통신윤리 위원회의 요청이 있는 경우 또는 기타
                        관계법령에서 정한 절차에 따른 요청이 있는 경우, 귀하가
                        기업마당 사이트에 제공한 개인정보를 스스로 공개한
                        경우에는 그러하지 않습니다. ② 개인정보의 관리 : 귀하는
                        개인정보의 보호 및 관리를 위하여 서비스의
                        개인정보관리에서 수시로 귀하의 개인정보를 수정/삭제할 수
                        있습니다. ③ 개인정보의 보호 : 귀하의 개인정보는 오직
                        귀하만이 열람/수정/삭제 할 수 있으며, 이는 전적으로
                        귀하의 ID와 비밀번호에 의해 관리되고 있습니다. 따라서
                        타인에게 본인의 ID와 비밀번호를 알려주어서는 안되며,
                        작업 종료 시에는 반드시 로그아웃 해 주시기 바랍니다. 3.
                        회원이 본 약관에 따라 이용신청을 하는 것은, 기업마당
                        사이트가 신청서에 기재된 회원정보를 수집, 이용하는 것에
                        동의하는 것으로 간주됩니다. 제 7 조 (사용자의 정보 보안)
                        1. 가입 신청자가 기업마당 사이트 서비스 가입 절차를
                        완료하는 순간부터 귀하는 입력한 정보의 비밀을 유지할
                        책임이 있으며, 회원의 ID와 비밀번호를 사용하여 발생하는
                        모든 결과에 대한 책임은 회원 본인에게 있습니다. 2. ID와
                        비밀번호에 관한 모든 관리의 책임은 회원에게 있으며,
                        회원의 ID나 비밀번호가 부정하게 사용 되었다는 사실을
                        발견한 경우에는 즉시 기업마당 사이트에 신고하여야
                        합니다. 신고를 하지 않음으로 인한 모든 책임은 회원
                        본인에게 있습니다. 종료하지 아니함으로써 제3자가 귀하에
                        관한 정보를 이용하게 되는 등의 결과로 인해 발생하는 손해
                        및 손실에 대하여 기업마당 사이트는 책임을 부담하지
                        아니합니다. 제 8 조 (서비스의 중지) 1. 기업마당 사이트는
                        이용자가 본 약관의 내용에 위배되는 행동을 한 경우,
                        임의로 서비스 사용을 제한 및 중지할 수 있습니다. 제 9 조
                        (서비스의 변경 및 해지) 1. 기업마당 사이트는 귀하가
                        서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은
                        자료로 인한 손해에 관하여 책임을 지지 않으며, 회원이 본
                        서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등
                        내용에 관하여는 책임을 지지 않습니다. 의한 손해에 대하여
                        책임을 부담하지 아니합니다. 제 10 조 (게시물의 저작권)
                        1. 귀하가 게시한 게시물의 내용에 대한 권리는 귀하에게
                        있습니다. 2. 기업마당 사이트는 게시된 내용을 사전 통지
                        없이 편집, 이동할 수 있는 권리를 보유하며, 게시판운영
                        원칙에 따라 사전 통지 없이 삭제할 수 있습니다. 3. 귀하의
                        게시물이 타인의 저작권을 침해함으로써 발생하는 민,
                        형사상의 책임은 전적으로 귀하가 부담하여야 합니다.
                      </textarea>
                      <input
                        type="checkbox"
                        id="sports"
                        name="essential"
                        onChange={handleCheck}
                      />
                      <label htmlFor="sport">
                        개인정보 수집ㆍ이용에 동의합니다.(필수)
                      </label>
                      <span className="err">{err.essential}</span>
                    </div>
                  </td>
                </tr>
                {/* btn set */}
                <tr>
                  <th colSpan="2" className="btnSet">
                    <input type="reset" value="취소하기" />
                    <input type="submit" value="가입하기" />
                  </th>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Join;
