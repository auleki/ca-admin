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

// const createData = (name, calories, fat, carbs, protein, price) => {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       { date: '2020-01-05', customerId: '11091700', amount: 3 },
//       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 }
//     ]
//   }
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5)
// ]

const Row = props => {
  const { row } = props
  const [open, setOpen] = useState(false)
  const classes = useRowStyles()

  const expandRow = () => setOpen(!open)

  // console.log('Finding User Info', row)

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={expandRow}>
            {open ? <AiIcons.AiOutlineUp /> : <AiIcons.AiOutlineDown />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {`${row.userInfo.firstName} ${row.userInfo.lastName}`}
        </TableCell>
        <TableCell>{row.orderNumber}</TableCell>
        <TableCell align='center'>{row.products.length}</TableCell>
        <TableCell align='center'>
          <BadgeText
            paid={row.paid}
            className={`${row.paid ? 'paid' : 'paid not'}`}
          >
            {row.paid ? 'PAID' : 'NOT PAID'}
          </BadgeText>
        </TableCell>
        <TableCell>
          <Moment date={row.dateCreated} />
        </TableCell>
        <TableCell>
          <BadgeText
            size={1}
            color={colors.lightGreen}
            textColor={colors.black}
          >
            N{formatToComma(row.price)}
          </BadgeText>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={2}>
              <Typography variant='h6' gutterBottom component='div'>
                User Info
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Fullname</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Location</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.orderNumber}>
                    <TableCell component='th' scope='row'>
                      {`${row.userInfo.firstName} ${row.userInfo.lastName}`}
                    </TableCell>
                    <TableCell>{row.userInfo.email}</TableCell>
                    <TableCell>{row.userInfo.phone}</TableCell>
                    <TableCell>{row.userInfo.location}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Products
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Price(N)</TableCell>
                    {/* <TableCell>Image</TableCell> */}
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow, i) => (
                    <TableRow key={row.orderNumber}>
                      <TableCell component='th' scope='row'>
                        {productRow.name}
                      </TableCell>
                      <TableCell>N{formatToComma(productRow.price)}</TableCell>
                      {/* <TableCell>{productRow.imageUrl}</TableCell> */}
                      <TableCell>{productRow.qty}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const AdvancedTable = () => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    async function loadOrders () {
      const orderUrl =
        'https://afternoon-chamber-08446.herokuapp.com/api/orders'
      const { data } = await fetchData(orderUrl)
      setOrders(data)
      console.log(data)
    }

    loadOrders()
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Fullname</TableCell>
            <TableCell>Order Number</TableCell>
            <TableCell align='center'>Items Qty</TableCell>
            <TableCell align='center'>Paid</TableCell>
            <TableCell>Date Ordered</TableCell>
            <TableCell>Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <Row key={order.name} row={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdvancedTable
