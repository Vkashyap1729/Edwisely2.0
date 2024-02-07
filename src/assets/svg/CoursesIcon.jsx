import React from 'react'
import { Stack, Box } from '@mui/material'
const CoursesIcon = () => {
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        height: '40px',
        width: '40px',
        borderRadius: '8px',
        bgcolor: '#CEDEFD',
        // border: '2px solid black  ',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          //  border: '2px solid black  '
        }}
      ></Box>
    </Stack>
  )
}

export default CoursesIcon
