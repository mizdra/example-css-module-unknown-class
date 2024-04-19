// Article.tsx
import styles from './Article.module.css';
type ArticleProps = { title: string; body: string }
export function Article(props: ArticleProps) {
  return (
    <article>
      <h2 className={styles.title}>
        {props.title}
      </h2>
      <p className={styles.bodyyyyyyyy}>
        {props.body}
      </p>
    </article>
  );
}