import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'
import { Stack } from '@mui/material'

export default function LinearDeterminate({ value }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1

        if (newProgress >= value) {
          clearInterval(interval)
        }

        return newProgress
      })
    }, 20) // Adjusted the interval duration for smoother animation

    return () => clearInterval(interval)
  }, [value])

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box sx={{ width: '78%' }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            borderRadius: '10px',
          }}
        />
      </Box>
      <Typography
        sx={{
          color: '#0B58F5',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        Avg. {progress}%
      </Typography>
    </Stack>
  )
}
