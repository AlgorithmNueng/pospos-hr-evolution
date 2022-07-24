import React, { useEffect } from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { SxProps } from '@mui/material'

import * as articleService from '../article.service'

const tabletitle: SxProps = { minWidth: 100 }

const ArticleList = () => {
  useEffect(() => {
    articleService.getAllArticles().then((data) => {
      console.log(data)
    })
  }, [])

  const table = (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell align='left' sx={{ minWidth: 100 }}>
              Employee No
            </TableCell>
            <TableCell align='left' sx={tabletitle}>
              Name - Surname
            </TableCell>
            <TableCell align='left' sx={tabletitle}>
              Rank
            </TableCell>
            <TableCell align='left' sx={tabletitle}>
              Department
            </TableCell>
            <TableCell align='left' sx={tabletitle}>
              Shift
            </TableCell>
            <TableCell align='left' sx={tabletitle}>
              Type
            </TableCell>
            <TableCell align='left' sx={tabletitle}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {employeeLists.map((employee) => (
            <TableRow key={employee.code} onClick={handleDetail(employee.code)} hover style={{ cursor: 'pointer' }}>
              <TableCell align='left'>{employee.code}</TableCell>
              <TableCell align='left'>
                {employee.firstName} {employee.lastName}
              </TableCell>
              <TableCell align='left'>{getRankName(employee.employmentInfo)}</TableCell>
              <TableCell align='left'>{getDepartmentName(employee.employmentInfo)}</TableCell>
              <TableCell align='left'>{getShiftName(employee.employmentInfo)}</TableCell>
              <TableCell align='left'>{getType(employee.employmentInfo)}</TableCell>
              <TableCell align='left'>{getStatus(employee.employmentInfo)}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  )

  return table
}

export default ArticleList
