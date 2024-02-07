import { Stack } from '@mui/material'
import LoginMainImage from '../features/Login/components/LoginMainImage'
import LoginForm from '../features/Login/components/LoginForm'
const LoginPage = () => {
  return (
    <Stack
      direction={'row'}
      sx={{
        width: '100%',
        maxWidth: '1500px',
      }}
    >
      <LoginMainImage />
      <LoginForm />
    </Stack>
  )
}
export default LoginPage
