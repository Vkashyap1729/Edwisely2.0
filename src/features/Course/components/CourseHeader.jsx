import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ProgressBar from './ProgressBar'
import { Stack, Box, Typography } from '@mui/material'
const CourseHeader = ({ name, tag, percentage }) => {
  const handelBack = () => {
    window.history.back()
  }
  const bgcolor = '#E7EEFE'
  const color = '#0B58F5'
  return (
    <>
      <Stack
        sx={{
          flexDirection: 'row',
          gap: '20px',
          marginLeft: '33.5px',
          marginTop: '34.29px',
          alignItems: 'center',
        }}
      >
        <Box
          onClick={handelBack}
          sx={{
            cursor: 'pointer',
            ':hover': {
              cursor: 'pointer',
            },
          }}
        >
          <ArrowBackIcon />
        </Box>
        <Typography
          sx={{
            color: '#161C24',
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '-0.25px',
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: 'inline-flex',
            padding: '4px 6px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: bgcolor,
          }}
        >
          <Typography
            sx={{
              color: color,
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '12px',
              textTransform: 'uppercase',
            }}
          >
            {tag}
          </Typography>
        </Box>
      </Stack>

      <Box width={'330px'} margin={'10px 0 0  80px'}>
        <ProgressBar value={percentage} />
      </Box>
    </>
  )
}
export default CourseHeader
