import { FC } from 'react'
// <a href="mailto:hello@halyard.dev">hello@halyard.dev</a> |
const Footer: FC = () => (
  <footer
    style={{
      visibility: 'hidden',
    }}
  >
    <address>
      <p>
        <a href="mailto:hello@halyard.dev">hello@halyard.dev</a>
      </p>
      <p>Copyright Halyard 2021 | Surry Hills, NSW, Australia</p>
    </address>
  </footer>
)

export default Footer
