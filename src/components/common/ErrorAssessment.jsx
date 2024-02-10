import { Stack, Typography } from '@mui/material'
import errorIcon from '../../assets/svg/errorIcon.svg'

const ErrorAssessment = () => {
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Stack alignItems={'center'} spacing={'30px'}>
        <img src={errorIcon} alt="" width={'100px'} height={'100px'} />
        <Typography
          sx={{
            fontSize: '40px',
            fontWeight: 400,
            lineHeight: '60px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#919EAB',
          }}
        >
          Error Loading Assessment
        </Typography>
        <Typography
          className="isClickable"
          sx={{
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '30px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#1076D4',
            textDecoration: 'underline',
          }}
          onClick={() => {
            window.location.reload()
          }}
        >
          Reload
        </Typography>
      </Stack>
    </Stack>
  )
}
export default ErrorAssessment
