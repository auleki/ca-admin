import { PageWrap } from '../../components/StyledComponents'
import BasicTable from '../../components/BasicTable'
import MOCK_DATA from '../../assets/MOCK_DATA.json'
import { RiMailLine } from 'react-icons/ri'
import { icons } from '../../components/constants'
import SubscribersTable from '../../components/SubscribersTable'

const Subscribers = () => {
  const COLUMNS = [
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
      Header: 'Source',
      accessor: 'source',
      icon: icons.badge
    }
  ]

  return (
    <PageWrap>
      <div className='title'>
        <h2>Subscribers</h2>
      </div>

      <div className='container'>
        {/* <BasicTable COLUMNS={COLUMNS} DATA={MOCK_DATA} /> */}
        <SubscribersTable />
      </div>
    </PageWrap>
  )
}

export default Subscribers
