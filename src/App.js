import './App.css';

// import { Main } from './pages/Main/Main';
// import { PaymentPage } from './pages/PaymentPage/PaymentPage';
// import { Delivery } from './pages/Delivery/Delivery';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { LastReviews } from './components/LastReviews/LastReviews';
import { ProductCardPage } from './pages/ProductCard/ProductCardPage';
import { CartModal } from './components/BasketModal/BasketModal';

function App() {
  return (
    <div className="App">
      {/* <Main /> 
      <PaymentPage />
      {/* <Delivery /> */}
      <ContactsPage />
      <LastReviews />
      <ProductCardPage />
      <CartModal />
    </div>
  );
}

export default App;
