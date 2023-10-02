import { showNotification } from "@mantine/notifications"
import { categoryCreate } from "../../config/quries/Category/CategoryQueries"
import { ThemeIcon } from "@mantine/core"
import { CircleCheck, X } from "tabler-icons-react"

export const createCatrgoryControl = async (categoryList, setCategoryList, categoryValidation, setCategoryValidation, setCategoryModalOpen) => {
    const { catgeory } = categoryList
    const payload = {
        name: catgeory.trim()
    }
    if (catgeory.trim()) {
        await categoryCreate(payload)
            .then((res) => {
                if (res?.data?.data?.result === "Category Name Already Exists") {
                    showNotification({
                        icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                            <X color="red" />
                        </ThemeIcon>,
                        message: "Category Alread Exists",

                    })
                    setCategoryValidation({ ...categoryValidation, catgeory: 2 })
                }
                else {
                    showNotification({
                        icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                            <CircleCheck color="green" />
                        </ThemeIcon>,
                        message: "Category Created Successfully",
                    })
                    setCategoryList({ ...categoryList, catgeory: '' })
                    setCategoryModalOpen(false)
                }
            })
            .catch(() => {
                showNotification({
                    icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                        <X color="red" />
                    </ThemeIcon>,
                    message: "Error Creating Category",
                })
            })
    }
    else {
        showNotification({
            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                <X color="red" />
            </ThemeIcon>,
            message: "Category Input Should not be empty",
        })
        setCategoryValidation({ ...categoryValidation, catgeory: 1 })
    }
}