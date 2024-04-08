import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src="https://github.com/pedroarch.png" />
          <div className={styles.authorInfo}>
            <strong>Pedro Carvalho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 8:50h" dateTime="2022-05-11 08:50:01">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p className={styles.postTitle}>Fala Gelera</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laborum minus numquam id dolor quibusdam iure distinctio corporis nam dolorem maiores ducimus explicabo, delectus porro!</p>
        <p><a href="https://github.com/pedroarch">github/pedroarch</a></p>
        <p>
          <a href="#">#NLW</a>{'  '}
          <a href="#">#igniteFeed</a>{'  '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};