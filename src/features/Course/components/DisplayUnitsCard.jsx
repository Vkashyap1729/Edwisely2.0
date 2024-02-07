import UnitsCard from '../../../components/common/UnitsCard'
import { Stack } from '@mui/material'
const DisplayUnitsCard = ({ continue_reading }) => {
  return (
    <Stack direction={'row'} spacing={'22px'}>
      {continue_reading?.map((item) => (
        <UnitsCard name={item.name} url={item.url} />
      ))}
    </Stack>
  )
}
export default DisplayUnitsCard
