import { Box, Stack, Typography, Popover, IconButton } from '@mui/material'
import { useState } from 'react'
import LogoutIcon from '../../assets/svg/LogoutIcon'
import { logout } from '../../store/reducers/login.reducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import ImageEditIconProfilePicture from '../../assets/svg/ImageEditIconProfilePicture'
const Header = ({ name, email, profile_picture }) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      alignContent={'center'}
      justifyContent={'space-between'}
      sx={{
        height: '79px',
        pl: '18px',
        pr: '40px',
      }}
    >
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#000000',
        }}
      >
        Good morning, {name} 👋
      </Typography>
      <MainHeaderImage
        name={name}
        email={email}
        profile_picture={profile_picture}
      />
    </Stack>
  )
}

const MainHeaderImage = ({ name, email, profile_picture }) => {
  const [editing, setEditing] = useState(false)
  const [newImage, setNewImage] = useState(profile_picture)

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]
    // profile_picture = URL.createObjectURL(file)
    setNewImage(URL.createObjectURL(file))
    setEditing(true)
    // localStorage.setItem(
    //   'userData',
    //   JSON.stringify({ name, email, profile_picture })
    // )
  }
  const handleEditClick = () => {
    setEditing(true)
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const [logoutStroke, setLogoutStroke] = useState('#919EAB')
  const handelLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const styles = {
    width: '50px',
    height: '50px',
    flexShrink: 0,
    borderRadius: '24px',
    background: `url(${profile_picture}), lightgray 50% / cover no-repeat, #C4C4C4`,
    cursor: 'pointer',
  }

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <img
        src={profile_picture}
        alt={name}
        style={styles}
        onClick={handlePopoverOpen}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: { backgroundColor: 'transparent', boxShadow: 'none' },
        }}
        sx={{
          position: 'absolute',
          right: 0,
        }}
      >
        <Stack
          spacing={'5px'}
          padding={'5px'}
          sx={{
            borderRadius: '15px',
            border: '0.5px solid #DFE3E8',
            background: '#F4F6F8',
            width: '215px',
            height: '170px',
            alignItems: 'center',
            alignContent: 'center',
            boxShadow: '10px 10px 32px 0px #1616160A',
          }}
        >
          <Box style={{ position: 'relative', display: 'flex' }}>
            <img src={newImage} alt={name} style={styles} />
            <Dropzone
              onDrop={handleDrop}
              style={{
                display: editing ? 'block' : 'none',
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 1,
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <Box
                  {...getRootProps()}
                  style={{ width: '100%', height: '100%' }}
                >
                  <input {...getInputProps()} />
                  <Box
                    className="isClickable"
                    onClick={handleEditClick}
                    style={{ position: 'absolute', bottom: '0', right: '0' }}
                  >
                    <ImageEditIconProfilePicture />
                  </Box>
                </Box>
              )}
            </Dropzone>
          </Box>
          <Typography
            sx={{
              color: '#212B36',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '24px',
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: '#919EAB',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '16px',
            }}
          >
            {email}
          </Typography>

          <Stack
            className="isClickable"
            spacing={'7px'}
            direction={'row'}
            onClick={handelLogout}
            alignItems={'center'}
            onMouseEnter={() => {
              setLogoutStroke('#637381')
            }}
            onMouseLeave={() => {
              setLogoutStroke('#919EAB')
            }}
            sx={{
              width: '185px',
              height: '35px',
              borderRadius: '5px',
              bgcolor: '#FFFFFF',
              padding: '0 13px 0 13px',
              '&:hover': {
                bgcolor: '#F4F6F8',
              },
            }}
          >
            <LogoutIcon stroke={logoutStroke} />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                letterSpacing: '0em',
                textAlign: 'left',
                display: 'flex',
                flex: 1,
              }}
            >
              Logout
            </Typography>
          </Stack>
        </Stack>
      </Popover>
    </Box>
  )
}
export default Header
