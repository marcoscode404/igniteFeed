// props: {author, content }; 

export function Post(props) {
    return (
        <>
              <strong>{props.author}
                  <p>{props.content}</p>
            </strong>
        </>
    )
}

