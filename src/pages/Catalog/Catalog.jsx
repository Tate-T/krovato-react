import { Subcategories } from "./Subcategoties/Subcategories";
import { Shop } from "./Shop/Shop";
import { Choice } from "./Choice/Choice";

export const Catalog = () => {
  return (
    <>
      <header></header>
      <main>
        <Subcategories />
        <Shop />
        <Choice />
      </main>
      <footer></footer>
    </>
  )
};
