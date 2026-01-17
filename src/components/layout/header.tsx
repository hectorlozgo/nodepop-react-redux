import { useLocation } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { DialogConfirm } from '../ui/modal-confirm'
import { useAppSelector } from '../../store'
import { Navbar } from './navbar'

export const Header = () => {
  const location = useLocation()
  const isLogged = useAppSelector((state) => state.auth)
  const {
    loadingLogout,
    logoutConfirm,
    navigate,
    handleLogoutClick,
    handleLogoutConfirm,
    handleLogoutCancel
  } = useLogout()

  const isLoginPath = location.pathname === '/login'
  const handleLoginNavigate = () => {
    if (!isLoginPath) navigate('/login')
  }

  return (
    <header className="w-full bg-white px-4 py-4 shadow-md sm:px-6 md:px-8">
      <Navbar
        isLogged={isLogged}
        isLoginPath={isLoginPath}
        isLoading={loadingLogout}
        onLogoutClick={handleLogoutConfirm}
        onLoginClick={handleLoginNavigate}
      />

      {logoutConfirm && (
        <DialogConfirm
          title="¿Estás seguro que deseas cerrar sesión?"
          isOpen={logoutConfirm}
          isLoading={loadingLogout}
          onClose={handleLogoutCancel}
          onConfirm={handleLogoutClick}
        />
      )}
    </header>
  )
}
