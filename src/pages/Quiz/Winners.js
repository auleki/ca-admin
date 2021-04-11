import { useState, useEffect } from 'react'
import { PageWrap } from '../../components/StyledComponents'
import MOCK_DATA from '../../assets/winners_mock.json'
import BasicTable from '../../components/BasicTable'
import { icons } from '../../components/constants'
import { fetchData } from '../../services/operations'
import MaterialTable from '../../components/MaterialTable'
import PaginatedTable from '../../components/PaginatedTable'
// import DataTable from '../../components/DataTable'

const Winners = () => {
  return (
    <PageWrap>
      <div className='title'>
        <h2>Quiz Winners </h2>
      </div>
      {/* <MaterialTable /> */}
      <div className='container'>
        <PaginatedTable />
        {/* <DataTable /> */}
      </div>
    </PageWrap>
  )
}

export default Winners
