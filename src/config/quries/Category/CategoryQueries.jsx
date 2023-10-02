import axios from "axios"
import config from "../../server/Servers"

// Access Token Commom Header
const token = sessionStorage.getItem('MogoAdminAccessToken102')
const commonHeader = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
}

export const categoryListAPI = () => {
    return axios.get(`${config.baseUrlApi}/category`,
        commonHeader
    )
}