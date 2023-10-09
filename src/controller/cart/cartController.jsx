import { CircleCheck, X } from "tabler-icons-react";
import { createCartAPI } from "../../config/quries/cart/CartQuries";
import { ThemeIcon } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

export const handleAddtoCartControl = async (payload) => {
    await createCartAPI(payload)
        .then((res) => {
            showNotification({
                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                    <CircleCheck color="green" />
                </ThemeIcon>,
                message: "Product Added to Cart",
            })
        })
        .catch((err) => {
            showNotification({
                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                    <X color="red" />
                </ThemeIcon>,
                message: "User Not Allowed to Add Cart",
            })
        })
}