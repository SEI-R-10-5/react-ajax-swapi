import ApiClient from './ApiClient'

export const __GetStarships = async()=>{
    try {
        const res = await ApiClient.get('/starships') 
        return res.data
    } catch (error) {
        throw error
    }
}