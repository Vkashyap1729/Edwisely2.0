import { Box, Stack, Typography } from '@mui/material'
import OneCourses from '../../assets/svg/OneCourses'
import ArrowInCard from '../../assets/svg/ArrowInCard'
import { useNavigate } from 'react-router-dom'
const UnitsCard = (props) => {
  const navigate = useNavigate()
  const { name, url } = { ...props }
  const handelClickOnUnitCard = (url) => {
    navigate(`/content/${encodeURIComponent(url)}/${name}`)
  }
  return (
    <Box
      sx={{
        minWidth: '150px',
        width: '100%',
        maxWidth: '300px',
      }}
    >
      <div onClick={() => handelClickOnUnitCard(url)} className="isClickable">
        <Stack
          direction={'row'}
          spacing={'15px'}
          sx={{
            minWidth: '120px',
            width: '100%',
            maxWidth: '300px',
            padding: '10px 10px 10px 10px',
            alignItems: 'center',
            borderRadius: '10px',
            border: '1px solid #F4F6F8',
            background: '#FFF',
            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
          }}
        >
          <Stack
            alignItems={'center'}
            sx={{
              borderRadius: '5px',
              background: '#DFE3E8',
              padding: '15px',
            }}
          >
            <OneCourses />
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography
              sx={{
                color: '#161C24',
                textLeading: 'both',
                textEdge: 'cap',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: 'normal',
                width: '100%',
                maxWidth: '137px',
              }}
            >
              {name}
            </Typography>
          </Stack>
          <ArrowInCard />
        </Stack>
      </div>
    </Box>
  )
}
export default UnitsCard
