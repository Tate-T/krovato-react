import "./ProductCard.scss";
import { Conditions } from "./Conditions/Conditions";
import {Сharacteristic} from './Сharacteristic/Сharacteristic'
import { Addition } from "./Addition/Addition";

function ProductCardPage() {
  return (<div className="ProductCardPage">
    <Conditions/>
    <Сharacteristic/>
    <Addition/>
  </div>)
}

export default ProductCardPage;