import React, { useEffect, createRef, useState } from 'react'
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Paper,
  Skeleton,
  Stack,
  Pagination,
} from '@mui/material'
import MuiCustomTableHeaderRowWithSortandSelect from './MuiCustomTableHeaderRowWithSortandSelect'
import MuiCustomStudentTableRow from './MuiCustomStudentTableRow'

const MuiCustomTableWithSortandSelect = (props) => {
  const {
    HeaderArr,
    tableData,
    sortHandler,
    selectHandler,
    loading_reportData,
    filtered_studentAssessmentList,
    submissionTypesToShowinStudentTable,
  } = props

  const [page, setPage] = React.useState(1)
  const rowsPerPage = 8

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const paginatedRows = tableData?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  )

  return (
    <>
      <Paper
        sx={{
          boxShadow: 'none',
          marginTop: '1.5rem',
        }}
      >
        <Table sx={{ width: '100%' }} aria-label="sticky table">
          <TableHead
            sx={{
              position: 'relative',
              zIndex: 100,
              background: 'white',
            }}
          >
            <MuiCustomTableHeaderRowWithSortandSelect
              headerArray={HeaderArr}
              sortHandler={sortHandler}
              selectHandler={selectHandler}
            />
          </TableHead>
          <TableBody>
            {paginatedRows?.map((stu, i) => (
              <MuiCustomStudentTableRow stu={stu} key={i} />
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: '1rem' }}
      >
        <Pagination
          count={Math.ceil(
            filtered_studentAssessmentList?.length / rowsPerPage
          )}
          page={page}
          onChange={handleChangePage}
        />
      </Stack>
    </>
  )
}

export default MuiCustomTableWithSortandSelect
