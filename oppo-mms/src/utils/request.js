import axios from 'axios/dist/axios'; // 引入axios

const request = axios.create({
    baseURL:"/dev-api",
    timeout:5000
})

export default request