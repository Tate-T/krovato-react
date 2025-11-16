import { AdvantagesMain } from "./AdvantagesMain/AdvantagesMain";
import style from "./Advantages.module.scss";

// в bg можe бути в 2-х варіантах "light" і "grey" в залежності від того який колір потрібний на вашій сторінці. Дефолтне значення "grey"
export const Advantages = ({ bg = "grey" }) => {
	return (
		<section
			id="advantages"
			className={`${style.section} ${bg === "grey" ? style.grey : style.light}`}
		>
			<AdvantagesMain />
		</section>
	);
};
