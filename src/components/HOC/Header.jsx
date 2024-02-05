import { Box, Stack, Typography } from '@mui/material'
const Header = () => {
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
      <Typography variant="h2">Good morning,👋</Typography>
    </Stack>
  )
}
export default Header
