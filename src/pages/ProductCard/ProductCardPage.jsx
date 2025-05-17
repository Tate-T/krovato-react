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