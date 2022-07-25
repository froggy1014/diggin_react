function App() {
  const name = '라이캣!';
  let newDate = new Date()
  let year = newDate.getFullYear();
  let month = newDate.getMonth()+1;
  let date = newDate.getDate();
  let Hour = newDate.getHours();
  let Minute = newDate.getMinutes();
  let sec = newDate.getSeconds();
  return (
    <div className="App">
      <div style={{backgroundColor:"black", height:"150px"}}>
        <h1 style={{color:"white"}}>안녕, {name} 1호</h1>
        <h1 style={{backgroundColor:"white", color:"black", padding:"20px 0px"}}>안녕, {name} 2호</h1>
      </div>
      <div style={{backgroundColor:"black",color:"white"}}>
        <p><h2 style={{color:"red"}}>년: {year}</h2></p>
        <p><h2>월/일 : {month}/{date}</h2></p>
        <p><h2>시간: {Hour}시{Minute}분{sec}초</h2></p>
      </div>
      
    </div>
  );
}

export default App;