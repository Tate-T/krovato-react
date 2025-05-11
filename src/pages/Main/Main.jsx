import { Hero } from "./Hero/Hero";
import { Categories } from "./Categories/Categories";
import { Products } from "./Products/Products";
import { Promotions } from "./Promotions/Promotions";
import { LastReviews } from "../../components/LastReviews/LastReviews";
import { Articles } from "./Articles/Articles";
import { About } from "../../components/About/About";
import { Advantages } from "../../components/Advantages/Advantages";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ProductCardPage } from "../ProductCard/ProductCardPage";




export const Main = () => {
  return (
    <>
      {/* <Header /> */}
      <ProductCardPage />
      {/* <main>
        <Hero />
        <Categories />
        <Products />
        <Promotions />
        <LastReviews />
        <Articles />
        <About />
        <Advantages />
      </main>
      <Footer /> */}
    </>
  );
};