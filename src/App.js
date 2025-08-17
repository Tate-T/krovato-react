import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { Footer } from "./components/Footer/Footer";
import { Catalog } from "./pages/Catalog/Catalog";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="*" element={<MainPage/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
