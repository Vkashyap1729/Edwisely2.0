import { Stack, Typography } from '@mui/material'
import SideNavbarWithHeader from '../components/HOC/SideNavbarWithHeader'
import DisplayAssessmentDetailCard from '../features/Dashbord/componets/DisplayAssessmentDetailCard'
import UserProfile from '../features/Dashbord/componets/UserProfile'
import DisplayCourseCards from '../features/Dashbord/componets/DisplayCourseCards'
import MuiCustomBarGraph from '../features/Dashbord/componets/MuiCustomBarGraph'
import MuiCustomDatagrid from '../features/Dashbord/componets/MuiCustomDatagrid'
import MuiCustomCalander from '../features/Dashbord/componets/MuiCustomCalander'
import LeaderBoard from '../features/Dashbord/componets/LeaderBoard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  setName,
  setEmail,
  setProfilePicture,
} from '../store/reducers/HOC.reducer'
import { fetchData } from '../store/actions/dashboard.action'
const DashBoardPage = () => {
  const dispatch = useDispatch()
  const { dashBoardData, loading, error } = useSelector(
    (state) => state.dashboard
  )
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const {
    name,
    email,
    profile_picture,
    analytics,
    recent_assessments,
    leaderboard,
    courses,
  } = {
    ...dashBoardData,
  }

  dispatch(setName({ name }))
  dispatch(setEmail({ email }))
  dispatch(setProfilePicture({ profile_picture }))

  if (loading) {
    return <>loading...</>
  }
  if (error) {
    return <>error...</>
  }
  return (
    <SideNavbarWithHeader
      name={name}
      email={email}
      profile_picture={profile_picture}
    >
      <Typography>Dashboard</Typography>
      <DisplayAssessmentDetailCard analytics={analytics} />
      <Stack direction={'row'}>
        <Stack
          sx={{
            width: 'calc(100% - 319px)',
            padding: '28px 20px 20px 20px',
          }}
        >
          <MuiCustomBarGraph recent_assessments={recent_assessments} />
          <MuiCustomDatagrid />
        </Stack>
        <Stack
          sx={{
            width: '319px',
          }}
        >
          <UserProfile
            name={name}
            email={email}
            profile_picture={profile_picture}
          />
          <MuiCustomCalander />
          <LeaderBoard leaderboard={leaderboard} />
        </Stack>
      </Stack>
      <Typography>Your courses</Typography>
      <DisplayCourseCards courses={courses} />
    </SideNavbarWithHeader>
  )
}
export default DashBoardPage
