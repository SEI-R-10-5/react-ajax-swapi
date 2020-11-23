import ApiClient from './ApiClient'

export const GetStarShips = async () => {
    try {
        const res = await ApiClient.get('/api/starships/')
        return res.data
    } catch(error) {
        throw error 
    }
}