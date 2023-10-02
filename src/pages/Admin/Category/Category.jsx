//import react packages
import React, { useEffect, useState } from 'react'

//import mantine packages
import { Accordion, ActionIcon, Button, Card, Input, Modal, Select } from '@mantine/core'

//import Category css
import './Category.css'

//import icons
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import { Plus } from 'tabler-icons-react'

// React Query
import { useQuery } from 'react-query'
import { categoryListAPI } from '../../../config/quries/Category/CategoryQueries'

// Category Controller
import { createCatrgoryControl } from '../../../controller/category/categoryController'
import { handleSubCategoryControl } from '../../../controller/subCategory/subCategoryControl'

const Category = () => {

    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [subCategoryModalOpen, setSubCategoryModalOpen] = useState(false)
    const [childCategoryModalOpen, setChildCategoryModalOpen] = useState(false)

    // const [categoryData, setCategoryData] = useState([
    //     { value: 'Dress', label: 'Dress' },
    //     { value: 'Cloth', label: 'Cloth' },
    // ]);
    // const [subCategoryData, setSubCategoryData] = useState([
    //     { value: 'Dress', label: 'Dress' },
    //     { value: 'Cloth', label: 'Cloth' },
    // ]);


    // Array
    const categoryListArray = [
        {
            title: 'Category',
            handle: () => setCategoryModalOpen(true)
        },
        {
            title: 'Sub Category',
            handle: () => setSubCategoryModalOpen(true)
        },
        {
            title: 'Child Category',
            handle: () => setChildCategoryModalOpen(true)
        },
    ]

    // CategoryState
    const [categoryList, setCategoryList] = useState({
        catgeory: '',
        subCategory: '',
        childCategory: ''
    })
    const [categoryValidation, setCategoryValidation] = useState({
        catgeory: 0,
        subCategory: 0,
        childCategory: 0
    })
    const [categoryDetails, setCategoryDetails] = useState({
        category: '',
        subCategory: '',
        childCategory: ''
    })
    const [selecgtedCategory, setSelectedCategory] = useState({
        category: '',
        subCategory: ''
    })

    // Query Fetching
    useQuery('categoryList',
        categoryListAPI,
        {
            onSuccess: (res) => {
                setCategoryDetails({ ...categoryDetails, category: res.data.data.result })
            }
        }
    )

    // Handle Create New Category
    const handleCreateCategory = () => {
        createCatrgoryControl(categoryList, setCategoryList, categoryValidation, setCategoryValidation, setCategoryModalOpen)
    }

    const handleSubCategory = () => {
        handleSubCategoryControl(
            categoryList,
            selecgtedCategory,
            categoryValidation,
            setCategoryList,
            setSelectedCategory,
            setCategoryValidation,
            setSubCategoryModalOpen)
    }

    useEffect(() => {
        if (categoryList.catgeory) {
            setCategoryValidation({ ...categoryValidation, catgeory: 0 })
        }
        if (categoryList.subCategory) {
            setCategoryValidation({ ...categoryValidation, subCategory: 0 })
        }
        if (categoryList.childCategory) {
            setCategoryValidation({ ...categoryValidation, childCategory: 0 })
        }
    }, [categoryList])

    return (
        <div>
            <div className="category-div">
                <Card className='category-div-card'>
                    <div className="category-div-card-head">
                        <h3>Category</h3>
                        <div className="categoey-div-card-head-button">
                            {
                                categoryListArray.map((value, index) => (
                                    <button
                                        key={index}
                                        onClick={value.handle}
                                    >
                                        <Plus size={'1rem'} /> {value.title}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </Card>
                <div className="category-div-accordition-display">
                    <Card className='category-div-accordition-display-card'>
                        <div className="category-div-accordition-display-card-display">
                            <Accordion variant="contained" radius="xs" chevronPosition="left">
                                <Accordion.Item value="category">

                                    {/* <Accordion.Control className='category-accordion-heading'>
                                        <div className='category-accordion-heading-left'>
                                            <p>Category</p>
                                        </div>
                                        <div className='category-accordion-heading-right'>
                                            <button onClick={(e) => { e.stopPropagation(); setCategoryModalOpen(true); }}>Edit</button>
                                        </div>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Accordion variant="contained" radius="xs" chevronPosition="left">
                                            <Accordion.Item value="subcategory">
                                                <Accordion.Control className='subcategory-accordion-heading'>
                                                    <div className='subcategory-accordion-heading-left'>
                                                        <p>Sub Category</p>
                                                    </div>
                                                    <div className='subcategory-accordion-heading-right'>
                                                        <button onClick={(e) => { e.stopPropagation(); setSubCategoryModalOpen(true); }}>Edit</button>
                                                    </div>
                                                </Accordion.Control>
                                                <Accordion.Panel>
                                                    <Card className='child-categoey-card'>
                                                        <div className='childcategory-accordion-heading-left'>
                                                            <p>Child Category</p>
                                                        </div>
                                                        <div className='childcategory-accordion-heading-right'>
                                                            <button onClick={(e) => { e.stopPropagation(); setChildCategoryModalOpen(true); }}>Edit</button>
                                                        </div>
                                                    </Card>
                                                    <Card className='child-categoey-card'>
                                                        <div className='childcategory-accordion-heading-left'>
                                                            <p>Child Category</p>
                                                        </div>
                                                        <div className='childcategory-accordion-heading-right'>
                                                            <button onClick={(e) => { e.stopPropagation(); setChildCategoryModalOpen(true); }}>Edit</button>
                                                        </div>
                                                    </Card>
                                                </Accordion.Panel>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Accordion.Panel> */}
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Card>
                </div>
                <Modal
                    zIndex={121212}
                    size="md"
                    opened={categoryModalOpen}
                    onClose={() => setCategoryModalOpen(false)}
                    title=""
                    centered
                    transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                    className='preheader-register-modal'
                >
                    <div className="preheader-register-modal-header">
                        <h1>Category</h1>
                    </div>
                    <div className="preheader-register-modal-body">
                        <div className="preheader-register-modal-body-content">
                            <Input.Wrapper
                                error={`${categoryValidation.catgeory === 1 ? 'Please Enter Category' :
                                    categoryValidation.catgeory === 2 ? 'Category Name Already Exists' :
                                        ''}`}
                                label="Category">
                                <Input placeholder="Category"
                                    value={categoryList.catgeory}
                                    onChange={(e) => setCategoryList({ ...categoryList, catgeory: e.target.value })}
                                />
                            </Input.Wrapper>
                            <button
                                onClick={handleCreateCategory}
                            >Add Category</button>
                        </div>
                    </div>
                </Modal>
                <Modal
                    zIndex={121212}
                    size="md"
                    opened={subCategoryModalOpen}
                    onClose={() => setSubCategoryModalOpen(false)}
                    title=""
                    centered
                    transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                    className='preheader-register-modal'
                >
                    <div className="preheader-register-modal-header">
                        <h1>Sub Category</h1>
                    </div>
                    <div className="preheader-register-modal-body">
                        <div className="preheader-register-modal-body-content">
                            <Select
                                error={`${categoryValidation.catgeory === 1 ? 'Please Select Category' : ''}`}
                                label="Category"
                                data={
                                    Array.isArray(categoryDetails?.category) ?
                                        categoryDetails?.category?.map(data => ({
                                            value: data._id,
                                            label: data.name
                                        })) :
                                        ''
                                }
                                rightSection={<img src={arrowdown} alt="arrowdown" width='10px' />}
                                placeholder="Select Category"
                                nothingFound="Nothing found"
                                searchable
                                onChange={(e) =>
                                    setSelectedCategory({ ...selecgtedCategory, category: e })}
                            />
                            <Input.Wrapper
                                error={`${categoryValidation.subCategory === 1 ? 'Please Fill Input' :
                                    categoryValidation.subCategory === 2 ? 'Subcategory Name Already Exits' :
                                        ''
                                    }`}
                                label="Sub Category">
                                <Input placeholder="Sub Category"
                                    disabled={!selecgtedCategory.category}
                                    value={categoryList.subCategory}
                                    onChange={(e) => setCategoryList({ ...categoryList, subCategory: e.target.value })}
                                />
                            </Input.Wrapper>
                            <Button
                                disabled={!categoryList.subCategory}
                                onClick={handleSubCategory}
                            >Add Sub Category</Button>
                        </div>
                    </div>
                </Modal>
                <Modal
                    zIndex={121212}
                    size="md"
                    opened={childCategoryModalOpen}
                    onClose={() => setChildCategoryModalOpen(false)}
                    title=""
                    centered
                    transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                    className='preheader-register-modal'
                >
                    <div className="preheader-register-modal-header">
                        <h1>Child Category</h1>
                    </div>
                    <div className="preheader-register-modal-body">
                        <div className="preheader-register-modal-body-content">
                            <Select
                                label="Category"
                                // data={categoryData}
                                rightSection={<img src={arrowdown} alt="arrowdown" width='10px' />}
                                placeholder="Select Category"
                                nothingFound="Nothing found"
                                searchable
                            />
                            <Select
                                label="Sub Category"
                                // data={subCategoryData}
                                rightSection={<img src={arrowdown} alt="arrowdown" width='10px' />}
                                placeholder="Select Sub Category"
                                nothingFound="Nothing found"
                                searchable
                            />

                            <Input.Wrapper label="Child Category">
                                <Input
                                    value={categoryList.childCategory}
                                    onChange={(e) => setCategoryList({ ...categoryList, childCategory: e.target.value })}
                                    placeholder="Child Category" />
                            </Input.Wrapper>
                            <button>Add Child Category</button>
                        </div>
                    </div>
                </Modal>
            </div >
        </div >
    )
}

export default Category