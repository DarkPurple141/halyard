import { FC } from 'react'

const Footer: FC = () => (
  <footer>
    <p>Made with ❤️ in Sydney, Australia</p>
    <address
      style={{
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
