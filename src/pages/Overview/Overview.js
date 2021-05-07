import { useState, useEffect } from 'react'
import { colors } from '../../components/constants'
import {
  MiniCard,
  PageWrap,
  AltPageWrap
} from '../../components/StyledComponents'
import AdvancedTable from '../../components/AdvancedTable'
import { fetchData } from '../../services/operations'

const Overview = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const reqUrl = 'https://afternoon-chamber-08446.herokuapp.com/api/orders'
      // const reqUrl = 'http://localhost:6500/api/orders'
      const { data } = await fetchData(reqUrl)
      setOrders(data)
      // return data
      console.log(data)
    }
    loadData()
  }, [])

  return (
    <AltPageWrap>
      {/* <h2>Overview Page</h2> */}
      <div className='cardRow'>
        <MiniCard pColor={colors.darkBlue}>
          <h3>Orders</h3>
          <p>10</p>
        </MiniCard>
        <MiniCard pColor={colors.orange}>
          <h3>Quiz Winners</h3>
          <p>9</p>
        </MiniCard>
        <MiniCard pColor={colors.green}>
          <h3>Total Sales</h3>
          <p>10</p>
        </MiniCard>

        <MiniCard pColor={colors.red}>
          <h3>Subscribers</h3>
          <p>45</p>
        </MiniCard>
      </div>

      <div className='container shiftDown'>
        {/* <BasicTable COLUMNS={} DATA={data} /> */}
        <AdvancedTable />
      </div>
    </AltPageWrap>
  )
}

export default Overview
