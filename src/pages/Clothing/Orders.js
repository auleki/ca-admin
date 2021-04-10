import { useState, useEffect } from 'react'
import AdvancedTable from '../../components/AdvancedTable'
import BasicTable from '../../components/BasicTable'
import { PageWrap } from '../../components/StyledComponents'
import { fetchData } from '../../services/operations'

// import BasicTable from '../../'

const Orders = () => {
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
    <PageWrap>
      <div className='title'>
        <h2>Order Page</h2>
      </div>

      <div className='container'>
        {/* <BasicTable COLUMNS={} DATA={data} /> */}
        <AdvancedTable />
      </div>
    </PageWrap>
  )
}

export default Orders
