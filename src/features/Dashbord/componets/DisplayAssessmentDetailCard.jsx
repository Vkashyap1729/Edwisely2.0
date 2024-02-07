import { Stack } from '@mui/material'
import AssessmentDetailCard from '../../../components/common/AssessmentDetailCard'

import Attandance from '../../../assets/svg/Attandance'
import Coding from '../../../assets/svg/Coding'
import Assessments from '../../../assets/svg/Assessments'
import AvgPerformance from '../../../assets/svg/AvgPerformance'
import Asignment from '../../../assets/svg/Asignment'
import { useTheme } from '@emotion/react'

const DisplayAssessmentDetailCard = ({ analytics }) => {
  const theme = useTheme()
  if (!analytics) return null
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: '100%', padding: '28px 20px 20px 20px' }}
    >
      <AssessmentDetailCard
        icon={<Attandance />}
        iconBgColor={theme.palette.primary[100]}
        iconSize={10}
        title="Attendance"
        contentMagnitude={parseInt(analytics?.attendance, 10)}
        contentType="percent"
        showCountingAnimation={true}
      />
      <AssessmentDetailCard
        icon={<AvgPerformance />}
        iconBgColor={theme.palette.info[0]}
        iconSize={10}
        title="Avg. Performance"
        contentMagnitude={parseInt(analytics?.avg_performance, 10) || 0}
        contentType="percent"
        showCountingAnimation={true}
      />
      <AssessmentDetailCard
        icon={<Assessments />}
        iconBgColor={theme.palette.warning[100]}
        iconSize={10}
        title="Assessment"
        contentMagnitude={parseInt(analytics?.assessment, 10) || 0}
        contentType="percent"
        showCountingAnimation={true}
      />
      <AssessmentDetailCard
        icon={<Asignment />}
        iconBgColor={theme.palette.error[100]}
        iconSize={10}
        title="Assignment"
        contentMagnitude={parseInt(analytics?.assignment, 10) || 0}
        contentType="percent"
        showCountingAnimation={true}
      />
      <AssessmentDetailCard
        icon={<Coding />}
        iconBgColor={theme.palette.success[100]}
        iconSize={10}
        title="Coding"
        contentMagnitude={parseInt(analytics?.coding, 10) || 0}
        contentType="percent"
        showCountingAnimation={true}
      />
    </Stack>
  )
}
export default DisplayAssessmentDetailCard
