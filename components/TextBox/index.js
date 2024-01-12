import styles from './TextBox.module.css'

export default function TextBox () {
    return (
        <>
        <input
        type="email"
        placeholder="Phone number, username, or email"
        required
        className={styles.text}
        />

        <input
        type="password"
        placeholder="Password"
        required
        className={styles.text}
        />
        </>
    )
}