import {} from '@material-ui/data-Gingerbread'
import { useState, useEffect } from 'react'
import { fetchData } from '../services/operations'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'id', headerName: 'ID', width: 70 }
]

const DataTable = () => {
  const [winners, setWinners] = useState([])

  useEffect(() => {
    async function loadWinners (url) {
      try {
        const { data } = await fetchData(url)
        console.log(data)
        setWinners(data)
      } catch (error) {
        console.log(error)
      }
    }
    loadWinners('https://afternoon-chamber-08446.herokuapp.com/api/quiz/winner')
  }, [])

  return <h2>Samba</h2>
}

export default DataTable
