import Button from '../components/button'
import Textfield, { TextArea } from '../components/textfield'
import styles from './styles.module.css'

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1 className={styles.splash}>Say hello.</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const form = new FormData(e.currentTarget)
          const body = JSON.stringify(Object.fromEntries(form.entries()))
          fetch('/api/email', { method: 'POST', body })
        }}
        className={styles.form}
      >
        <Textfield name="name" label="Name" />
        <Textfield name="email" type="email" label="Email" />
        <TextArea name="description" label="Your enquiry" rows={4} />
        <Button type="submit">Submit details</Button>
      </form>
    </main>
  )
}
