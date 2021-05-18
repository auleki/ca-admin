import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import * as AiIcons from 'react-icons/ai'
import { fetchData } from '../services/operations'
// import { BadgeText } from './StyledComponents'
// import { colors } from './constants'
// import Box from '@material-ui/core/Box'
// import Collapse from '@material-ui/core/Collapse'
// import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
// import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Moment from 'react-moment'
import 'moment-timezone'

const useRowStyles = makeStyles({
  root: {
    '& > * ': {
      borderBottom: 'unset'
    }
  }
})

const Row = props => {
  const { row } = props
  // const [open, setOpen] = useState(false)
  const classes = useRowStyles()

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>{`${row.firstName} ${row.lastName}`}</TableCell>
        <TableCell>{row.username}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>
          <Moment date={row.wonAt} />
        </TableCell>
        <TableCell align='center'>{row.totalWins}</TableCell>
      </TableRow>
    </>
  )
}

const MaterialTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function loadWinners () {
      const url =
        'https://afternoon-chamber-08446.herokuapp.com/api/quiz/winner'
      const { data } = await fetchData(url)
      console.log(data)
      setData(data)
    }
    loadWinners()
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table aria-label='basic table'>
        <TableHead>
          <TableRow>
            <TableCell>Fullname</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date Won</TableCell>
            <TableCell align='center'>Times Won</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <Row row={item} key={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MaterialTable
