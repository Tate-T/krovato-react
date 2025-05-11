import "./ProductCard.scss";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { Conditions } from "./Conditions/Conditions";
import { Сharacteristic } from './Сharacteristic/Сharacteristic';
import { Addition } from "./Addition/Addition";
import { Recommendations } from './Recommendations/Recommendations';
import { Advantages } from "../../components/Advantages/Advantages";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React, { Component } from 'react';

class ProductCardPage extends Component {
  render() {
    return (
      <div className="ProductCardPage">
        <Header></Header>
    <ProductDescription/>
    <Conditions/>
    <Сharacteristic/>
    <Addition/>
    <Recommendations/>
    <Advantages/>
    <Footer/>
      </div>
    );
  }
}

export default ProductCardPage;