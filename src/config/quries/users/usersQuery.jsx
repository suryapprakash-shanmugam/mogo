import axios from "axios"
import config from "../../server/Servers"

// Access Token Commom Header
const token = sessionStorage.getItem('MogoUserAccessToken102')
const commonHeader = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
}

export const userRegisterAPI = (payload) => {
    return axios.post(`${config.baseUrlApi}/users/userregister`,
        payload
    )
}

export const findUserByid = ({ queryKey }) => {
    const [_, id] = queryKey
    return axios.get(`${config.baseUrlApi}/users/${id}`)
}

export const userLoginAPI = (payload) => {
    return axios.post(`${config.baseUrlApi}/users/userlogin`,
        payload
    )
}