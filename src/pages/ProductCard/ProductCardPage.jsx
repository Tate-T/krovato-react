import "./ProductCard.scss";

import Header from "../../components/Header/Header";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { Conditions } from "./Conditions/Conditions";
import { Сharacteristic } from './Сharacteristic/Сharacteristic';
import { Addition } from "./Addition/Addition";
import { Recommendations } from './Recommendations/Recommendations';
import { Advantages } from "../../components/Advantages/Advantages";
import { Footer } from "../../components/Footer/Footer";

import  products from '../../products'
import React, { Component } from 'react';

class ProductCardPage extends Component {
  render() {
    return (
      <div className="ProductCardPage">
        {/* <Header></Header> */}
        <ProductDescription/>
        <Conditions/>
        <Сharacteristic/>
        <Addition productsData={products}/>
        <Recommendations productsData={products}/>
        <Advantages/>
        <Footer/>
      </div>
    );
  }
}

export { ProductCardPage };