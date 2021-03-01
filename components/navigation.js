import Link from "next/link"
import styles from "./navigation.module.css"

function Navigation() {
    return <nav>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
  }
  
  export default Navigation
  