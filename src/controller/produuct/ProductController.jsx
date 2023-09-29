import { async } from "q"
import { createProductAPI } from "../../config/quries/Products/ProductQuries"
import axios from "axios";
import config from "../../config/server/Servers"

export const handleCreateProduct = async (productSingleImage) => {
    const formData = new FormData()
    formData.append('file', productSingleImage)
    axios.post(' http://localhost:1002/products/create',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        },)
        .then(res => { })
        .catch(er => console.log(er))
}