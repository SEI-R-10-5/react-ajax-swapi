import ApiClient from './ApiClient'

export const __GetStarships = async() => {
    try {
        const response = await ApiClient.get('/starships')
        return response.data
   } catch (error) {
       throw error
   }
}