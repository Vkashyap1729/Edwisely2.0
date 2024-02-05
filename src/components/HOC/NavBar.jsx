import edwisely from '../../assets/svg/logo-icon.svg'
import DashboardIcon from '../../assets/svg/DashboardIcon'
import CoursesIcon from '../../assets/svg/CoursesIcon'
import LogoutIcon from '../../assets/svg/LogoutIcon'
import { useLocation, useNavigate } from 'react-router'
import { Stack, Box } from '@mui/material'
import { useState } from 'react'

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [stroke, setstroke] = useState('#0B58F5')
  const [fill, setFill] = useState('#CEDEFD')
  // if (location.pathname != '/dashboard') {
  //   setFill('')
  //   setstroke('')
  // }
  const handelLogoClick = () => {
    window.location.reload()
  }
  const handelDashBordIconClick = () => {
    navigate('/dashboard')
  }
  const handelCourseIconClick = () => {
    window.history.back()
  }
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
          // onMouseEnter={() => {
          //   setFill('none')
          //   setstroke('')
          // }}
          // onMouseLeave={() => {
          //   setFill('#CEDEFD')
          //   setstroke('#0B58F5')
          // }}
        >
          <DashboardIcon fill={fill} stroke={stroke} />
        </Box>
        <Box onClick={handelCourseIconClick} className="isClickable">
          <CoursesIcon />
        </Box>
      </Stack>
      <Box className="isClickable">
        <LogoutIcon />
      </Box>
    </Stack>
  )
}
export default NavBar
