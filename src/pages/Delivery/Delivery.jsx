import { Topic } from "./Topic/Topic";
import { KyivDelivery } from "./KyivDelivery/KyivDelivery";
import { UkraineDelivery } from "./UkraineDelivery/UkraineDelivery";
import { Shares } from "./Shares/Shares";
import { Price } from "./Price/Price";
import { Questions } from "../../components/Questions/Questions";

export const Delivery = () => {
  return (
    <>
      <main>
        <Topic />
        <KyivDelivery />
        <UkraineDelivery />
        <Shares />
        <Price />
        <Questions sectionId="return-questions" />
      </main>
    </>
  );
};
export default Delivery
