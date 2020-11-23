const { default: Axios } = require('axios')

const ApiClient = Axios.create({ baseURL: 'http://localhost:3007' })

export default ApiClient
