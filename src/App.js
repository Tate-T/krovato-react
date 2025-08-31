import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { Footer } from "./components/Footer/Footer";
import { Catalog } from "./pages/Catalog/Catalog";
import {Basket} from "./pages/Basket/Basket";
import { AgreeTerms } from "./pages/Basket/AgreeTerms/AgreeTerms";
import { About } from "./components/About/About";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import Delivery from "./pages/Delivery/Delivery";
import MainReviewsPage from "./pages/MainReviews/MainReviews";
import BlogPage from "./pages/Blog/BlogPage";
import BlogArticle from "./pages/BlogArticle/BlogArticle";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/agree" element={<AgreeTerms />}/>
          <Route path="/aboutUs" element={<About/>}/>
          <Route path="/pay" element={<PaymentPage/>}/>
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="/reviews" element={<MainReviewsPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/blogarticle" element={<BlogArticle/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
          <Route path="*" element={<MainPage/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
