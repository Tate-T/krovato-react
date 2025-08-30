// import { Header } from "../../components/Header/Header";
import { Topic } from "./Topic/Topic";
import { KyivDelivery } from "./KyivDelivery/KyivDelivery";
import { UkraineDelivery } from "./UkraineDelivery/UkraineDelivery";
import { Shares } from "./Shares/Shares";
import { Price } from "./Price/Price";
import { Questions } from "../../components/Questions/Questions";
import { Footer } from "../../components/Footer/Footer";

export const Delivery = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Topic />
        <KyivDelivery />
        <UkraineDelivery />
        <Shares />
        <Price />
        <Questions sectionId="return-questions" />
      </main>
      <Footer/>
    </>
  );
};
export default Delivery
