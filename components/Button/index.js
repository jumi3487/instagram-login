import styles from './Button.module.css'

export default function Button() {
    return(
        <button className={styles.button} onClick={() => console.log("create account")}>Log In</button>
    )
}