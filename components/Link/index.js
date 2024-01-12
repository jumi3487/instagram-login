import Link from 'next/link'
import styles from './Link.module.css'
export default function () {
    return( 
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
    )
}