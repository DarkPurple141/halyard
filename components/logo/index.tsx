import { FC } from 'react'
import styles from './styles.module.css'

const Logo: FC = () => (
  <span className={styles.logo}>
    <img src="/logo.svg" alt="Halyard Logo" />
    <p>Halyard</p>
  </span>
)

export default Logo
