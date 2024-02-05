import { Stack } from '@mui/material'
import AssessmentDetailCard from './AssessmentDetailCard'
const DisplayAssessmentDetailCard = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: '100%', padding: '28px 20px 20px 20px' }}
    >
      <AssessmentDetailCard />
      <AssessmentDetailCard />
      <AssessmentDetailCard />
      <AssessmentDetailCard />
      <AssessmentDetailCard />
    </Stack>
  )
}
export default DisplayAssessmentDetailCard
