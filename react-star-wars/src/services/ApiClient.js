const { default: Axios } = require('axios')

const ApiClient = Axios.create({ baseURL: 'https://swapi.dev' })

export default ApiClient