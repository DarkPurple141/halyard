/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, HTMLProps } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Button: FC<HTMLProps<HTMLElement>> = ({
  type = 'button',
  href,
  ref,
  ...other
}) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={styles.button} {...other} />
      </Link>
    )
  }

  return (
    <button
      {...other}
      type={type as 'submit' | 'button'}
      className={styles.button}
    />
  )
}

export default Button
