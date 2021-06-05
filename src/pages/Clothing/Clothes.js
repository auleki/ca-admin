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
  SelectOptions,
  InputGroup,
  StyleToast,
  StyledPanel
} from '../../components/StyledComponents'
import { v4 as uuidv4 } from 'uuid'
// import {
//   Image,
//   Video,
//   Transformation,
//   CloudinaryContext
// } from 'cloudinary-react'
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
import { generateClothId } from '../../services/operations'

const Toast = msg => {
  return (
    <StyleToast>
      <p>MSG {msg}</p>
    </StyleToast>
  )
}

const ClothCard = ({ cloth }) => {
  // const [updatedPrice, setUpdatedPrice] = useState(0)
  const [editPrice, setEditPrice] = useState(false)
  const [newPrice, setNewPrice] = useState('')
  const [name, setName] = useState('')
  const [stocked, setStocked] = useState(false)
  const [price, setPrice] = useState(0)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [productId, setProductId] = useState('')
  const [mainId, setMainId] = useState('')
  const [toastMsg, setToastMessage] = useState('')

  useEffect(() => {
    setName(cloth.name)
    setStocked(cloth.inStock)
    setPrice(cloth.price)
    setProductId(cloth.productId)
    setMainId(cloth._id)
  }, [cloth._id, cloth.inStock, cloth.name, cloth.price, cloth.productId])

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/api/cloth`

  const togglePriceEdit = () => setEditPrice(!editPrice)

  const takeNewPrice = e => setNewPrice(e.target.value)

  async function toggleStock (id, isInStock) {
    try {
      const idTrim = id.replace(/\s+/g, '')
      console.log('ID at toggle:=>', idTrim)
      const uri = `${baseUrl}/${idTrim}`
      console.log('uri at toggle:=>', uri)
      const response = await axios.patch(uri, { inStock: !isInStock })
      if (response.status === 200) {
        setStocked(response.data.inStock)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const savePrice = async (e, id) => {
    try {
      e.preventDefault()
      if (!newPrice) {
        setError(true)
        setErrorMsg('The new price needs some value')
      }
      const idTrim = id.replace(/\s+/g, '')
      const uri = `${baseUrl}/${idTrim}`
      const toNumber = Number(newPrice)
      const result = await axios.patch(uri, { price: toNumber })
      setNewPrice('')
      if (result.status === 200) {
        setError(false)
        setPrice(result.data.price)
      } else {
        setError(true)
        setErrorMsg('Price could not be saved. Try again')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const cancelEditPrice = () => {
    setError(false)
    setErrorMsg('')
    setEditPrice(false)
  }

  return (
    <StyleClothCard className='cloth'>
      {toastMsg && <Toast msg='sup people' />}
      <div className='image'>
        <img src={cloth.imageUrl} alt='' />
      </div>
      <p className='name'>{name}</p>
      <p className='price'>₦{formatToComma(price)}</p>
      {/* <p className='price'>₦{price}</p> */}
      <div className='cardSwitch'>
        <span>FINISHED</span>
        <FormControlLabel
          control={
            <IOS_SWITCH
              checked={stocked}
              onChange={() => toggleStock(cloth._id, stocked)}
            />
          }
        />
        <span>IN STOCK</span>
      </div>
      <div className='priceSection'>
        {editPrice ? (
          <form onSubmit={e => savePrice(e, cloth._id)}>
            <InputGroup>
              {/* <FormStyle> */}
              <input
                type='number'
                required
                placeholder='New Amount'
                value={newPrice}
                onChange={takeNewPrice}
              />
              <IconButton noRotate>
                <span>{icons.tick}</span>
              </IconButton>
              <IconButton
                type='button'
                outlined
                noRotate
                onClick={cancelEditPrice}
              >
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

const ClothingArea = ({ clothing }) => {
  return (
    <ClothingCard className='container' key={clothing.name}>
      {/* <BasicTable COLUMNS={columns} DATA={clothes} /> */}
      <div className='clothing'>
        {clothing.map((cloth, i) => (
          <div key={cloth.name}>
            <ClothCard cloth={cloth} />
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
  const [image, setImage] = useState('')

  async function uploadCloth (e) {
    e.preventDefault()
    const uploadForm = new FormData()
    // if (isFileSelected && image.type !== 'image/jpeg') {
    //   // setError()
    // }
    uploadForm.append('file', image)
    const localUrl = 'http://localhost:6500/api/cloth/upload'
    const newCloth = {
      name,
      price,
      category,
      inStock,
      imageFile: image,
      productId: uuidv4()
    }
    uploadForm.append('clothDetails', newCloth)
    console.log('NEW UPLOAD!', uploadForm)
    const savedCloth = await axios.post(localUrl, uploadForm)
    // console.log('PAYLOAD:', newCloth)
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
        {/* {category ? <p>Selected category: {category}</p> : null}
        {isFileSelected ? (
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

const ControlPanel = () => {
  const [toView, setToView] = useState('all')
  const toViewSet = e => setToView(e.target.value)

  return (
    <StyledPanel>
      <div className='flex'>
        <p>Choose what merch is displayed </p>
        <SelectOptions onChange={toViewSet}>
          <option value='all'>Select one to view only</option>
          <option value='all'>All</option>
          <option value='shorts'>Shorts</option>
          <option value='joggers'>Joggers</option>
          <option value='t-shirts'>T-Shirts</option>
          <option value='polos'>Polos</option>
        </SelectOptions>
      </div>
    </StyledPanel>
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
        // console.log('Clothes are being loaded')
        const clothUrl =
          // 'http://localhost:6500/api/clothing'
          'https://afternoon-chamber-08446.herokuapp.com/api/clothing'
        const { data } = await fetchData(clothUrl)
        setClothing(data)
        // console.log('DATA:::HOME', data)
        // console.log('Clothes: ', clothing)
      } catch (error) {
        // setPageError(true)
        console.error(error)
      }
    }
    loadClothes()
  }, [])

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
          {/* Add panel with additional actions when needed */}
          {/* <ControlPanel /> */}
          <UploadForm visible={showForm} setShowForm={setShowForm} />
          <Button className='upload' onClick={() => setShowForm(true)}>
            <span>Add Cloth</span>
            {icons.add}
          </Button>
          <ClothingArea clothing={clothing} />
        </div>
      )}
    </PageWrap>
  )
}

export default Clothes
