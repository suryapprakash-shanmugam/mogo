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

export const subCategoryListAPI = () => {
    return axios.get(`${config.baseUrlApi}/childcategory`,
        commonHeader
    )
}

export const subCategoryCreate = (payload) => {
    return axios.post(`${config.baseUrlApi}/childcategory/create`,
        payload,
        commonHeader
    )
}