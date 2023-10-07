import axios from "axios"
import config from "../../server/Servers"

const token = sessionStorage.getItem('MogoAdminAccessToken102')
const commonHeader = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
}

export const childCategoryListAPI = () => {
    return axios.get(`${config.baseUrlApi}/childcategory`,
        commonHeader
    )
}

export const childCategoryCreate = (payload) => {
    return axios.post(`${config.baseUrlApi}/childcategory/create`,
        payload,
        commonHeader
    )
}

export const listChildCategoryBySubCategory = ({ queryKey }) => {
    const [_, id] = queryKey
    return axios.get(`${config.baseUrlApi}/childcategory/listbySubCategory/${id}`,
        commonHeader
    )
}