import { BrowserRouter, Routes, Route, Link, useLocation, Outlet} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Home </Link>
      <Link to="/products/:id"> Products </Link>
      <Link to="/cart"> Cart </Link>
      <Link to="/users"> Users </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/products/:id" element={<ProductDP />}/>
        <Route path="/users" element={<Outlet />}>
          <Route path="" element={<UserPage/>}/>
          <Route path="notice/" element={<NoticePage/>}/>
          <Route path="coupon/" element={<CouponPage/>}/>
          <Route path="question/" element={<QuestionPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage(){
  return <h1>This is Home Page</h1>
}

function ProductDP(){
  return <h1>This is Product Detail Page</h1>
}

function CartPage(){
  return <h1>This is Cart Page</h1>
}

function UserPage(){
  return <h1>This is User Page</h1>
}

function CouponPage(){
  return <h1>This is Coupon Page</h1>
}

function QuestionPage(){
  return <h1>This is Q&A Page</h1>
}
function NoticePage(){
  return <h1>This is Notice Page</h1>
}

export default App;