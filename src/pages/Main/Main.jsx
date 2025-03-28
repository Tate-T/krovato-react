import { Hero } from "./Hero/Hero";
import { Categories } from "./Categories/Categories";
import { Products } from "./Products/Products";
import { Promotions } from "./Promotions/Promotions";
import { Articles } from "./Articles/Articles";

import { Questions } from "../../components/Questions/Questions";

export const Main = () => {
  return (
    <>
      {/* Header */}
      <main>
        <Questions sectionId="bed-questions" />
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
