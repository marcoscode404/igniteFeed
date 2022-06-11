import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/marcoscode404.png" />
                    <div className={styles.authorInfo}>
                        <strong>Marcos Vinicius</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title='11 de junho de 2022' dateTime="2022-06-11 01:50">Públicado há 1h</time>


            </header>

            <div className={styles.content}>
               <p> Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

               <p> <a  href='#'>👉 jane.design/doctorcare</a></p>

               <p> 
                    <a href='#'>#novoprojeto </a>
                    <a>#nlw </a>
                    <a>#rocketseat</a>
               </p>
            </div>
        </article>
    );
}