import Button from '../components/button'
import Textfield from '../components/textfield'
import styles from './styles.module.css'

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1 className={styles.splash}>Say hello.</h1>
      <form className={styles.form}>
        <Textfield label="Name" />
        <Textfield type="email" label="Email" />
        <Button type="submit">Submit details</Button>
      </form>
    </main>
  )
}
