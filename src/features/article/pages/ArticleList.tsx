import React, { useEffect, useState } from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { SxProps } from '@mui/material'

import * as articleService from '../article.service'
import { ArticleData } from '@/types/article.type'

const tabletitle: SxProps = { minWidth: 100 }

const ArticleList = () => {
  const [articles, setArticles] = useState<ArticleData[]>([])

  useEffect(() => {
    articleService.getAllArticles().then((data) => {
      setArticles(data)
    })
  }, [])

  const table = (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell align='left' sx={{ minWidth: 100 }}>
              ลำดับ
            </TableCell>
            <TableCell align='left' sx={tabletitle}>
              หัวข้อ
            </TableCell>
            <TableCell align='left' sx={tabletitle}>
              อัพเดทล่าสุด
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article._id}>
              <TableCell align='left'>{article.order}</TableCell>
              <TableCell align='left'>{article.title}</TableCell>
              <TableCell align='left'>{article.last_update}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  return table
}

export default ArticleList
