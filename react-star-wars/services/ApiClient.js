const Axios = require ('axios')

const ApiClient = Axios.create({baseURL:'https://swapi.dev/api'})

export default ApiClient