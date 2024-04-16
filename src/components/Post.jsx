import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Post({author, publishedAt, content}) {

  const [commentList, setCommentList] = useState([
    {
      id:1,
      content: "Perfeito post",
      name: "Cintia Juges",
      avatarUrl: "https://static.wixstatic.com/media/d15640_5c6826c7c6d546298063f337eb31e749~mv2.jpg/v1/crop/x_300,y_1036,w_3033,h_3033/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4289.jpg",
      date: new Date ("2024-04-16T12:21:10")
    },
    {
      id: 2,
      content: "Isso ai pedi",
      name: "Carolina Lopes",
      avatarUrl: "https://static.wixstatic.com/media/d15640_a9d7c5702aa34df19f2fb40fd195302c~mv2.jpeg/v1/crop/x_160,y_269,w_2500,h_2502/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Carolina%20Endres.jpeg",
      date: new Date("2024-01-11T12:21:10")
    },
    {
      id: 3,
      content: "Debora Götze",
      avatarUrl: "https://static.wixstatic.com/media/4d6943_3cd63bd7e29a4d909fc7d81e7bc957fc~mv2.jpg/v1/crop/x_0,y_540,w_3460,h_3461/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/V1_00266.jpg",
      date: new Date("2023-01-12T12:21:10")
    },
  ])

  const [commentText, setCommentText] = useState('')

  function handleSubmitForm () {
    event.preventDefault();

    console.log(commentText)

    setCommentList([...commentList, {
      id: commentList.length + 1,
      content: commentText,
      avatarUrl: "https://static.wixstatic.com/media/4d6943_29cd5ec20b1d408e84fd4218a985302a~mv2.jpg/v1/crop/x_368,y_315,w_2608,h_2608/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/V1_00190.jpg",
      date: new Date()
      }
     ]
    )

    setCommentText('');
  }

  function handleTextChange(event) {
    setCommentText(event.target.value)
  }

  function handleDeleteComment(id) {
    const newCommentListWithoutComment = commentList.filter((comment) => comment.id !== id)

    setCommentList(newCommentListWithoutComment);
  }

  const postDate = format(new Date("2023-12-17T03:24:00"), "d 'de' MMMM 'às' hh:mm'h'", {locale: ptBR})

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de Maio às 8:50h" dateTime="2022-05-11 08:50:01">{postDate.toString()}</time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleSubmitForm} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          onChange= {() => handleTextChange(event)}
          value={commentText}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {commentList.map((comment) => <Comment key={comment.content} comment={comment} handleDeleteComment={handleDeleteComment}/>)}
      </div>
    </article>
  );
};