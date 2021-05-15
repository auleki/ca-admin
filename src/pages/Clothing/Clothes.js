import { useState, useEffect } from 'react'
import {
  PageWrap,
  StyleClothCard,
  ClothingCard,
  Button,
  IOS_SWITCH,
  IconButton,
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
  const [newPrice, setNewPrice] = useState(0)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const togglePriceEdit = () => setEditPrice(!editPrice)

  const takeNewPrice = e => setNewPrice(e.target.value)

  const savePrice = async (e, price) => {
    // setEditPrice(false)
    // console.log('saving price')
    e.preventDefault()
    if (newPrice === 0) {
      setError(true)
      setErrorMsg("The new price can't be ₦0")
      return
    }
    const url = `http://localhost:6500/api/cloth/${cloth.id}`
    console.log(url)
    const result = await axios.patch(url, price)
    setNewPrice(0)
    console.log('RESULT:', result)
  }

  const cancelEditPrice = () => {
    setError(false)
    setErrorMsg('')
    setEditPrice(false)
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
          <form onSubmit={price => savePrice(price)}>
            <InputGroup>
              {/* <FormStyle> */}
              <input
                type='number'
                required
                placeholder='New Amount'
                value={newPrice}
                onChange={takeNewPrice}
              />
              <IconButton
                noRotate
                onClick={(e, price) => savePrice(e, newPrice)}
              >
                <span>{icons.tick}</span>
              </IconButton>
              <IconButton outlined noRotate onClick={cancelEditPrice}>
                <span>{icons.cancel}</span>
              </IconButton>
              {/* </FormStyle> */}
            </InputGroup>
            <div className='error-section'>{error && errorMsg}</div>
          </form>
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
      <div className='clothing'>
        {clothing.map((cloth, i) => (
          <div>
            <ClothCard cloth={cloth} toggleStock={toggleStock} key={cloth.id} />
          </div>
        ))}
      </div>
    </ClothingCard>
  )
}

const UploadForm = ({ visible, setShowForm }) => {
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
    console.table('RESPONSE: ', savedCloth)
  }

  const takeImage = e => {
    // console.log('INPUT CHECK', e.target.files[0])
    setImage(e.target.files[0])
    setIsFileSelected(true)
  }

  const closeForm = () => {
    setShowForm(false)
  }

  return (
    <Box hide={visible}>
      <span className='close' onClick={closeForm}>
        {icons.close}
      </span>
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
  const [showForm, setShowForm] = useState(false)

  const availableCategories = [
    'Sweatshirts',
    'Polos',
    'Shorts',
    'Joggers',
    'T-Shirts'
  ]
  // loop through categories and run a query based on the index value
  // output the section title as index value and section content as index value specific clothing

  useEffect(() => {
    const loadClothes = async () => {
      try {
        console.log('Clothes are being loaded')
        const clothUrl = 'http://localhost:6500/api/clothing'
        // 'https://afternoon-chamber-08446.herokuapp.com/api/clothing'
        const { data } = await fetchData(clothUrl)
        setClothing(data)
        console.log('DATA:::HOME', data)
        console.log('Clothes: ', clothing)
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
    console.log('RESULT: ', res)
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
          <UploadForm visible={showForm} setShowForm={setShowForm} />
          <Button className='upload' onClick={() => setShowForm(true)}>
            <span>Add Cloth</span>
            {icons.add}
          </Button>
          <ClothingArea toggleStock={toggleStock} clothing={clothing} />
        </div>
      )}
    </PageWrap>
  )
}

export default Clothes
