import axios from 'axios'
import config from "../../server/Servers"


const token = sessionStorage.getItem('MogoAdminAccessToken102')
const commonHeader = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
}

// Create Product 
export const createProductAPI = (formData) => {
    return axios.post(`${config.baseUrlApi}/products/create`,
        formData,
        commonHeader
    )
}

// List All Product
export const listAllProduct = () => {
    return axios.get(`${config.baseUrlApi}/products`)
}