import { Hero } from "./Hero/Hero";
import { Categories } from "./Categories/Categories";
import { Products } from "./Products/Products";
import { Promotions } from "./Promotions/Promotions";
import { Articles } from "./Articles/Articles";

export const Main = () => {
  return (
    <>
      {/* Header */}
      <main>
        <Hero />
        <Categories />
        <Products />
        <Promotions />
        {/* LastReviews */}
        <Articles />
        {/* About */}
        {/* Advantages */}
      </main>
      {/* Footer */}
    </>
  );
};
