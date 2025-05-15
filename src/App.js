import "./App.css";

import { Main } from "./pages/Main/Main";
import { BlogPage } from './pages/Blog/BlogPage';
import { BlogArticle } from './pages/BlogArticle/BlogArticle'
import { Advantages } from "./components/Advantages/Advantages";
// import { PaymentPage } from './pages/PaymentPage/PaymentPage';
// import { Delivery } from './pages/Delivery/Delivery';

function App() {
  return (
    <div className="App">
      <Advantages />
      <BlogPage />
      <BlogArticle />
      {/* <Main /> */}
      {/* <PaymentPage /> */}
      {/* <Delivery /> */}
    </div>
  );
}

export default App;
