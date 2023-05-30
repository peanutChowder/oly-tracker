import axios from "axios";
const baseUrl = 'http://localhost:3003/api/exercises'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

export default {
    getAll,
    create
}