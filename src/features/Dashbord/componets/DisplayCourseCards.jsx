import { Stack, Typography } from '@mui/material'
import CourseCards from './CourseCards'

const DisplayCourseCards = () => {
  return (
    <>
      <Typography>Your courses</Typography>
      <Stack
        direction="row"
        spacing="22px"
        sx={{
          padding: '28px 20px 20px 20px',
        }}
      >
        <CourseCards />
        <CourseCards />
        <CourseCards />
        <CourseCards />
      </Stack>
    </>
  )
}
export default DisplayCourseCards
