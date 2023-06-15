import axios from "axios";
const baseUrl = 'http://localhost:3003/api/exercises'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const update = (id, updatedExercise) => {
    console.log("Updating", id)
    return axios.put(`${baseUrl}/${id}`, updatedExercise)
}

export default {
    getAll,
    create,
    update
}