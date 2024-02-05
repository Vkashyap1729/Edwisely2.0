import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
const CourseCards = ({ chipname, name, color, bgcolor, imgUrl, index }) => {
  const navigate = useNavigate()
  const handleCardClick = (index) => {
    navigate(`/course/${index + 1}`)
  }
  return (
    <Box
      onClick={() => handleCardClick(index)}
      sx={{
        maxWidth: '244px',
        width: '25%',
        minWidth: '150px',
        borderRadius: '10px',
        border: '1px solid #F4F6F8',
        background: '#FFF',
        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
        ':hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Box
        sx={{
          borderRadius: '10px 10px 0px 0px',
          background: `url(${imgUrl}) lightgray 50% / cover no-repeat`,
          boxShadow: '0px -1px 0px 0px #E9EAF0 inset',
          width: '100%',
          aspectRatio: '244/183',
        }}
      ></Box>
      <Box sx={{ padding: '0px 14px' }}>
        <Box
          sx={{
            display: 'inline-flex',
            padding: '4px 6px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: bgcolor,
            my: '10px',
          }}
        >
          <Typography
            sx={{
              color: color,
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '12px',
              textTransform: 'uppercase',
            }}
          >
            {chipname}
          </Typography>
        </Box>
        <Typography>{name}</Typography>
      </Box>
    </Box>
  )
}

export default CourseCards
