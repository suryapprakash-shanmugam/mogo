import axios from "axios"
import config from "../../server/Servers"

const token = sessionStorage.getItem('MogoUserAccessToken102')
const commonHeader = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
}

export const listAddressByUserID = ({ queryKey }) => {
    const [_, id] = queryKey
    return axios.get(`${config.baseUrlApi}/address/useraddress/${id}`,
        commonHeader
    )
}

export const CreateUserAddress = (payload) => {
    return axios.post(`${config.baseUrlApi}/address/create`,
        payload,
        commonHeader
    )
}