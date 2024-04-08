import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://media.istockphoto.com/id/470990049/pt/foto/c%C3%B3digo-bin%C3%A1rio-verde.jpg?s=612x612&w=is&k=20&c=ga2O8uS9tqfDIeRPI_Y9n_tNo0mAjB_C-Run2BAqHJQ=" alt="old pc screen" />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/pedroarch.png" />
        <strong>Pedro Carvalho</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}