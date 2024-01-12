import styles from './Footer.module.css'
import Link from 'next/link'

export default function () {
    return (
        <footer className={styles.footer}>
            <p> @2024 Jumi Pham</p>
        </footer>
    )
}