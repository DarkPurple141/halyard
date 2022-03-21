import { useState } from 'react'
import Button from '../components/button'
import Textfield, { TextArea } from '../components/textfield'
import styles from './styles.module.css'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <main className={styles.main}>
      <h1 className={styles.splash}>Say hello.</h1>
      <form
        onSubmit={async (e) => {
          setIsLoading(true)
          e.preventDefault()
          const $form = e.currentTarget
          const form = new FormData($form)
          const body = JSON.stringify(Object.fromEntries(form.entries()))
          await fetch('/api/email', { method: 'POST', body })
          setIsLoading(false)
          $form.reset()
        }}
        className={styles.form}
      >
        <Textfield
          required
          name="name"
          label="Name"
          placeholder="Sarah Blake"
        />
        <Textfield
          required
          name="email"
          type="email"
          label="Email"
          placeholder="sarah@example.com"
        />
        <TextArea name="description" label="Your enquiry" rows={4} />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting' : 'Submit details'}
        </Button>
      </form>
    </main>
  )
}
