import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

const UserProfile = ({ name, email, profile_picture }) => {
  console.log(profile_picture)
  return (
    <Box>
      <Typography
        sx={{
          color: '#212B36',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '28px',
          marginBottom: '8px',
        }}
      >
        User profile
      </Typography>
      <Box
        sx={{
          borderRadius: '10px',
          background: '#F4F6F8',
          width: '100%',
          display: 'flex',
          padding: '10px',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box
          sx={{
            width: '48px',
            height: '48px',
            borderRadius: '4px',
            background: `url(${profile_picture}) lightgray 50% / cover no-repeat`,
          }}
        >
          <img
            src={profile_picture}
            alt={name}
            style={{ width: '100%', height: '100%', borderRadius: '4px' }}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{
              color: '#212B36',
              fontSize: '16px',
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
              fontWeight: 400,
              lineHeight: '16px',
            }}
          >
            {email}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default UserProfile
