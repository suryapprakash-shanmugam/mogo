import { ThemeIcon } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import axios from "axios";
import { CircleCheck, X } from "tabler-icons-react";

export const handleCreateProduct = async (productSingleImage, multiProductImage) => {
    const images = [productSingleImage, ...multiProductImage]
    const formData = new FormData()
    images.forEach((image) => {
        formData.append(`file`, image);
    });

    axios.post(' http://localhost:1002/products/create',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        },)
        .then(res => {
            showNotification({
                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                    <CircleCheck color="green" />
                </ThemeIcon>,
                message: "Product Saved in draft",

            })
        })
        .catch(er => {
            showNotification({
                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                    <X color="red" />
                </ThemeIcon>,
                message: "Product Saved in draft",

            })
        })
}