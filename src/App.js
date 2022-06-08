import './App.css';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
// import Header from './components/header/HeaderTesting';
import { Routes, Route } from "react-router-dom";
import RefreshToken from './components/auth/refreshToken/RefreshToken';
import Header from './components/header/Header';
import Home from './containers/home/Home';
import About from './components/about/About';
import Description from './containers/carInfo/Description';
import Detail from './containers/carInfo/Detail';
import Condition from './containers/carInfo/Condition';
import Offer from './containers/carInfo/Offer';
import ThankYouPage from './components/carDescription/ThankYouPage';
import ResetPasswordPage from './containers/auth/ResetPasswordPage';
import ProductPage from './containers/productPage/ProductPage';
// import { useMediaQuery } from 'react-responsive'

function App() {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="refresh" element={<RefreshToken />} />
        <Route path="condition" element={<Condition />} />
        <Route path="cardescription" element={<Description />} />
        <Route path="cardetail" element={<Detail />} />
        <Route path="caroffer" element={<Offer />} />
        <Route path="message" element={<ThankYouPage />} />
        <Route path="password/reset/:tokenId" element={<ResetPasswordPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
