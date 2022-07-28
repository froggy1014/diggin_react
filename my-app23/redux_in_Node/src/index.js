import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("total");

const PRICE = 17500;

// 액션 생성 함수
const addNumber = () => {
  store.dispatch({ type: "ADD"});
};

const substractNumber = () => {
  store.dispatch({ type: "SUBSTRACT"});
};


// Reducer
const countReducer = (state = 0, action) => { // state 초기화
  switch (action.type){ //switch 문
    case "ADD":
        minus.disabled = false;
        return state + 1;
    case "SUBSTRACT":
        if(state === 1) minus.disabled = true;
        return state - 1;
    default:
        return state;
  }
}

const store = createStore(countReducer)

const handleWrite = () => {
  number.innerText = store.getState();
  quantity.innerText = store.getState();
  totalPrice.innerText = store.getState() * PRICE;
  console.log(store.getState());
}

// Update UI
store.subscribe(handleWrite);


plus.addEventListener('click', addNumber);
minus.addEventListener('click', substractNumber);


