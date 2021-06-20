import { FC, HTMLProps } from 'react'
import styles from './styles.module.css'

const Button: FC<HTMLProps<HTMLButtonElement>> = ({
  type = 'button',
  ...other
}) => (
  <button
    {...other}
    type={type as 'submit' | 'button'}
    className={styles.button}
  />
)

export default Button
