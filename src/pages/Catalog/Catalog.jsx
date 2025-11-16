import { Subcategories } from "./Subcategoties/Subcategories";
import { Shop } from "./Shop/Shop";
import { Choice } from "./Choice/Choice";
import { LastReviews } from "../../components/LastReviews/LastReviews";
import { Questions } from "../../components/Questions/Questions";
import { Advantages } from "../../components/Advantages/Advantages";

const Catalog = () => {
  return (
    <>
      <Subcategories />
      <Shop />
      <Choice />
      <LastReviews />
      <Questions sectionId="bed-questions" /> 
      <Advantages />
    </>
  )
};

export default Catalog;
