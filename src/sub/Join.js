import { useEffect, useRef, useState } from "react";
function Join() {
  const initVal={
    userid : '',
    pwd1 : '',
    pwd2 : '',
    email: '',
    comments: '',
    gender: '',
    interests: '',
    edu: ''
  }
  const [val, setVal] = useState(initVal);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = e => {   
    const {name, value} = e.target;     
    setVal({...val, [name]: value});     
  }
  const handleCheck = e => {    
    const {name} = e.target;  
    const isCheck = e.target.checked;   
    setVal({...val, [name]: isCheck});  
  }
  const handleSelect = e => {
    const {name} = e.target;
    //console.log(e.target.options);
    const isSelected = e.target.options[e.target.selectedIndex].value;
    setVal({...val, [name]: isSelected});
  }
  //submit이벤트 발생하면 실행되는 함수
  const handleSubmit = e =>{ 
    e.preventDefault();   
    setIsSubmit(true);
    setErr(check(val));  
    console.log(val);
  }
  //에러 객체를 반환하는 함수
  const check = val=>{
    let errs = {};  
    let eng = /[a-zA-Z]/;
    let num = /[0-9]/;
    let spc = /[!@#$%^&*]/;
    if( !val.userid || val.userid.length <5 ){
      errs.userid='아이디 5글자 이상 입력하세요';
    } 
    if( !val.pwd1 || val.pwd1.length<5 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)){
      errs.pwd1='비밀번호는 5글자 이상, 문자,숫자,특수문자를 모두 포함해서 입력하세요';
    }
    if( !val.email || val.email.length <8 || !/@/.test(val.email) ){
      errs.email='이메일주소를 8글자 이상 입력하세요';
    }
    if( !val.pwd2 || val.pwd1 !== val.pwd2 ){
      errs.pwd2='두개의 비밀번호를 동일하게 입력하세요';
    }
    if( !val.comments || val.comments.length <10 ){
      errs.comments='남기는말을 10글자 이상 입력하세요';
    }
    if( !val.gender ){
      errs.gender='성별을 선택하세요';
    }
    if( !val.interests ){
      errs.interests='관심사를 하나이상 선택하세요.';
    }
    if( !val.agree ){
      errs.agree='수신동의를 하나이상 선택하세요.';
    }
    return errs;
  }

  useEffect(()=>{    
    console.log(err);
    const len =  Object.keys(err).length;
    if(len === 0 && isSubmit){
      console.log('인증 성공');
      setSuccess(true);     
    }else{
      console.log('인증 실패');
      setSuccess(false);
    }
  }, [err]);
  return (
    <section className="content join">
      <div className="inner">

        <h2>Join<br/>us</h2>
          <p>Welcome! Snohetta</p>
        <span>Let's scale your brand, together</span>
        
        {success ? <div>회원가입을 축하합니다.</div> : null}
        <h3>필수정보</h3>
        <form onSubmit={handleSubmit} >
          <fieldset>
            <legend className='h'>회원가입 입력 폼 양식</legend>
            <table>
              <caption className='h'>회원가입 입력</caption>
              <tbody>
                {/* userid */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="userid">아이디</label>
                  </th>
                  <td>
                    <input 
                      type="text" 
                      id='userid'
                      name='userid'
                      placeholder='아이디를 입력하세요'                    
                      onChange={handleChange}
                    />
                    <span className='err'>{err.userid}</span>
                  </td>
                </tr> 
                {/* password */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="pwd1">비밀번호</label>
                  </th>
                  <td>
                    <input 
                      type="password" 
                      id='pwd1'
                      name='pwd1'
                      placeholder='비밀번호를 입력하세요'                  
                      onChange={handleChange}
                    />
                    <span className='err'>{err.pwd1}</span>
                  </td>
                </tr>
                {/* re password */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="pwd2">비밀번호 확인</label>
                  </th>
                  <td>
                    <input 
                      type="password" 
                      id='pwd2'
                      name='pwd2'
                      placeholder='비밀번호를 재입력하세요'                  
                      onChange={handleChange}
                    />
                    <span className='err'>{err.pwd2}</span>
                  </td>
                </tr>
                {/* email */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="email">이메일</label>
                  </th>
                  <td>
                    <input 
                      type="text" 
                      id='email'
                      name='email'
                      placeholder='이메일 주소를 입력하세요'         
                      onChange={handleChange}
                    />
                    <span className='err'>{err.email}</span>
                  </td>
                </tr>
                {/* gender */}
                <tr>
                  <th scope='row'>
                    성별
                  </th>
                  <td>
                    <label htmlFor='male'>Male</label>
                    <input 
                      type="radio" 
                      id='male' 
                      name='gender' 
                      onChange = {handleCheck}
                    />
                    <label htmlFor='femal'>Female</label>
                    <input 
                      type="radio" 
                      id='female' 
                      name='gender' 
                      onChange = {handleCheck} 
                    />
                    <span className='err'>{err.gender}</span>
                  </td>
                </tr>
                {/* interests */}
                <tr>
                  <th scope='row'>
                    관심분야
                  </th>
                  <td>
                    <label htmlFor='sport'>Sports</label>
                    <input 
                      type="checkbox" 
                      id='sports' 
                      name='interests' 
                      onChange = {handleCheck}
                    />
                    <label htmlFor='music'>Music</label>
                    <input 
                      type="checkbox" 
                      id='music' 
                      name='interests' 
                      onChange = {handleCheck} 
                    />
                    <label htmlFor='game'>Game</label>
                    <input 
                      type="checkbox" 
                      id='game' 
                      name='interests' 
                      onChange = {handleCheck} 
                    />
                    <span className='err'>{err.interests}</span>
                  </td>
                </tr>
                 <tr>
                  <th scope='row'>
                  수신동의
                  </th>
                  <td>
                    <label htmlFor='emal'>E-mail</label>
                    <input 
                      type="checkbox" 
                      id='email' 
                      name='agree' 
                      onChange = {handleCheck} 
                    />
                    <label htmlFor='sns'>Sns</label>
                    <input 
                      type="checkbox" 
                      id='sns' 
                      name='agree' 
                      onChange = {handleCheck} 
                    />
                    <span className='err'>{err.agree}</span>
                  </td>
                </tr>
                {/* education */}

                                {/* comments */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="comments">남기는말</label>
                  </th>
                  <td>
                    <textarea
                      col='30'
                      row='10'
                      id='comments'
                      name='comments'
                      placeholder='남기는 말을 입력해주세요.'                  
                      onChange={handleChange}
                    ></textarea>
                    <span className='err'>{err.comments}</span>
                  </td>
                </tr>
                {/* btn set */}
                <tr>
                  <th colSpan='2' className='btnSet'>
                    <input type="reset" value='취소하기' />
                    <input type="submit" value='가입하기' />
                  </th>
                </tr> 
              </tbody>       
            </table>
          </fieldset>
        </form>
        <h3>추가정보</h3>
      </div>
    </section>
  )
}

export default Join;