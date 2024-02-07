import { Stack, useTheme, Box } from '@mui/material'
import NavBar from './NavBar'
import Header from './Header'

const SideNavbarWithHeader = ({ name, email, profile_picture, children }) => {
  const theme = useTheme()

  return (
    <Stack
      sx={{
        direction: 'row',
        spacing: 0,
        position: 'relative',
        maxWidth: '1500px',
      }}
    >
      <Stack
        sx={{
          width: '80px',
          height: '100%',
          position: 'fixed',
          alignItems: 'center',
          justifyItems: 'center',
          bgcolor: theme.palette.grey[100],
        }}
      >
        {/* side- navBar */}
        <NavBar />
      </Stack>
      <Stack
        sx={{
          width: 'calc(100% - 80px)',
          bgcolor: theme.palette.primary[0],
          position: 'absolute',
          left: '80px',
        }}
      >
        {/* Main - Header */}
        <Header name={name} email={email} profile_picture={profile_picture} />
        <Box
          sx={{
            height: '1px',
            bgcolor: theme.palette.grey[200],
          }}
        ></Box>
        {children}
      </Stack>
    </Stack>
  )
}

export default SideNavbarWithHeader
