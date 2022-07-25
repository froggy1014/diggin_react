import React, { useContext, createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <HelloLicat/>
  );
};

const HelloLicat = () => {
  const {name,id} = useContext(UserInfo);
  return (
    <>
      <h2>{name}</h2>
      <strong>{id}</strong>
      <HelloLicatTwo/>
    </>
  );
};

const HelloLicatTwo = () => {
  const {name,id} = useContext(UserInfo);
  return (
    <>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </>
  );
};


export default App;