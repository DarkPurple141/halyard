import Button from '../components/button'
import styles from './styles.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.splash}>
        Halyard is a boutique software and design consultancy helping to empower
        growing companies.
      </h1>
      <p className={styles.supporting}>
        We help teams of all shapes and sizes design and build great apps and
        products. We’d love to work with you.
      </p>
      <Button>Get in touch</Button>
    </main>
  )
}
