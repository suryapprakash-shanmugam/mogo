import axios from "axios"
import config from "../../server/Servers"

// Login Admin
export const loginAdmin = (payload) => {
    return axios.post(`${config.baseUrlApi}/admin/adminlogin`,
        payload
    )
}

export const getAdminByID = ({ queryKey }) => {
    const [_, id] = queryKey
    return axios.get(`${config.baseUrlApi}/admin/${id}`,
    )
}