import { FC } from 'react'
// <a href="mailto:hello@halyard.dev">hello@halyard.dev</a> |
const Footer: FC = () => (
  <footer
    style={{
      position: 'absolute',
      bottom: '0',
      padding: 'var(--grid-double) 0',
    }}
  >
    <address>
      <p>Copyright Halyard 2021 | Surry Hills, NSW, Australia</p>
    </address>
  </footer>
)

export default Footer
