import { colors } from '../../components/constants'
import { MiniCard, PageWrap } from '../../components/StyledComponents'

const Overview = () => {
  return (
    <PageWrap>
      <h2>Overview Page</h2>
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
    </PageWrap>
  )
}

export default Overview
