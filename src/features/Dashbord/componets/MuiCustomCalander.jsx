import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { Typography, Box, Stack } from '@mui/material'
const MuiCustomCalander = () => {
  return (
    <Stack spacing={'10px'}>
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '28px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#2E3A59',
        }}
      >
        Calander
      </Typography>
      <Box
        sx={{
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={['day']}
            sx={{
              '&.MuiDateCalendar-root': {
                width: '100%',
                maxHeight: '234px',
                marginLeft: 0,
              },
              '& .MuiPickersCalendarHeader-root': {
                display: 'flex',
                justifyContent: 'space-between',
                margin: '0px',
                padding: '0px',
                paddingLeft: '20px',
                paddingRight: '10px',
                width: '100%',
                marginTop: '2px',
              },
              '& .MuiPickersCalendarHeader-labelContainer': {
                margin: '0px',
                padding: '0px',
                gap: '20px',
              },
              '& .MuiPickersCalendarHeader-label': {
                margin: '0px',
                padding: '0px',
                color: '#0B58F5',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                textAlign: 'center',
              },
              '& .MuiPickersArrowSwitcher-button': {
                margin: '0px',
                padding: '0px',
              },
              '& .MuiPickersArrowSwitcher-spacer': {
                width: '0px',
                height: '0px',
              },
              '& .MuiDayCalendar-root': {
                width: '100%',
                maxHeight: '234px',
                marginLeft: 0,
              },
              '& .MuiDayCalendar-header': {
                paddingLeft: '20px',
                paddingRight: '20px',
                display: 'flex',
                justifyContent: 'space-around',
              },
              '& .MuiDayCalendar-weekDayLabel': {
                margin: '0px',
                padding: '0px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
              },
              '& .MuiDayCalendar-weekContainer': {
                margin: '0px',
                padding: '0px',
                paddingLeft: '20px',
                paddingRight: '20px',
                display: 'flex',
                justifyContent: 'space-around',
              },
              '& .MuiDayCalendar-slideTransition': {
                width: '100%',
                maxHeight: '234px!important',
                margin: '0px',
                padding: '0px',
              },
              '& .MuiPickersDay-root': {
                margin: '0px',
                padding: '0px',
                width: '36px',
                height: '28px',
                color: '#212B36',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
              },
            }}
          />
        </LocalizationProvider>
      </Box>
    </Stack>
  )
}
export default MuiCustomCalander
