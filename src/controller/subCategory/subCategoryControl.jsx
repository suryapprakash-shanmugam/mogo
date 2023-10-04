import { showNotification } from "@mantine/notifications"
import { categoryCreate } from "../../config/quries/Category/CategoryQueries"
import { ThemeIcon } from "@mantine/core"
import { CircleCheck, X } from "tabler-icons-react"
import { subCategoryCreate } from "../../config/quries/SubCategory/SubCategoryQuries"

export const handleSubCategoryControl = async (
    categoryList,
    selectedCategory,
    categoryValidation,
    setCategoryList,
    setSelectedCategory,
    setCategoryValidation,
    setSubCategoryModalOpen,
    queryClient) => {
    const { subCategory } = categoryList
    const payload = {
        name: subCategory.trim(),
        category_id: selectedCategory.category
    }
    if (subCategory.trim()) {
        await subCategoryCreate(payload)
            .then((res) => {
                if (res?.data?.data?.result === "Sub Category Already Exists in Same Category") {
                    showNotification({
                        icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                            <X color="red" />
                        </ThemeIcon>,
                        message: "Sub Category Already Exists in Same Category",
                    })
                    setCategoryValidation({ ...categoryValidation, subCategory: 2 })
                }
                else {
                    showNotification({
                        icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                            <CircleCheck color="green" />
                        </ThemeIcon>,
                        message: "subcategory Created Successfully",
                    })

                    setCategoryList({ ...categoryList, subCategory: '' })
                    setSubCategoryModalOpen(false)
                    setSelectedCategory({ ...selectedCategory, category: '' })
                    queryClient.invalidateQueries('subCategoryList')
                }
            })
            .catch(() => {
                showNotification({
                    icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                        <X color="red" />
                    </ThemeIcon>,
                    message: "Error Creating subcategory",
                })
            })

    }
    else {
        setCategoryValidation({ ...categoryValidation, subCategory: 1 })
    }
}