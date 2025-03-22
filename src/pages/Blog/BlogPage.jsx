import { BlogMain } from "./BlogMain/BlogMain";
import style from "./Blog.module.scss";

export const BlogPage = () => {
  return (
    <section className={style.blog}>
        <h1 className={style.blog__title}>Блог</h1>
        <BlogMain />
    </section>
  );
};
