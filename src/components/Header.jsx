import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/clubs', label: 'Clubs' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)

  // Escape closes the mobile menu and returns focus to the Menu button
  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // NavLink adds aria-current="page" to the active link; we also style it
  const linkClass = ({ isActive }) =>
    [
      'block rounded-lg px-4 py-2 font-semibold transition-colors',
      isActive
        ? 'bg-rose underline decoration-raspberry decoration-4 underline-offset-8'
        : 'hover:bg-rose',
    ].join(' ')

  return (
    <header className="relative z-20 px-2 py-3 md:px-4 md:py-4">
  <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between rounded-2xl border border-cocoa/20 bg-white/90 px-3 py-3 shadow-sm backdrop-blur md:px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-xl bg-raspberry text-sm text-white"
          >
            AC
          </span>
          AfterClass Kigali
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="flex items-center gap-2 rounded-lg border-2 border-cocoa px-3 py-2 font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          <span>Menu</span>
        </button>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`${open ? 'block' : 'hidden'} w-full pt-3 md:block md:w-auto md:pt-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:gap-2">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className={linkClass} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
