import styles from './Comment.module.css';

import {ThumbsUp, Trash} from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);
    
    // função de deletar comentario
    function handleDeleteComment() {
        // propriedade vinda do componente pai
        onDeleteComment(content);
    }

    // função para dar like / apaudir / contagem 
    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }
    
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png"/>
        
        
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcos Vini</strong>
                            <time title='11 de junho de 2022' dateTime="2022-06-11 01:50">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>


                    </header>

                    <p>{content}</p>
                </div>


                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                            Aplaudir
                        <span>
                            {likeCount}
                        </span>
                    </button>
                </footer>
            </div>

        </div>


    );
}