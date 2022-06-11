import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Marcos Vini"
            content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <Post 
            author="bruno"
            content="aaaaasdasdassssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
        </main>
      </div>
    </div>
  )
}


