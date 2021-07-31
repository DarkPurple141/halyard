import { HTMLProps, FC } from 'react'
import styles from './styles.module.css'

type Props = {
  label: string
}

const Textfield: FC<HTMLProps<HTMLInputElement> & Props> = ({
  label,
  id,
  ...props
}) => (
  <div className={styles.field}>
    <label htmlFor={id}>{label}</label>
    <input id={id} type="text" className={styles.input} {...props} />
  </div>
)

export default Textfield
