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
import { fetchData } from '../store/actions/dashboard.action'
import MuiCustomTable from '../features/Dashbord/componets/MuiCustomTable'
import CommonErrorComponent from '../components/common/CommonErrorComponent'
import AssessmentDetailsSkeleton from '../features/Dashbord/componets/AssessmentDetailsSkeleton'
import CourseSkeleton from '../features/Dashbord/componets/CourseSkeleton'
import LeaderBoardSkeleton from '../features/Dashbord/componets/LeaderBoardSkeleton'
import AssessmentSkeleton from '../features/Dashbord/componets/AssessmentSkeleton'
import { UseSelector } from 'react-redux'
import { useNavigate } from 'react-router'
const DashBoardPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
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
  useEffect(() => {
    localStorage.setItem(
      'userData',
      JSON.stringify({ name, email, profile_picture })
    )
  }, [name, email, profile_picture])

  if (error) {
    return (
      <>
        <CommonErrorComponent />
      </>
    )
  }

  if (!isLoggedIn) {
    navigate('/')
  }
  return (
    <SideNavbarWithHeader>
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
      {loading ? (
        <AssessmentDetailsSkeleton />
      ) : (
        <DisplayAssessmentDetailCard analytics={analytics} />
      )}
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        // spacing={'22px'}
        sx={{
          padding: '28px 20px 20px 20px',
        }}
      >
        <Stack
          spacing={'21px'}
          sx={{
            // width: 'calc(100% - 319px)',
            width: '70%',
            minWidth: '550px',
            '@media (min-width: 1200px)': {
              width: '100%',
            },
          }}
        >
          <MuiCustomBarGraph recent_assessments={recent_assessments} />
          {/* <MuiCustomDatagrid /> */}
          {loading ? <AssessmentSkeleton /> : <MuiCustomTable />}
        </Stack>
        <Stack
          spacing={'30px'}
          sx={{
            // width: '319px',
            width: '30%',
            // minWidth: '260px',
            padding: '0 0 22px 22px ',
            maxWidth: '319px',
          }}
        >
          <UserProfile
            name={name}
            email={email}
            profile_picture={profile_picture}
          />
          <MuiCustomCalander />
          {loading ? (
            <LeaderBoardSkeleton />
          ) : (
            <LeaderBoard leaderboard={leaderboard} />
          )}
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
      {loading ? <CourseSkeleton /> : <DisplayCourseCards courses={courses} />}
    </SideNavbarWithHeader>
  )
}
export default DashBoardPage
