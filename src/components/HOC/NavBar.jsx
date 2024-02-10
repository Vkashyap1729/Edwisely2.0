import edwisely from '../../assets/svg/logo-icon.svg'
import DashboardIcon from '../../assets/svg/DashboardIcon'
import CoursesIcon from '../../assets/svg/CoursesIcon'
import LogoutIcon from '../../assets/svg/LogoutIcon'
import { useLocation, useNavigate } from 'react-router'
import { Stack, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { logout } from '../../store/reducers/login.reducer'
import { useDispatch } from 'react-redux'
const NavBar = () => {
  const [dashboardStroke, setDashboardStroke] = useState('#919EAB')
  const [dashboardFill, setDashboardFill] = useState('')
  const [courseStroke, setCourseStroke] = useState('#919EAB')
  const [courseFill, setCourseFill] = useState('')
  const [logoutStroke, setLogoutStroke] = useState('#919EAB')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const handelLogoClick = () => {
    window.location.reload()
  }
  const handelDashBordIconClick = () => {
    navigate('/dashboard')
  }
  const handelCourseIconClick = () => {
    if (/^\/content\/.*/.test(location.pathname)) {
      window.history.back()
    }
  }
  const handelLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setDashboardStroke('#0B58F5')
      setDashboardFill('#CEDEFD')
    }
    if (/^\/course\/.*/.test(location.pathname)) {
      setCourseStroke('#0B58F5')
      setCourseFill('#CEDEFD')
    }
  }, [handelDashBordIconClick, handelCourseIconClick])

  return (
    <Stack
      justifyContent={'space-between'}
      height={'100%'}
      alignItems={'center'}
      sx={{
        padding: '22px',
      }}
    >
      <Stack spacing={'32px'}>
        <img
          src={edwisely}
          alt="ed-Wisely"
          style={{ width: '36px', height: '42px' }}
          className="isClickable"
          onClick={handelLogoClick}
        />
        <Box
          onClick={handelDashBordIconClick}
          className="isClickable"
          onMouseEnter={() => {
            setDashboardStroke('#454F5B')
          }}
          onMouseLeave={() => {
            setDashboardStroke('#919EAB')
          }}
        >
          <DashboardIcon stroke={dashboardStroke} fill={dashboardFill} />
        </Box>
        <Box
          onClick={handelCourseIconClick}
          className="isClickable"
          onMouseEnter={() => {
            setCourseStroke('#454F5B')
          }}
          onMouseLeave={() => {
            setCourseStroke('#919EAB')
          }}
        >
          <CoursesIcon stroke={courseStroke} fill={courseFill} />
        </Box>
      </Stack>
      <Box
        className="isClickable"
        onClick={handelLogout}
        onMouseEnter={() => {
          setLogoutStroke('#637381')
        }}
        onMouseLeave={() => {
          setLogoutStroke('#919EAB')
        }}
      >
        <LogoutIcon stroke={logoutStroke} />
      </Box>
    </Stack>
  )
}
export default NavBar
