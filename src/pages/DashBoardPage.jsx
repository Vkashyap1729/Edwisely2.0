import { Stack, Typography } from '@mui/material'
import SideNavbarWithHeader from '../components/HOC/SideNavbarWithHeader'
import DisplayAssessmentDetailCard from '../features/Dashbord/componets/DisplayAssessmentDetailCard'
import UserProfile from '../features/Dashbord/componets/UserProfile'
import DisplayCourseCards from '../features/Dashbord/componets/DisplayCourseCards'
import MuiCustomBarGraph from '../features/Dashbord/componets/MuiCustomBarGraph'
import MuiCustomDatagrid from '../features/Dashbord/componets/MuiCustomDatagrid'
import MuiCustomCalander from '../features/Dashbord/componets/MuiCustomCalander'
import LeaderBoard from '../features/Dashbord/componets/LeaderBoard'
const DashBoardPage = () => {
  return (
    <SideNavbarWithHeader>
      <Typography>Dashboard</Typography>
      <DisplayAssessmentDetailCard />
      <Stack direction={'row'}>
        <Stack
          sx={{
            width: 'calc(100% - 319px)',
            padding: '28px 20px 20px 20px',
          }}
        >
          <MuiCustomBarGraph />
          <MuiCustomDatagrid />
        </Stack>
        <Stack
          sx={{
            width: '319px',
          }}
        >
          <UserProfile />
          <MuiCustomCalander />
          <LeaderBoard />
        </Stack>
      </Stack>
      <DisplayCourseCards />
    </SideNavbarWithHeader>
  )
}
export default DashBoardPage
