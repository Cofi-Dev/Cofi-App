import axios from 'axios'

export default axios.create({
    baseURL: 'localhost:8888',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
