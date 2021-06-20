import { FC } from 'react'
import styles from './styles.module.css'

const Logo: FC = () => (
  <span className={styles.logo}>
    <svg
      width="73"
      height="100"
      viewBox="0 0 73 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M4.15291 99.9153L3.97388 30.5023L73.5659 100.094L4.15291 99.9153Z"
          fill="currentColor"
        />
        <rect width="2" height="100" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="73" height="100" fill="none" />
        </clipPath>
      </defs>
    </svg>
    <p>Halyard</p>
  </span>
)

export default Logo
