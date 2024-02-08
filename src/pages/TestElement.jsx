import SideNavbarWithHeader from '../components/HOC/SideNavbarWithHeader'
import ErrorPage from '../components/common/ErrorPage'
import { Stack, Typography } from '@mui/material'
import ErrorAssessment from '../features/Dashbord/componets/ErrorAssessment'
import MuiCustomTable from '../features/Dashbord/componets/MuiCustomTable'
const TestElement = () => {
  return (
    <Stack
      sx={{
        width: '897px',
      }}
    >
      <MuiCustomTable />
      {/* <ErrorAssessment /> */}
    </Stack>
  )
}
export default TestElement
