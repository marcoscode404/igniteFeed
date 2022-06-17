import styles from "./Avatar.module.css";

// usando conceito de desestruturação do javascript
export function Avatar({ hasBorder = true, src }) {
    
    return(
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
            src={src}
        />          
    );
}