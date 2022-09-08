import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'; 
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {

    // Conceito de estado
    // estado -> variaveis que eu quero que o componente monitore
    // array de comentarios
    const [comments, setComments] = useState([
        'estado dos posts aqui!'
    ]);

    //  estado de novo comentario 
    const [newCommentText, setNewCommentText ] = useState('');

    // estruturando/formatando o horario / 
    
    // date-fns instalando a dependencia para tratar de format de datas
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    // tempo da publicação
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    // -- /Horario/ -- //

    // disparada com a ação do usuario uso o padrão handle
    function handleCreateNewComment() {
        event.preventDefault();

        // spread operator ... - copia parte ou todo valor de um array que já existe e adicionar o novo valor
        setComments([...comments, newCommentText]);

        setNewCommentText('');
      
    };

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }
    
    return(  
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>


            </header>

            {/* dica --> se caso for puxar os dados de alguma api só mudar -> line.content
                para  ID
            */}
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name="comment"
                    placeholder='Deixe seu comentario'
                    value={newCommentText}
                    // monitorar quando houver alguma mudança no conteudo da textarea
                    onChange={handleNewCommentChange}
                />
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
        </form>

        <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment}/>
                })}
        </div>

        </article>
    );
}