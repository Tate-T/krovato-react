import { BlogArticleList } from "./BlogArticleList/BlogArticleList";
import { BlogArticleMain } from "./BlogArticleMain/BlogArticleMain";
import style from "./BlogArticle.module.scss";

export const BlogArticle = () => {
  return (
    <section className={style.article}>
      <BlogArticleMain />
      <BlogArticleList />
    </section>
  );
};
