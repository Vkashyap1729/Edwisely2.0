import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
  Box,
  Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const loginUser = async (username, password) => {
    try {
      const response = await fetch(
        `https://stagingstudentpython.edwisely.com/reactProject/loginUser?username=${username}&password=${password}`
      )
      if (response.status === 200) {
        navigate('/dashboard')
      } else {
        alert('Invalid username or password')
      }
    } catch (error) {
      console.error('Error during fetch:', error)
    }
  }
  const handleLogin = () => {
    loginUser(username, password)
  }
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }
  return (
    <Box
      sx={{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        spacing={'22px'}
        sx={{
          width: '381px',
          height: '363px',
        }}
      >
        <Box>
          <Typography
            sx={{
              color: '#161C24',
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            Login
          </Typography>
          <Typography
            sx={{
              color: '#161C24',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              my: '12px',
            }}
          >
            Enter your account details
          </Typography>
        </Box>
        <FormControl>
          <InputLabel htmlFor="name"></InputLabel>
          <Input
            id="name"
            placeholder="Username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputLabel htmlFor="password" />
          <Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="off"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormControlLabel
            control={<Checkbox id="rememberMe" />}
            label="Remember Me"
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </Box>
  )
}
export default LoginForm
