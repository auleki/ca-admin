import { useState, useEffect } from 'react'
import { PageWrap } from '../../components/StyledComponents'
import MOCK_DATA from '../../assets/winners_mock.json'
import BasicTable from '../../components/BasicTable'
import { icons } from '../../components/constants'
import { fetchData } from '../../services/operations'
import MaterialTable from '../../components/MaterialTable'

const Winners = () => {
  const columns = [
    {
      Header: 'First Name',
      accessor: 'first_name',
      icon: icons.user
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
      icon: icons.user
    },
    {
      Header: 'Email',
      accessor: 'email',
      icon: icons.email
    },
    {
      Header: 'Date Won',
      accessor: 'time_won',
      icon: icons.time
    },
    {
      Header: 'Times Won',
      accessor: 'times_won',
      icon: icons.victory
    }
  ]

  // useEffect(() => {
  //   function loadOrders () {
  //     const
  //   }
  // }, [])

  return (
    <PageWrap>
      <div className='title'>
        <h2>Winners </h2>
      </div>
      <MaterialTable />
      {/* <div className='container'>
        <BasicTable COLUMNS={columns} DATA={MOCK_DATA} />
      </div> */}
    </PageWrap>
  )
}

export default Winners
