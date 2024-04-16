import './styles.css'

import { Post } from './components/Post.jsx'
import { Header } from './components/Header.jsx'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar.jsx'

function App() {

  const posts = [
    {
      id: 1,
      author:{
        avatarUrl: "https://static.wixstatic.com/media/4d6943_29cd5ec20b1d408e84fd4218a985302a~mv2.jpg/v1/crop/x_368,y_315,w_2608,h_2608/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/V1_00190.jpg",
        name: "Alícia Dornelles",
        role: "CEO @TuiuiuPediatria e Pediatra"
      },
      content:[
        {
          type: 'paragraph',
          content: "Fala Galera"
        },
        {
          type: 'paragraph',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam facilis laudantium accusantium ipsum mollitia pariatur dolores, omnis vero incidunt labore, dolorem hic nesciunt soluta.'
        },
        {
          type: 'link',
          content: 'tuiuiupediatria/alicia'
        },
        {
          type: 'link',
          content: '#TuiuiuPediatria #capitu #amamentacao'
        }
      ],
      publishedAt: new Date('2022-03-03 08:13:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://static.wixstatic.com/media/4d6943_1ec8174f1f6c4afbb9708edcd9f0900d~mv2.jpg/v1/crop/x_854,y_742,w_1877,h_1878/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/V1_00371.jpg",
        name: "Martina Kirst",
        role: "CEO @Tuiuiu e Pediatra"
      },
      content: [
        {
          type: 'paragraph',
          content: "Fala Galera"
        },
        {
          type: 'paragraph',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam facilis laudantium accusantium ipsum mollitia pariatur dolores, omnis vero incidunt labore, dolorem hic nesciunt soluta.'
        },
        {
          type: 'link',
          content: 'tuiuiupediatria/martina'
        },
        {
          type: 'link',
          content: '#Tuiuiu #criancada #materno'
        }
      ],
      publishedAt: new Date('2022-03-10 08:24:00')
    }
  ];

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post, index) =>
              <Post
                author={post.author}
                pulishedAt={post.publishedAt}
                content={post.content}

                key={index}
              />
            )
          }
        </main>
      </div >
    </>
  )
}

export default App

