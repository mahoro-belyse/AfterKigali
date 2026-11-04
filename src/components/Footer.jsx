import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="on-dark mt-16 bg-cocoa text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">AfterClass Kigali</p>
          <p className="mt-2 text-sm text-white/90">
             After-school clubs for parents and teenagers.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-semibold">Pages</h2>
          <ul className="mt-2 space-y-1">
            <li><Link className="underline" to="/">Home</Link></li>
            <li><Link className="underline" to="/clubs">Clubs</Link></li>
            <li><Link className="underline" to="/about">About</Link></li>
          </ul>
        </nav>

        <div>
  <h2 className="font-display text-lg font-semibold">Contact</h2>
  <address className="mt-2 text-sm not-italic text-white/90">
    <p>AfterClass Kigali </p>
    <p>Kigali, Rwanda</p>
    <p className="mt-2">
      Email:{' '}
      <a className="underline" href="mailto:hello@example.com">AfterKigali1@gmail.com</a>
    </p>
  </address>
  
</div>
      </div>
    </footer>
  )
}
