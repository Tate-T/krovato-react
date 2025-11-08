import { Hero } from "./Hero/Hero";
import { Categories } from "./Categories/Categories";
import { Products } from "./Products/Products";
import { Promotions } from "./Promotions/Promotions";
import { LastReviews } from "../../components/LastReviews/LastReviews";
import { Articles } from "./Articles/Articles";
import  About  from "../../components/About/About";
import { Advantages } from "../../components/Advantages/Advantages";

const MainPage = () => {
  return (
    <>
        <Hero />
        <Categories />
        <Products />
        <Promotions />
        <LastReviews />
        <Articles />
        <About />
        <Advantages />  
    </>
  );
};

export default MainPage;