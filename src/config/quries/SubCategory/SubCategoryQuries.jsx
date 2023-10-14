import axios from "axios"
import config from "../../server/Servers"

// Access Token Commom Header
const token = sessionStorage.getItem('MogoAdminAccessToken102') ?
    sessionStorage.getItem('MogoAdminAccessToken102') : sessionStorage.getItem('MogoUserAccessToken102')
const commonHeader = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
}

export const subCategoryListAPI = () => {
    return axios.get(`${config.baseUrlApi}/subcategory`,
        commonHeader
    )
}

export const subCategoryCreate = (payload) => {
    return axios.post(`${config.baseUrlApi}/subcategory/create`,
        payload,
        commonHeader
    )
}

export const subCategoryListByCategoryID = ({ queryKey }) => {
    const [_, id] = queryKey
    return axios.get(`${config.baseUrlApi}/subcategory/findbycategory/${id}`,
    )
}
export const subCategorById = ({ queryKey }) => {
    const [_, id] = queryKey
    return axios.get(`${config.baseUrlApi}/subcategory/getById/${id}`,
        commonHeader
    )
}