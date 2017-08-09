import Inferno from 'inferno';
import { Nav } from './nav'

export function Layout ({ children }) {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
