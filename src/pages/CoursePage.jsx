import { Stack, Box, Typography } from '@mui/material'
import SideNavbarWithHeader from '../components/HOC/SideNavbarWithHeader'
import { useEffect, useState } from 'react'
import { fetchData } from '../store/actions/course.action'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import CourseHeader from '../features/Course/components/CourseHeader'
import Units from '../features/Course/components/Unit'
import UnitsCard from '../components/common/UnitsCard'
import CourseDescription from '../features/Course/components/CourseDescription'
import DisplayUnitsCard from '../features/Course/components/DisplayUnitsCard'
import { UseSelector } from 'react-redux'
import CommonErrorComponent from '../components/common/CommonErrorComponent'
const CoursePage = () => {
  const { id } = useParams()
  const url = `https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=${id}`
  const dispatch = useDispatch()
  const { courseData, loading, error } = useSelector((state) => state.course)
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchData(url))
  }, [dispatch])
  const { data } = { ...courseData }
  if (data == null) return null
  const { name, tag, percentage, description, continue_reading, units } = {
    ...data,
  }

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return (
      <>
        <CommonErrorComponent />
      </>
    )
  }
  return (
    <SideNavbarWithHeader>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          padding: '0 20px 0 0',
        }}
      >
        <CourseHeader name={name} tag={tag} percentage={percentage} />
        <CourseDescription description={description} />
        <Box sx={{ marginTop: '40px', marginLeft: '56px' }}>
          <Typography
            sx={{
              color: '#00000',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              my: '10px',
            }}
          >
            Continue reading
          </Typography>
          <DisplayUnitsCard continue_reading={continue_reading} />
          <Box height={'100%'}>
            <Box display={'flex'}>
              <Typography
                sx={{
                  color: '#919EAB',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 300,
                  lineHeight: 'normal',
                }}
              >
                <Units units={units} />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </SideNavbarWithHeader>
  )
}
export default CoursePage
