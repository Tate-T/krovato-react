import "./ProductCard.scss";
import { Header } from "../../components/Header/Header";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { Conditions } from "./Conditions/Conditions";
import { Сharacteristic } from "./Сharacteristic/Сharacteristic";
import { Addition } from "./Addition/Addition";
import { Recommendations } from "./Recommendations/Recommendations";
import { Advantages } from "../../components/Advantages/Advantages";
import { Footer } from "../../components/Footer/Footer";
import Review from "./Revs/Review";
import { Component } from "react";
import productsData from "../../productsData.json";


export class ProductCardPage extends Component {
  state = {
    currentProduct: productsData[0] // Берем первый продукт для примера
  }

  render() {
    return (
      <div className="product-card-page">
        {/* <Header /> */}
        <main>
          <div className="container">
            <ProductDescription product={this.state.currentProduct} />
            <Conditions />
            <Сharacteristic product={this.state.currentProduct} />
            <Review />
            <Addition productsData={productsData} />
            <Recommendations productsData={productsData} />
            <Advantages />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}