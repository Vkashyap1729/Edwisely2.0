import { Avatar, Box, Stack, Typography, Badge } from '@mui/material'
import React from 'react'

const LeaderRanking = ({ data, index, value, rank, col, fontcol, bgcol }) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      bgcolor={bgcol}
      borderRadius={'5px'}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        // gap={'27px'}
        height={'65px'}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          gap={'16px'}
          padding={'8px'}
        >
          <Avatar
            alt="Avatar"
            sx={{ width: 30, height: 30 }}
            src={data.profile_pic}
          />
          <Stack>
            <Typography
              component={'p'}
              sx={{
                color: 'var(--Basic-700, #2E3A59)',
                textLeadingTrim: 'both',
                textEdge: 'cap',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '24px', // Assuming 150% is equivalent to 24px
              }}
            >
              {data.name}
            </Typography>
            <Typography
              component={'p'}
              sx={{
                color: '#212B36',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {value}%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
        <Box
          sx={{
            width: '26px',
            height: '26px',
            bgcolor: col,
            borderRadius: '13px',
            flexShrink: 0,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '19px',
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              color: fontcol,
              textAlign: 'start', // Assuming you want to start-aligned text
              textRendering: 'optimizeLegibility', // For better text rendering
            }}
          >
            {rank}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

export default LeaderRanking
