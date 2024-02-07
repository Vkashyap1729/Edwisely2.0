import { Box, Stack, Typography, Popover, Button } from '@mui/material'
import { useState } from 'react'

const Header = ({ name, email, profile_picture }) => {
  // console.log(profile_picture)
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
      <Typography variant="h2">Good morning, {name}</Typography>
      <MainHeaderImage
        name={name}
        email={email}
        profile_picture={profile_picture}
      />
    </Stack>
  )
}

const MainHeaderImage = ({ name, email, profile_picture }) => {
  const [anchorEl, setAnchorEl] = useState(null)
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
            // maxWidth: '215px',
            // width: '100%',
            // minWidth: '150px',
            width: '215px',
            height: '170px',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <img src={profile_picture} alt={name} style={styles} />
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
          <Button> logout </Button>
        </Stack>
      </Popover>
    </Box>
  )
}
export default Header
