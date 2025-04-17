import "./ProductCard.scss";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { Conditions } from "./Conditions/Conditions";
import {Сharacteristic} from './Сharacteristic/Сharacteristic'
import { Addition } from "./Addition/Addition";
import{ Recommendations} from   './Recommendations/Recommendations'
import { Advantages } from "../../components/Advantages/Advantages";
import { Footer } from "../../components/Footer/Footer";

export const ProductCardPage = () => {
  return (<div className="ProductCardPage">
    <ProductDescription/>
    <Conditions/>
    <Сharacteristic/>
    <Addition/>
    <Recommendations/>
    <Advantages/>
    <Footer/>
  </div>)
}