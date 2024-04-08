import { ThumbsUp, TrashSimple } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/diego3g.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 8:50h" dateTime="2022-05-11 09:10:01">Cerca de 40m atrás</time>
            </div>
            <button title='Deletar comentário'>
              <TrashSimple size={24} />
            </button>
          </header>
          <p>Muito bom dev, parabéns!! 👍</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>15</span>
          </button>
        </footer>
      </div>

    </div>
  )
}