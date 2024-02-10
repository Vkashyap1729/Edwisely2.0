import { Stack, Typography, Box } from '@mui/material'
import ErrorIcon from '../../assets/svg/CommonErrorIcon.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const CommonErrorComponent = () => {
  return (
    <Box padding={'30px'}>
      <ArrowBackIcon
        onClick={() => window.history.back()}
        className="isClickable"
      />
      <Stack justifyContent={'center'} alignItems={'center'} spacing={'18px'}>
        <img src={ErrorIcon} alt="" width={'420px'} />
        <Typography
          sx={{
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: '32px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#0B58F5',
          }}
        >
          Something went wrong
        </Typography>
        <Typography
          className="isClickable"
          onClick={() => {
            window.location.reload()
          }}
          sx={{
            color: '#1076D4',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '32px',
            letterSpacing: '0em',
            textAlign: 'left',
            textDecoration: 'underline',
          }}
        >
          Reload Again
        </Typography>
      </Stack>
    </Box>
  )
}
export default CommonErrorComponent
