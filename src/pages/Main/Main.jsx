// import { Header } from "../../components/Header/Header";
import { Hero } from "./Hero/Hero";
import { Categories } from "./Categories/Categories";
import { Products } from "./Products/Products";
import { Promotions } from "./Promotions/Promotions";
import { LastReviews } from "../../components/LastReviews/LastReviews";
import { Articles } from "./Articles/Articles";
import { About } from "../../components/About/About";
import { Advantages } from "../../components/Advantages/Advantages";
import { Footer } from "../../components/Footer/Footer";
//import Basket from "../Basket/Basket";
export const Main = () => {
  return (
    <>
      {/* Header */}
      <main>
        <Hero />
        {/* <Basket /> */}
         <Categories />
        <Products />
        <Promotions />
        <LastReviews />
        <Articles />
        <About />
        <Advantages />  
      </main>
      <Footer />
    </>
  );
};