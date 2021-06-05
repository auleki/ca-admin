import axios from 'axios'

export const attachToken = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

export const fetchData = async url => {
  try {
    return await axios.get(url)
  } catch (error) {
    console.error(error)
  }
}

export const postData = async (url, data) => {
  try {
    // make sure admin has the right token to perform this action
    return await axios.post(url, data)
  } catch (error) {
    throw Error('error while posting', error)
  }
}

export const formatToComma = price =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const fetchAdmin = async (adminInfo, url) => {
  try {
    const fetchedAdmin = await axios.post(url, adminInfo)
    return fetchedAdmin
  } catch (error) {
    throw Error(error)
  }
}

export const generateClothId = () => {
  const random = Math.round(Math.random() * 100000)
  return `00X${random}CA`
}

// export const saveNewCloth = () => {

// }
