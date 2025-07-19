import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Subcategories } from "./Subcategoties/Subcategories";
import { Shop } from "./Shop/Shop";
import { Choice } from "./Choice/Choice";

export const Catalog = () => {
  return (
    <>
      <Header />
      <main>
        <Subcategories />
        <Shop />
        <Choice />
      </main>
      <Footer />
    </>
  )
};
