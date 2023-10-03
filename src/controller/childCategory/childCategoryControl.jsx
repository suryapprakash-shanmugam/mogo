import { CircleCheck, X } from "tabler-icons-react"
import { childCategoryCreate } from "../../config/quries/childCategory/childCategory"
import { showNotification } from "@mantine/notifications"
import { ThemeIcon } from "@mantine/core"

export const createChildCategoryControl = async (
    categoryList,
    selectedCategory,
    categoryValidation,
    setCategoryList,
    setSelectedCategory,
    setCategoryValidation,
    setChildCategoryModalOpen,
    queryClient
) => {
    const {
        childCategory
    } = categoryList
    const { category,
        subCategory } = selectedCategory
    const payload = {
        name: childCategory.trim(),
        category_id: category,
        sub_category_id: subCategory
    }
    if (childCategory) {
        await childCategoryCreate(payload)
            .then((res) => {
                if (res?.data?.data?.result === "Child Name Exists") {
                    showNotification({
                        icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                            <X color="red" />
                        </ThemeIcon>,
                        message: "Child Category Already Exists in Same Category and Sub Category",

                    })
                    setCategoryValidation({ ...categoryValidation, childCategory: 2 })
                }
                else {
                    showNotification({
                        icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                            <CircleCheck color="green" />
                        </ThemeIcon>,
                        message: "Child Category Created Successfully",
                    })
                    setChildCategoryModalOpen(false)
                    setSelectedCategory({ ...selectedCategory, category: '' })
                    setSelectedCategory({ ...selectedCategory, subCategory: '' })
                    setCategoryList({ ...categoryList, childCategory: '' })
                    queryClient.invalidateQueries('childCategoryList')
                }
            })
            .catch((error) => {
                showNotification({
                    icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                        <X color="red" />
                    </ThemeIcon>,
                    message: "Error Creating Child Category",

                })
            })
    }
    else {
        setCategoryValidation({ ...categoryValidation, childCategory: 1 })
    }
}