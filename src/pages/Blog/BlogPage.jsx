import { BlogMain } from "./BlogMain/BlogMain";
import containerStyle from "../../components/Container/Container.module.scss";
import style from "./Blog.module.scss";

export const BlogPage = () => {
  return (
    <section className={style.blog}>
      <div className={containerStyle.container}>
        <h1 className={style.blog__title}>Блог</h1>
        <BlogMain />
      </div>
    </section>
  );
};
export default BlogPage