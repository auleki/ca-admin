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
    throw Error('error in fetching data', error)
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
