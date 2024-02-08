import { useState } from 'react'
import CustomCard from '../../../components/common/CustomCard'
import {
  Skeleton,
  Stack,
  Typography,
  Drawer,
  IconButton,
  Box,
} from '@mui/material'
import LeaderRanking from './LeaderRanking'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const LeaderBoard = ({ leaderboard, width = '100%', height = '100%' }) => {
  const data = Object.values({ ...leaderboard })
  // console.log('data is', leaderboard)
  const sortedData = data.sort((a, b) => b.percentage - a.percentage)
  const rankedData = sortedData.map((data, index) => ({
    ...data,
    rank: index + 1,
  }))
  const [open, setOpen] = useState(false)
  const handleToggleDrawer = () => {
    setOpen(!open)
  }
  // to be taken from params
  const loggedInUserId = 1234
  const userIndex = rankedData.findIndex((item) => item.id === loggedInUserId)
  if (userIndex !== -1) {
    const user = rankedData.splice(userIndex, 1)[0]
    rankedData.unshift(user)
  }
  return (
    <Stack
      spacing={'10px'}
      onClick={handleToggleDrawer}
      sx={{
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ alignItems: 'center' }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#2E3A59',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '28px',
          }}
        >
          Leaderboard
        </Typography>
        <KeyboardArrowRightIcon />
      </Stack>
      <Box
        sx={{
          borderRadius: '10px',
          border: '1px solid #F4F6F8',
          background: '#FFF',
          boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
          padding: '10px',
        }}
      >
        <Stack>
          {rankedData.slice(0, 6).map((item, index) => (
            <LeaderRanking
              key={index + 1}
              data={item}
              value={item.percentage}
              index={index + 1}
              rank={item.rank}
              col={item.rank < 4 ? '#EDFAEE ' : '#E7EEFE'}
              fontcol={item.rank < 4 ? '#40A846 ' : '#0B58F5'}
              bgcol={index == 0 ? '#F4F6F8' : '#FFFF'}
            />
          ))}
        </Stack>
      </Box>
      <Drawer
        anchor="right"
        open={open}
        PaperProps={{
          style: {
            maxWidth: '364px',
            width: '100%',
            padding: '21px 21px 21px 21px ',
          },
        }}
      >
        <Stack direction={'row'} spacing={'10px'} alignItems={'center'}>
          <ArrowBackIcon
            onClick={handleToggleDrawer}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: 'var(--Basic-700, #2E3A59)',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '28px',
            }}
          >
            Leaderboard
          </Typography>
        </Stack>
        <CustomCard width={width} height={height} bgcol={'#F4F6F8'}>
          <Stack>
            {rankedData ? (
              <Stack>
                {rankedData?.map((item, index) => (
                  <LeaderRanking
                    key={index + 1}
                    data={item}
                    value={item.percentage}
                    index={index + 1}
                    rank={item.rank}
                    col={item.rank < 4 ? '#EDFAEE ' : '#E7EEFE'}
                    fontcol={item.rank < 4 ? '#40A846 ' : '#0B58F5'}
                    bgcol={index == 0 ? '#F4F6F8' : '#FFFF'}
                  />
                ))}
              </Stack>
            ) : (
              <LeaderPlaceHolder />
            )}
          </Stack>
        </CustomCard>
      </Drawer>
    </Stack>
  )
}

export default LeaderBoard

const LeaderPlaceHolder = () => {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="text"
        sx={{
          fontSize: '1rem',
          background: (theme) => theme.palette.grey[200],
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: '1rem',
          background: (theme) => theme.palette.grey[200],
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: '1rem',
          background: (theme) => theme.palette.grey[200],
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: '1rem',
          background: (theme) => theme.palette.grey[200],
        }}
      />
    </Stack>
  )
}
