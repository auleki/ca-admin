import { useState, useEffect } from 'react'
import {
  PageWrap,
  ClothCard,
  ClothingCard,
  Button,
  IOS_SWITCH,
  FormStyle
} from '../../components/StyledComponents'
import { icons } from '../../components/constants'
import CLOTHES from '../../assets/clothes.json'
import BasicTable from '../../components/BasicTable'
import { fetchData } from '../../services/operations'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import axios from 'axios'
import { AiOutlineConsoleSql, AiOutlineSetting } from 'react-icons/ai'
import { formatToComma } from '../../services/operations'
import { FormLabel } from '@material-ui/core'

const ClothingArea = ({ toggleStock, clothing }) => {
  // console.log(clothing)

  const [updatedPrice, setUpdatedPrice] = useState(0)
  const [editPrice, setEditPrice] = useState(false)

  return (
    <ClothingCard className='container' key={clothing.name}>
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
                {/* <p className='price'>₦{formatToComma(cloth.price)}</p> */}
                {/* <p>{cloth.inStock ? 'We get' : 'E done finish'}</p> */}
                <div className='cardSwitch'>
                  <span>FINISHED</span>
                  <FormControlLabel
                    control={
                      <IOS_SWITCH
                        checked={cloth.inStock}
                        onChange={() => toggleStock(cloth.id, cloth.inStock)}
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

const UploadForm = () => {
  // name, price, imageUrl, instock

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [imageUrl, setImageUrl] = useState('')
  const [inStock, setInStock] = useState(true)

  const nameInput = e => setName(e.target.value)
  const priceInput = ({ target }) => setPrice(target.value)

  async function uploadCloth (e) {
    e.preventDefault()
    console.log('Cloth Uploaded')
  }

  return (
    <div>
      <FormStyle onSubmit={uploadCloth}>
        <div className='formGroup'>
          <label htmlFor='name'>Cloth Name</label>
          <input
            autoFocus
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='name'>Price</label>
          <input type='number' onChange={nameInput} value={name} required />
        </div>
        <div className='formGroup'>
          <label htmlFor='name'>Image</label>
          <input type='file' onChange={nameInput} value={name} required />
        </div>
        <div className='formGroup'>
          <label htmlFor='name'>Available</label>
          <input type='radio' value={inStock} />
        </div>
        <div className='formGroup'>
          <Button>Save Clothing</Button>
        </div>
      </FormStyle>
    </div>
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
        // setPageError(true)
        console.error(error)
      }
    }
    loadClothes()
  }, [])

  async function toggleStock (id, isInStock) {
    // id.trim()
    const idTrim = id.replace(/\s+/g, '')
    const url = `http://localhost:6500/api/clothing/update/${idTrim}`
    console.log('ID(REACT):', idTrim)
    const updateData = { inStock: isInStock }
    const res = await axios.patch(url, updateData)
    // console.log(`${id} availablity toggled`)
    // return res
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
        <h2>Getting Clothes {icons.time}</h2>
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
        <div className='uploadArea'>
          <UploadForm />
          <Button className='upload'>Upload Cloth</Button>
          <ClothingArea toggleStock={toggleStock} clothing={clothing} />
        </div>
      )}
    </PageWrap>
  )
}

export default Clothes
