import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../pages/auth/service'
import { authLogout } from '../../store/auth/actions'
import { useAppDispatch } from '../../store'

export const useLogout = () => {
  const [loadingLogout, setLoadingLogout] = useState(false)
  const [logoutConfirm, setLogoutConfirm] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogoutClick = async () => {
    try {
      setLoadingLogout(true)
      await logout()
      dispatch(authLogout())
      navigate('/')
    } finally {
      setLoadingLogout(false)
      setLogoutConfirm(false)
    }
  }
  return {
    loadingLogout,
    logoutConfirm,
    navigate,
    setLoadingLogout,
    setLogoutConfirm,
    handleLogoutClick
  }
}
