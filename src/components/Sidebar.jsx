import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="old pc screen" />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://static.wixstatic.com/media/4d6943_29cd5ec20b1d408e84fd4218a985302a~mv2.jpg/v1/crop/x_368,y_315,w_2608,h_2608/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/V1_00190.jpg" />
        <strong>Alícia Dornelles</strong>
        <span>CEO na @TuiuiuPediatria</span>
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