import { Box, Typography } from '@mui/material'
const CourseDescription = ({ description }) => {
  const contentArray = description
    ? description.split('\n').filter((item) => item.trim() !== '')
    : []
  return (
    <>
      <Box
        sx={{
          marginTop: '26px',
          marginLeft: '85px',
        }}
      >
        <Box
          sx={{
            marginTop: '27px',
          }}
        >
          <Typography
            sx={{
              color: '#000',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            What you will learn
          </Typography>

          <Typography
            sx={{
              marginTop: ' 8px',
              minWidth: '600px',
              width: '100%',
              maxWidth: '1095px',
            }}
          >
            {contentArray.map((item, index) => (
              <div key={index}>
                <Typography variant="body1" component="span">
                  •
                </Typography>
                <Typography
                  variant="body1"
                  component="span"
                  ml={1}
                  sx={{
                    color: '#00000',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: 'normal',
                  }}
                >
                  {item}
                </Typography>
              </div>
            ))}
          </Typography>
        </Box>
      </Box>
    </>
  )
}
export default CourseDescription
