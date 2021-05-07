import { useState, useEffect } from 'react'
import {
  PageWrap,
  StyleClothCard,
  ClothingCard,
  Button,
  IOS_SWITCH,
  FormStyle,
  Box,
  InputGroup
} from '../../components/StyledComponents'
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from 'cloudinary-react'
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

const ClothCard = ({ cloth, toggleStock }) => {
  // const [updatedPrice, setUpdatedPrice] = useState(0)
  const [editPrice, setEditPrice] = useState(false)
  const [newPrice, setNewPrice] = useState(null)

  const togglePriceEdit = () => setEditPrice(!editPrice)

  const takeNewPrice = e => setNewPrice(e.target.value)

  const savePrice = async price => {
    // setEditPrice(false)
    // console.log('saving price')
    const url = `http://localhost:6500/api/cloth/${cloth.id}`
    console.log(url)
    const result = await axios.post(url, price)
    console.log('RESULT:', result)
  }

  return (
    <StyleClothCard className='cloth'>
      <div className='image'>
        <img src={cloth.imageUrl} alt='' />
      </div>
      <p className='name'>{cloth.name}</p>
      <p className='price'>₦{formatToComma(cloth.price)}</p>
      <div className='cardSwitch'>
        <span>FINISHED</span>
        <FormControlLabel
          control={
            <IOS_SWITCH
              checked={cloth.inStock}
              onChange={() => toggleStock(cloth.id, cloth.inStock)}
            />
          }
        />
        <span>IN STOCK</span>
      </div>
      <div className='priceSection'>
        {editPrice ? (
          <InputGroup>
            <input
              type='number'
              placeholder='New Amount'
              value={newPrice}
              onChange={takeNewPrice}
            />
            <Button onClick={price => savePrice(newPrice)}>Save Price</Button>
          </InputGroup>
        ) : (
          <Button onClick={togglePriceEdit}>
            <span>Change Price</span>
            <AiOutlineSetting />
          </Button>
        )}
      </div>
    </StyleClothCard>
  )
}

const ClothingArea = ({ toggleStock, clothing }) => {
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
              <ClothCard cloth={cloth} toggleStock={toggleStock} />
            ))}
          </div>
        </div>
      ))}
    </ClothingCard>
  )
}

const UploadForm = ({ visible }) => {
  // name, price, imageUrl, instock
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [isFileSelected, setIsFileSelected] = useState(false)
  const [inStock, setInStock] = useState(true)
  const [category, setCategory] = useState()
  const [image, setImage] = useState(null)

  async function uploadCloth (e) {
    e.preventDefault()
    const localUrl = 'http://localhost:6500/api/cloth'
    const newCloth = { name, price, image, category, inStock }
    const savedCloth = await axios.post(localUrl, newCloth)
    console.log('PAYLOAD:', newCloth)
  }

  const takeImage = e => {
    // console.log('INPUT CHECK', e.target.files[0])
    setImage(e.target.files[0])
    setIsFileSelected(true)
  }

  return (
    <Box hide={visible}>
      <FormStyle onSubmit={uploadCloth} encType='multipart/form-data'>
        <div className='formGroup'>
          <label htmlFor='name'>Wear Name</label>
          <input
            autoFocus
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder='Santi Beachware'
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='name'>Price</label>
          <input
            type='number'
            placeholder='N4,000'
            onChange={e => setPrice(e.target.value)}
            value={price}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='name'>Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value='Sweatshirts'>Sweatshirts</option>
            <option value='Polos'>Polos</option>
            <option value='T-Shirt'>T-Shirt</option>
            <option value='Shorts'>Shorts</option>
            <option value='Joggers'>Joggers</option>
          </select>
        </div>
        <div className='formGroup'>
          <label htmlFor='name'>Image</label>
          <input
            type='file'
            name='productImage'
            onChange={takeImage}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='name'>In Stock</label>
          <input type='radio' value={inStock} checked />
        </div>
        <div className='formGroup'>
          <Button>Upload Clothing</Button>
        </div>
        {/* {category ? <p>Selected category: {category}</p> : null} */}
        {/* {isFileSelected ? (
          <div>
            <p>Filename: {image.name}</p>
            <p>File Type: {image.type}</p>
            <p>File Size: {image.size}</p>
          </div>
        ) : (
          <p>Pick a file to see info</p>
        )} */}
      </FormStyle>
    </Box>
  )
}

const Clothes = () => {
  const [clothing, setClothing] = useState([])
  // const [available, setAvailable] = useState(true)
  const [pageError, setPageError] = useState(false)
  const [showForm, setShowForm] = useState(true)

  useEffect(() => {
    const loadClothes = async () => {
      try {
        const clothUrl =
          'https://afternoon-chamber-08446.herokuapp.com/api/clothing'
        const { data } = await fetchData(clothUrl)
        setClothing(data)
        // console.log(data)
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
          <UploadForm visible={showForm} />
          <Button className='upload' onClick={() => setShowForm(!showForm)}>
            Add Cloth
          </Button>
          <ClothingArea toggleStock={toggleStock} clothing={clothing} />
        </div>
      )}
    </PageWrap>
  )
}

export default Clothes
