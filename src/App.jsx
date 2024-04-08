import './styles.css'

import { Post } from './components/Post.jsx'
import { Header } from './components/Header.jsx'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar.jsx'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <Post author="Pedro Carvalho" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam facilis laudantium accusantium ipsum mollitia pariatur dolores, omnis vero incidunt labore, dolorem hic nesciunt soluta." />
      </div >
    </>
  )
}

export default App

