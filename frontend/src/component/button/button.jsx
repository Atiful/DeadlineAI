
import styles from "./button.module.css";
function Button({text , onClick}) {
    return ( 
        <button className={styles.button2} onClick={onClick}>{text}</button>
     );
}

export default Button;