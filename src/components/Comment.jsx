import { ThumbsUp, TrashSimple } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';


export function Comment({ comment, handleDeleteComment }) {

  console.log(comment.date)

  const dateFromNow = formatDistanceToNow(comment.date, { locale: ptBR, addSuffix: true})

  function handleClickToRemove () { handleDeleteComment(comment.id) };

  return (
    <div className={styles.comment}>
      <Avatar src={comment.avatarUrl} hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.name}</strong>
              <time title="11 de Maio às 8:50h" dateTime="2022-05-11 09:10:01">{dateFromNow.toString()}</time>
            </div>
            <button title='Deletar comentário' onClick={handleClickToRemove}>
              <TrashSimple size={24} />
            </button>
          </header>
          <p>{comment.content}</p>
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