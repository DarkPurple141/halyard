import { FC } from 'react'
import Logo from '../logo'
import styles from './index.module.css'

const Nav: FC = () => (
  <header>
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.navItems}>
        <a href="/">Consultancy</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  </header>
)

export default Nav
