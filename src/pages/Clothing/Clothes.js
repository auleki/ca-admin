import { useState, useEffect } from 'react'
import {
  PageWrap,
  ClothCard,
  ClothingCard,
  Button,
  IOS_SWITCH
} from '../../components/StyledComponents'
import { icons } from '../../components/constants'
import CLOTHES from '../../assets/clothes.json'
import BasicTable from '../../components/BasicTable'
import { fetchData } from '../../services/operations'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { AiOutlineConsoleSql, AiOutlineSetting } from 'react-icons/ai'
import { formatToComma } from '../../services/operations'

const ClothingArea = ({ toggleStock, clothing }) => {
  return (
    <ClothingCard className='container'>
      {/* <BasicTable COLUMNS={columns} DATA={clothes} /> */}
      {clothing.map((clothes, i) => (
        <div>
          <div className='section'>
            <h2>{clothes.title}</h2>
          </div>
          <div className='clothing'>
            {clothes.products.map((cloth, i) => (
              <ClothCard className='cloth'>
                {/* <span>{cloth.imgageUrl}</span> */}
                <div className='image'>
                  <img src={cloth.imageUrl} alt='' />
                </div>
                <p className='name'>{cloth.name}</p>
                <p className='price'>₦{formatToComma(cloth.price)}</p>
                {/* <p>{cloth.inStock ? 'We get' : 'E done finish'}</p> */}
                <div className='cardSwitch'>
                  <span>FINISHED</span>
                  <FormControlLabel
                    control={
                      <IOS_SWITCH
                        checked={cloth.inStock}
                        onChange={() => toggleStock(cloth.name)}
                        // label='In Stock'
                      />
                    }
                  />
                  <span>IN STOCK</span>
                </div>
                <div>
                  <Button>
                    <span>Change Price</span>
                    <AiOutlineSetting />
                  </Button>
                </div>
              </ClothCard>
            ))}
          </div>
        </div>
      ))}
    </ClothingCard>
  )
}

const Clothes = () => {
  const [clothing, setClothing] = useState([])
  // const [available, setAvailable] = useState(true)
  const [pageError, setPageError] = useState(false)

  const columns = [
    {
      Header: 'Image',
      accessor: 'cloth_image',
      icon: icons.image
    },
    {
      Header: 'Section',
      accessor: 'section',
      icon: icons.image
    },
    {
      Header: 'Brand Name',
      accessor: 'cloth_name',
      icon: icons.image
    },
    {
      Header: 'Price',
      accessor: 'price',
      icon: icons.image
    },
    {
      Header: 'In Stock',
      accessor: 'in_stock',
      icon: icons.image
    },
    {
      Header: 'Delete',
      accessor: 'remove_from_store',
      icon: icons.image
    }
  ]

  useEffect(() => {
    const loadClothes = async () => {
      try {
        const clothUrl =
          'https://afternoon-chamber-08446.herokuapp.com/api/clothing'
        const { data } = await fetchData(clothUrl)
        setClothing(data)
        console.log(data)
      } catch (error) {
        setPageError(true)
        console.error(error)
      }
    }
    loadClothes()
  }, [])

  // console.log(clothing.products)

  function toggleStock (name) {
    console.log(`${name} availablity toggled`)
    // setAvailable(!available)
  }
  // LOAD BASE CASES!

  if (pageError) {
    return (
      <PageWrap>
        <h2>Error Loading Clothes</h2>
      </PageWrap>
    )
  }

  if (clothing.length === 0) {
    return (
      <PageWrap>
        <h2>Loading...</h2>
      </PageWrap>
    )
  }

  return (
    <PageWrap>
      {/* <div className='title'>
        <h2>Clothes </h2>
      </div> */}
      {pageError ? (
        <div>
          <h1>Error Loading Page...</h1>
        </div>
      ) : (
        <ClothingArea toggleStock={toggleStock} clothing={clothing} />
      )}
    </PageWrap>
  )
}

export default Clothes
