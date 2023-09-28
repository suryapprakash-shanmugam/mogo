import axios from "axios"
import config from "../server/Servers"

// Login Admin
export const loginAdmin = (payload) => {
    return axios.post(`${config.baseUrlApi}/admin/adminlogin`,
        payload
    )
}