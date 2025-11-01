import { Hero } from "./Hero/Hero";
import { KyivPayment } from "./KyivPayment/KyivPayment";
import { PaymentTypes } from "./PaymentTypes/PaymentTypes";
import { Questions } from "../../components/Questions/Questions";
import { Advantages } from "../../components/Advantages/Advantages";

const PaymentPage = () => {
	return (
		<>
			<Hero />
			<KyivPayment />
			<PaymentTypes />
			<Questions sectionId="return-questions" />
			<Advantages />
		</>
	);
};
export default PaymentPage;
