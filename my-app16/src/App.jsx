import { useState, useRef, useMemo } from "react";

function App() {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function handleInputName(e){
    setName(e.target.value)
    console.log('렌더링 - 1');
  }

  function handleInputId(e){
    setId(e.target.value)
    console.log('렌더링 - 2');
  }

  function handleSubmit(e){
    e.preventDefault();
    const newInfo = [...userInfo, {name,id}]
    inputName.current.value = ''
    inputId.current.value = ''
    inputName.current.focus()
    setUserInfo(newInfo);
    console.log('렌더링 - 3')
    console.log(typeof newInfo);
  }

  function getNum(user){
    console.log('getNum 렌더링')
    return user.length
  }

  const n = useMemo(() => getNum(userInfo), [userInfo]);
  
  return (
    <div className="App">
      <form>
        <input 
          type="text"
          placeholde="이름을 입력하세요."
          onChange={handleInputName}
          ref={inputName} 
        />

        <input 
          type="text"
          placeholde="아이디을 입력하세요."
          onChange={handleInputId}
          ref={inputId} 
        />

        <button type="submit" onClick={handleSubmit}>
          버튼
        </button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>{n}</span>
    </div>
  );
}

export default App;