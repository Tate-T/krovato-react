import style from "./BlogMain.module.scss";
import iconArrow from "../../../images/blog/rightArrow.svg";
import firstImage from "../../../images/blog/blogFirst.jpg";
import secondImage from "../../../images/blog/blogSecond.jpg";
import thirdImage from "../../../images/blog/blogThird.jpg";
import { Link } from "react-router-dom";

const data = [
	{
		id: 1,
		imgUrl: firstImage,
		title: "Стільці для вітальні. Як правильно вибрати?",
	},
	{
		id: 2,
		imgUrl: secondImage,
		title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
	},
	{
		id: 3,
		imgUrl: thirdImage,
		title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
	},
	{
		id: 4,
		imgUrl: firstImage,
		title: "Стільці для вітальні. Як правильно вибрати?",
	},
	{
		id: 5,
		imgUrl: secondImage,
		title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
	},
	{
		id: 6,
		imgUrl: thirdImage,
		title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
	},
	{
		id: 7,
		imgUrl: firstImage,
		title: "Стільці для вітальні. Як правильно вибрати?",
	},
	{
		id: 8,
		imgUrl: secondImage,
		title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
	},
	{
		id: 9,
		imgUrl: thirdImage,
		title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
	},
	{
		id: 10,
		imgUrl: firstImage,
		title: "Стільці для вітальні. Як правильно вибрати?",
	},
	{
		id: 11,
		imgUrl: secondImage,
		title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
	},
	{
		id: 12,
		imgUrl: thirdImage,
		title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
	},
];

export const BlogMain = () => {
	return (
		<ul className={style.blog__list}>
			{data.map((element) => (
				<li className={style.blog__item} data-aos="fade-right">
					<img className={style.blog__photo} src={element.imgUrl} alt="1" />
					<h3 className={style.blog__subtitle}>{element.title}</h3>
					<Link to="/blog-article" className={style.blog__listLink}>
						Детальніше
						<img src={iconArrow} alt="arrow" className={style.blog__titleArrow} />
					</Link>
				</li>
			))}
		</ul>
	);
};
