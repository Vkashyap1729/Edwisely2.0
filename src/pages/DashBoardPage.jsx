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
import MuiCustomTable from '../features/Dashbord/componets/MuiCustomTable'
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
  return (
    <SideNavbarWithHeader
      name={name}
      email={email}
      profile_picture={profile_picture}
    >
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: '28px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#2E3A59',
          padding: '12px 20px 0px 20px',
        }}
      >
        Dashboard
      </Typography>
      <DisplayAssessmentDetailCard
        analytics={analytics}
        loading={loading}
        error={error}
      />
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        spacing={'22px'}
        sx={{
          padding: '28px 20px 20px 20px',
        }}
      >
        <Stack
          spacing={'21px'}
          sx={{
            width: 'calc(100% - 319px)',
          }}
        >
          <MuiCustomBarGraph recent_assessments={recent_assessments} />
          {/* <MuiCustomDatagrid /> */}
          <MuiCustomTable />
        </Stack>
        <Stack
          spacing={'30px'}
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
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '28px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#2E3A59',
          padding: '28px 20px 0px 20px',
        }}
      >
        Your courses
      </Typography>
      <DisplayCourseCards courses={courses} />
    </SideNavbarWithHeader>
  )
}
export default DashBoardPage
