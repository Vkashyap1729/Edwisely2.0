import { Stack, Typography } from '@mui/material'
import CourseCards from '../../../components/common/CourseCards'

const DisplayCourseCards = ({ courses }) => {
  const colors = ['#0B58F5', '#D89932', '#4ECD56', '#D89932']
  const bgcolors = ['#E7EEFE', '#FFF0D8', '#EDFAEE', '#FFF0D8']
  return (
    <>
      <Stack
        direction="row"
        spacing="22px"
        sx={{
          padding: '15px 20px 20px 20px',
        }}
      >
        {courses?.map((item, idx) => (
          <>
            <CourseCards
              chipname={item.tag}
              name={item.name}
              color={colors[idx]}
              bgcolor={bgcolors[idx]}
              imgUrl={item.image}
              index={idx}
            />
          </>
        ))}
      </Stack>
    </>
  )
}
export default DisplayCourseCards
