import axios from "axios"
import config from "../../server/Servers"

const token = sessionStorage.getItem('MogoAdminAccessToken102') ?
    sessionStorage.getItem('MogoAdminAccessToken102') : sessionStorage.getItem('MogoUserAccessToken102')
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

export const categoryCreate = (payload) => {
    return axios.post(`${config.baseUrlApi}/category/addcategory`,
        payload,
        commonHeader
    )
}

export const categoryById = ({ queryKey }) => {
    const [_, id] = queryKey
    return axios.get(`${config.baseUrlApi}/category/getbyid/${id}`,
        commonHeader
    )
}