import './App.css';
// import { Main } from './pages/Main/Main';
import { PaymentPage } from './pages/PaymentPage/PaymentPage';
import { About } from './components/About/About';
import { AboutUsPage } from './pages/AboutUs/About-us-page';

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <AboutUsPage />
      {/* <PaymentPage /> */}
    </div>
  );
}

export default App;