import axios from "axios"
import config from "../../server/Servers"


const token = sessionStorage.getItem('MogoUserAccessToken102')
const commonHeader = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
}

export const createCartAPI = (payload) => {
    return axios.post(`${config.baseUrlApi}/cart/createCart`,
        payload,
        commonHeader
    )
}


export const getCartByUser = ({ queryKey }) => {
    const [_, id] = queryKey
    return axios.get(`${config.baseUrlApi}/cart/getbyuser/${id}`,
        commonHeader
    )
}