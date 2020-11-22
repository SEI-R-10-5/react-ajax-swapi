import ApiClient from './ApiClient'

export const __GetStarships = async () => {
  try {
    const res = await ApiClient.get('/api/starships')
    console.log('Service: ', res.data)
    return res.data
  } catch (error) {
    throw error
  }
}