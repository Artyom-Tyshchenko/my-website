import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Главная', end: true },
  { to: '/videos', label: 'Видео' },
  { to: '/gallery', label: 'Манга & Аниме' },
  { to: '/contact', label: 'Сотрудничество' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          Артём Тыщенко
        </NavLink>
        <button
          className="nav-toggle"
          aria-label="Открыть меню"
          onClick={() => setOpen((v) => !v)}
        >
          <i className="fas fa-bars" />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
