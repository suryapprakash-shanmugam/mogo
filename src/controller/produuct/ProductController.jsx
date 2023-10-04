import { ThemeIcon } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import axios from "axios";
import { CircleCheck, X } from "tabler-icons-react";

export const handleCreateProduct = async (productSingleImage, multiProductImage, productDetails) => {
    // const images = [productSingleImage, ...multiProductImage]
    const {
        product_name,
        product_description,
        product_short_description,
        product_type,
        actual_price,
        sale_price,
        sale_price_date,
        tax_status,
        tax_type,
        tax_rate,
        weight,
        length,
        width,
        height,
        SKU,
        status,
        initial_quantity,
        allow_backorders,
        low_stock_threshold,
        stock_status,
        product_status,
        product_image,
        product_gallery_image,
        product_category,
        product_subcategory,
        admin_id,
    } = productDetails

    console.log(status);

    // const formData = new FormData()
    // formData.append(`name`, product_name)
    // formData.append(`description`, product_description)
    // formData.append(`short_description`, product_short_description)
    // formData.append(`product_type`, product_type)
    // formData.append(`actual_price`, actual_price)
    // formData.append(`sale_price`, sale_price)
    // formData.append(`tax_status`, tax_status)
    // formData.append(`tax_type`, tax_type)
    // formData.append(`tax_rate`, tax_rate)
    // formData.append(`SKU`, SKU)
    // formData.append(`actual_price`, actual_price)
    // images.forEach((image) => {
    //     formData.append(`file`, image);
    // });

    // axios.post(' http://localhost:1002/products/create',
    //     formData,
    //     {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         }
    //     },)
    //     .then(res => {
    //         showNotification({
    //             icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
    //                 <CircleCheck color="green" />
    //             </ThemeIcon>,
    //             message: "Product Saved in draft",

    //         })
    //     })
    //     .catch(er => {
    //         showNotification({
    //             icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
    //                 <X color="red" />
    //             </ThemeIcon>,
    //             message: "Product Saved in draft",

    //         })
    //     })
}