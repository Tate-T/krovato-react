import { Hero } from "./Hero/Hero";
import { KyivPayment } from "./KyivPayment/KyivPayment";
import { PaymentTypes } from "./PaymentTypes/PaymentTypes";

export const PaymentPage = () => {
  return (
    <>
      <header></header>
      <main>
        <Hero />
        <KyivPayment />
        <PaymentTypes />
      </main>
      <footer></footer>
    </>
  );
};
