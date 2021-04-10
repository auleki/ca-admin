import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import * as AiIcons from 'react-icons/ai'
import { fetchData, formatToComma } from '../services/operations'
import { BadgeText } from './StyledComponents'
import { colors } from './constants'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
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
    const [open, setOpen] = useState(false)
    const classes = useRowStyles()
  
    return (
      <>
        <TableRow className={classes.root}>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.source}</TableCell>
          <TableCell>{row.joinedAt}</TableCell>
        </TableRow>
      </>
    )
  }
  


const SubscribersTable = () => {

    const [subscribers, setSubscribers] = useState([])

    useEffect(() => {
        async function loadSubscribers () {
            const url = 'https://afternoon-chamber-08446.herokuapp.com/api/subscribers'
            const { data } = await fetchData(url)
            setSubscribers(data)
        }
        loadSubscribers()
    }, [])
    
    return (
        <TableContainer component={Paper}>
            <Table aria-label='basic table'>
                <TableHead>
                    <TableCell>Email</TableCell>
                    <TableCell>Source</TableCell>
                    <TableCell>Joined At</TableCell>
                </TableHead>
                <TableBody>
                  {subscribers.map((subscriber, i) => <Row row={subscriber} key={i} />)}
                </TableBody>
            </Table>
            
        </TableContainer>
    )
}

export default SubscribersTable