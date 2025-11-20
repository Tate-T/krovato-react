import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, Suspense, lazy } from 'react'
import { AboutUsPage } from "./pages/AboutUs/About-us-page.jsx";
import MainPage from "./pages/MainPage/MainPage"; 
import Footer from "./components/Footer/Footer.jsx";
import  About  from "./components/About/About.jsx";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import Delivery from "./pages/Delivery/Delivery";
import MainReviewsPage from "./pages/MainReviews/MainReviews";
import BlogPage from "./pages/Blog/BlogPage"
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Catalog from "./pages/Catalog/Catalog"
import Header from "./components/Header/Header.jsx";
import Login from "./components/Header/Login.jsx";
import Basket from "./pages/Basket/Basket.jsx"
import AgreeTerms from "./pages/Basket/AgreeTerms/AgreeTerms.jsx";
import LoginPage from "./components/Header/LoginPage.jsx";
import Hero from "./pages/ProductCard/Hero/Hero.jsx";
// import About from "./components/About/About.jsx";
// const HeaderFooter = lazy(() => import("./pages/HeaderFooter/HeaderFooter.jsx"));
//  const Header = lazy(() => import("./components/Header/Header.jsx"));
// const MainPage = lazy(() => import("./pages/MainPage/MainPage.jsx"));
// // import { Footer } from "./components/Footer/Footer";
// const Footer = lazy(() => import("./components/Footer/Footer.jsx"));
// const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
// // import {Basket} from "./pages/Basket/Basket";
// const Basket = lazy(() => import("./pages/Basket/Basket.jsx"));
// // import { AgreeTerms } from "./pages/Basket/AgreeTerms/AgreeTerms";
// const AgreeTerms = lazy(() =>
  // import("./pages/Basket/AgreeTerms/AgreeTerms.jsx")
// );
// // import { About } from "./components/About/About";
// const About = lazy(() => import("./components/About/About.jsx"));
// const PaymentPage = lazy(() => import("./pages/PaymentPage/PaymentPage.jsx"));
// // 
// const Delivery = lazy(() => import("./pages/Delivery/Delivery.jsx"));
// // 
// const MainReviewsPage = lazy(() =>
  // import("./pages/MainReviews/MainReviews.jsx")
// );
// const BlogPage = lazy(() => import("./pages/Blog/BlogPage.jsx"));
// // import { BlogMain } from "./pages/Blog/BlogMain/BlogMain";
// const BlogMain = lazy(() => import("./pages/Blog/BlogMain/BlogMain.jsx"));
// // import BlogArticle from "./pages/BlogArticle/BlogArticle";
// const BlogArticle = lazy(() => import("./pages/BlogArticle/BlogArticle.jsx"));
// const ContactsPage = lazy(() =>
  // import("./pages/ContactsPage/ContactsPage.jsx")
// );

// const HeaderFooter = lazy(() => import('./pages/HeaderFooter/HeaderFooter.jsx'))

// import { LoginPage } from "./components/Header/LoginPage";
// const LoginPage = lazy(() => import("./components/Header/LoginPage"));

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <div className="App">
       <Header />
       <main>
       <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/aboutUs" element={<AboutUsPage/>}/> 
          <Route path="/pay" element={<PaymentPage/>}/>
          <Route path="/basket" element={<Basket />} />
          <Route path="/agree" element={<AgreeTerms />}/>
          <Route path="/delivery" element={<Delivery/>}/> 
          <Route path="/reviews" element={<MainReviewsPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </Suspense>
       </main>
       <Footer/> 
       <Hero/>
    </div>
  );
}

export default App;
