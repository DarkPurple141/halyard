/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { FC } from 'react'
import Logo from '../logo'
import styles from './index.module.css'

const Nav: FC = () => (
  <header>
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div className={styles.navItems}>
        {/* <a href="/">About</a> */}
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  </header>
)

export default Nav
