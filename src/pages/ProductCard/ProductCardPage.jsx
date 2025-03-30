import "./ProductCard.scss";
import { Conditions } from "./Conditions/Conditions";
import {Сharacteristic} from './Сharacteristic/Сharacteristic'

function ProductCardPage() {
  return (<div className="ProductCardPage">
    <Conditions/>
    <Сharacteristic/>
  </div>)
}

export default ProductCardPage;