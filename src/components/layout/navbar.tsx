import { NavLink, type NavLinkProps } from 'react-router-dom'
import { Button } from '../ui/button'

interface NavbarProps {
  isLogged: boolean
  isLoginPath: boolean
  isLoading: boolean
  onLogoutClick: () => void
  onLoginClick: () => void
}
const getNavLinkClass: NavLinkProps['className'] = ({ isActive }) =>
  isActive
    ? 'border-b-2 border-emerald-700 pb-1'
    : 'pb-1 transition hover:border-b-2 hover:border-emerald-500'

export const Navbar = ({
  isLogged,
  isLoginPath,
  isLoading,
  onLoginClick,
  onLogoutClick
}: NavbarProps) => {
  const navLinks = [
    { name: 'Mis Anuncios', route: '/', show: isLogged, end: true },
    { name: 'Nuevo', route: '/adverts/new', show: isLogged, end: true },
    { name: 'Registro', route: '/signup', show: !isLogged, end: false }
  ]
  return (
    <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
      <NavLink
        to="/"
        className="flex cursor-pointer items-center gap-2 select-none"
      >
        <img src="/logo.svg" alt="Logo Nodepop" className="h-10" />
        <span className="sr-only">Nodepop</span>
      </NavLink>

      <ul className="flex flex-wrap items-center gap-4 text-base font-medium text-emerald-700 sm:gap-6 md:gap-8 md:text-lg">
        {navLinks.map(
          (link) =>
            link.show && (
              <li key={link.route}>
                <NavLink to={link.route} className={getNavLinkClass}>
                  {link.name}
                </NavLink>
              </li>
            )
        )}
        <li>
          {isLogged ? (
            <Button
              variant="secondary"
              onClick={onLogoutClick}
              disabled={isLoading}
            >
              {isLoading ? 'Cerrando sesión...' : 'Logout'}
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={onLoginClick}
              disabled={isLoginPath}
            >
              Login
            </Button>
          )}
        </li>
      </ul>
    </nav>
  )
}
