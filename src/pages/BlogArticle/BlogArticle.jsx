import { BlogArticleList } from "./BlogArticleList/BlogArticleList";
import { BlogArticleMain } from "./BlogArticleMain/BlogArticleMain";
import container from "../../components/Container/Container.module.scss";
import style from "./BlogArticle.module.scss";

const BlogArticle = () => {
	return (
		<section className={style.article}>
			<div className={`${style.container} ${container.container}`}>
				<BlogArticleMain />
				<BlogArticleList />
			</div>
		</section>
	);
};
export default BlogArticle;
