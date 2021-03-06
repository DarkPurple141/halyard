import { FC } from 'react'

const Footer: FC = () => (
  <footer style={{ padding: 'var(--grid-double) 0' }}>
    <p>Made with ❤️&nbsp; in Sydney, Australia</p>
    <address
      style={{
        display: 'none',
        visibility: 'hidden',
      }}
    >
      <p>
        <a href="mailto:hello@halyard.dev">hello@halyard.dev</a>
      </p>
      <p>Copyright Halyard 2021 | Surry Hills, NSW, Australia</p>
    </address>
  </footer>
)

export default Footer
