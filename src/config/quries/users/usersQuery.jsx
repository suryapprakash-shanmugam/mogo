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
    return axios.get(`${config.baseUrlApi}/users/${id}`,
        commonHeader
    )
}

export const userLoginAPI = (payload) => {
    return axios.post(`${config.baseUrlApi}/users/userlogin`,
        payload
    )
}

export const updateUserAPI = (payload) => {
    const { id, body } = payload
    return axios.post(`${config.baseUrlApi}/users/updateuser/${id}`,
        body,
        commonHeader
    )
}


export const changePassword = (payload) => {
    const { id, body } = payload
    const data = {
        password: body.password,
        new_password: body.new_password
    }
    return axios.post(`${config.baseUrlApi}/users/changepassword/${id}`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        }
    )
}