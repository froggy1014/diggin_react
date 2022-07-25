import React, { useRef, useState } from "react";

const App = () => {
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  const inputCheck = (e) => {
    e.preventDefault();
    if(emailInput.current.value === ""){
      alert('이메일 입력해주세요.')
      emailInput.current.focus()
    }
    else if (pwInput.current.value === ""){
      alert('패스워드 입력해주세요.')
      pwInput.current.focus()
    } 
    else {
      setEmailValue(emailInput.current.value);
      setPwValue(pwInput.current.value);
    }
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        회원가입
      </button>
      <span>{emailValue}</span>
      <span>{pwValue}</span>
    </form>
  );
};

export default App;