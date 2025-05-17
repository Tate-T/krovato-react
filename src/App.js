import './App.css';

// import { Main } from './pages/Main/Main';
// import { PaymentPage } from './pages/PaymentPage/PaymentPage';
// import { Delivery } from './pages/Delivery/Delivery';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { LastReviews } from './components/LastReviews/LastReviews';
import { ProductCardPage } from './pages/ProductCard/ProductCardPage';
import { AboutUsPage } from './pages/AboutUs/About-us-page';

function App() {
  return (
    <div className="App">
      <AboutUsPage />

      {/* <Main /> */}
      {/* <PaymentPage /> */}
      {/* <Delivery /> */}
      {/* <ContactsPage /> */}
      {/* <LastReviews /> */}
      {/* <ProductCardPage/> */}
    </div>
  );
}

export default App;