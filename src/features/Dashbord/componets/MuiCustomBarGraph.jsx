import {
  Typography,
  Stack,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import RedColor from '../../../assets/svg/RedColor'
import BlueColor from '../../../assets/svg/BlueColor'
import { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from 'recharts'

const CustomizedLabel = ({ x, y, value }) => {
  const col = value === 0 ? '#F44336' : '#0B58F5'
  const fontSize = 14
  const barWidth = 60
  const textWidth = value.toString().length * fontSize

  return (
    <Typography
      component="text"
      x={x + (barWidth - textWidth) / 2}
      y={y}
      dy={-10}
      fill={col}
      textAnchor="middle"
      sx={{
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        letterSpacing: '0.5px',
      }}
    >
      {value}%
    </Typography>
  )
}

const MuiCustomBarGraph = (recent_assessments) => {
  const obj = { ...recent_assessments }
  const data = obj.recent_assessments
  const subject = data?.subjects.map((item) => item.name)

  const [subjectSelected, setSubjectSelected] = useState(
    subject ? subject[0] : ''
  )
  const [index, setIndex] = useState(0)
  const handleSubjectSelectedChange = (event) => {
    setSubjectSelected(subject[event.target.value])
    setIndex(event.target.value)
  }

  if (!data) return null

  return (
    <Box
      sx={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
        padding: '16px 23px 7px 23px',
      }}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '28px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#161C24',
          }}
        >
          {data.title}
        </Typography>
        <Stack direction={'row'} spacing={'18px'} alignItems={'center'}>
          <Stack direction={'row'} spacing={'5px'}>
            <Box>
              <BlueColor />
            </Box>
            <Typography
              sx={{
                color: '#161C24',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
              }}
            >
              Attempted
            </Typography>
          </Stack>
          <Stack direction={'row'} spacing={'5px'}>
            <Box>
              <RedColor />
            </Box>
            <Typography
              sx={{
                color: '#161C24',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
              }}
            >
              Unattempted
            </Typography>
          </Stack>

          <FormControl
            sx={{ m: 1, width: 120 }}
            size="small"
            variant="standard"
          >
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={subjectSelected}
              onChange={handleSubjectSelectedChange}
              displayEmpty
              renderValue={(selected) => {
                if (selected == '') {
                  return subject[0]
                }
                const selectedSubject = selected
                return selectedSubject
              }}
            >
              {subject.map((sub, idx) => (
                <MenuItem value={idx} key={idx}>
                  {sub}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Typography
        sx={{
          color: '#637381',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '28px',
        }}
      >
        Avg. performance
      </Typography>
      <ResponsiveContainer width={'100%'} height={250}>
        <BarChart
          data={data.subjects[index].tests}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis
            dataKey="name"
            sx={{
              color: '#637381',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '20px',
            }}
          />
          <Bar
            dataKey="percentage"
            fill="#0B58F5"
            label={<CustomizedLabel />}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#637381',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '28px',
            marginX: 'auto',
          }}
        >
          {Object.entries(data)[2][1]}
        </Typography>
      </Box>
    </Box>
  )
}

export default MuiCustomBarGraph
