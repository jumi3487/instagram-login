import styles from './Footer.module.css'
import Link from 'next/link'

export default function () {
    return( 
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Link href="/" className={styles.links}>Meta</Link>
                <Link href="/" className={styles.links}>About</Link>
                <Link href="/" className={styles.links}>Blog</Link>
                <Link href="/" className={styles.links}>Jobs</Link>
                <Link href="/" className={styles.links}>Help</Link>
                <Link href="/" className={styles.links}>API</Link>
                <Link href="/" className={styles.links}>Privacy</Link>
                <Link href="/" className={styles.links}>Terms</Link>
                <Link href="/" className={styles.links}>Location</Link>
                <Link href="/" className={styles.links}>Instagrams Lite</Link>
                <Link href="/" className={styles.links}>Threads</Link>
                <Link href="/" className={styles.links}>Contact Uploading & Non-Users</Link>
                <Link href="/" className={styles.links}>Meta Verified</Link>
            </div>
            <br/>
            <div className={styles.myname}>
                <p>@jumi</p>
            </div>
        </footer>
    )
}