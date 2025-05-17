import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { ProductDescription } from './ProductDescription/ProductDescription';
import { Conditions } from './Conditions/Conditions';
import Review from './Revs/Review.jsx'; 
import reviews from "./Revs/r.json";
import { Сharacteristic } from './Сharacteristic/Сharacteristic';


export class ProductCardPage extends Component {
  render() {
    return (
      <div className="product-card-page"> {/* Обернуть содержимое в div */}
        <Header />
        <Conditions />

        <ProductDescription />
        <Сharacteristic/>
        <Review review={reviews} />
        {/* Другие содержимое */}
      </div>
    );
  }
}