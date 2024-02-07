import image from '../../../assets/svg/LoginImage.svg'
import { Box, Typography } from '@mui/material'
const LoginMainImage = () => {
  return (
    <Box
      sx={{
        width: '50%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'end',
        flexDirection: 'row',
        justifyContent: 'center',
        bgcolor: '#0B58F5',
        position: 'relative',
      }}
    >
      <img
        src={image}
        alt="login image"
        style={{
          width: '100%',
          maxHeight: '100vh',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '84px',
          left: '86px',
        }}
      >
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '57.251px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '50.094px',
          }}
        >
          Welcome to
        </Typography>
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '57.251px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '50.094px',
          }}
        >
          student portal
        </Typography>
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            my: '9px',
          }}
        >
          Login to access your account
        </Typography>
      </Box>
    </Box>
  )
}
export default LoginMainImage
