import { useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
// import MOCK_DATA from '../assets/MOCK_DATA.json'
import { COLUMNS } from './Column'
import { IconButton, Row, TableStyle } from './StyledComponents'
import { FaCaretDown, FaCaretUp, FaSort } from 'react-icons/fa'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const BasicTable = ({ COLUMNS, DATA }) => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => DATA, [])

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATA
    },
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    prepareRow
  } = tableInstance

  const { pageIndex } = state

  return (
    <>
      <TableStyle {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className='tableTitle'
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaCaretUp />
                      ) : (
                        <FaCaretDown />
                      )
                    ) : (
                      column.render('icon')
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </TableStyle>

      <Row marginY={3} alignItems='center' justifyContent='space-between'>
        <div className='pageInfo'>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
        </div>
        <div className='actions'>
          <IconButton
            outlined
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {''}
            <RiArrowLeftSLine />
            {/* <span>Previous Page</span> */}
          </IconButton>
          <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
            {/* <span>Next Page</span> */}
            <RiArrowRightSLine />
          </IconButton>
        </div>
      </Row>
    </>
  )
}

export default BasicTable
