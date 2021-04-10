import axios from 'axios'

export const fetchData = async url => {
  try {
    return await axios.get(url)
  } catch (error) {
    console.error(error, 'error in operations')
  }
}

export const formatToComma = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
