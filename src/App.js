import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Main /> 
      <PaymentPage />
      {/* <Delivery /> */}
      {/* <ContactsPage />
      <LastReviews />
      <ProductCardPage />
      <CartModal /> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
