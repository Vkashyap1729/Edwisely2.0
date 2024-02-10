import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
  Typography,
  Box,
} from '@mui/material'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [helper, setHelper] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const storedUsername = localStorage.getItem('rememberMeUsername')
    const storedPassword = localStorage.getItem('rememberMePassword')

    if (storedUsername && storedPassword) {
      setUsername(storedUsername)
      setPassword(storedPassword)
      setRememberMe(true)
    }
  }, [])

  const handleLogin = () => {
    fetch(
      `https://stagingstudentpython.edwisely.com/reactProject/loginUser?username=${username}&password=${password}`
    )
      .then((resposne) => resposne.json())
      .then((res) => {
        if (res.status === 200) {
          navigate('/dashboard')
          setHelper((prevState) => !prevState)
        } else {
          alert(res.message)
          setHelper((prevState) => !prevState)
        }
      })
  }
  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe)

    if (!rememberMe) {
      localStorage.setItem('rememberMeUsername', username)
      localStorage.setItem('rememberMePassword', password)
      localStorage.setItem('rememberMe', 'true')
    } else {
      localStorage.removeItem('rememberMeUsername')
      localStorage.removeItem('rememberMePassword')
      localStorage.removeItem('rememberMe')
    }
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      alignContent={'center'}
      marginX={'auto'}
    >
      <Stack
        sx={{
          width: '381px',
        }}
      >
        <Typography
          sx={{
            color: '#161C24',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            textAlign: 'start',
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
            textAlign: 'start',
          }}
        >
          Enter your account details
        </Typography>
        <FormControl>
          <InputLabel htmlFor="name"></InputLabel>
          <Input
            placeholder="Username"
            type="Username"
            autoComplete="off"
            helperText={helper && '*Enter Valid Username'}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputLabel htmlFor="password" />
          <Input
            sx={{
              marginTop: '20px',
            }}
            type={showPassword ? 'text' : 'password'}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="off"
            helperText={helper && '*Enter Valid Username'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <FormControlLabel
            control={
              <Checkbox id="rememberMe" onChange={handleCheckboxChange} />
            }
            label="Remember Me"
          />

          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </FormControl>
      </Stack>
    </Stack>
  )
}
