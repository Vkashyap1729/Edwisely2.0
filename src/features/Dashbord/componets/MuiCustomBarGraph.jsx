import * as React from 'react'
import { Typography, Stack, Box } from '@mui/material'
import RedColor from '../../../assets/svg/RedColor'
import BlueColor from '../../../assets/svg/BlueColor'
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

const MuiCustomBarGraph = (analysis) => {
  const obj = { ...analysis }
  const data = obj.analysis

  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography
          sx={{
            color: '#161C24',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '28px',
          }}
        >
          Recent Assessments
        </Typography>
        <Stack direction={'row'} spacing={'18px'} alignItems={'center'}>
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
              Attempted
            </Typography>
          </Stack>
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
              Unattempted
            </Typography>
          </Stack>
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
      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart
          data={data}
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
    </>
  )
}

export default MuiCustomBarGraph
