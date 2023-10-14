//import react packages
import React, { useEffect, useState } from 'react'

//import mantine packages
import { Accordion, ActionIcon, Button, Card, Container, Flex, Input, Menu, Modal, Paper, Select, Text } from '@mantine/core'

//import Location css
import './Location.css'

//import icons
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import { DotsVertical, Pencil, Plus, Trash } from 'tabler-icons-react'

// React Query
import { useQuery, useQueryClient } from 'react-query'
import { categoryListAPI } from '../../../config/quries/Category/CategoryQueries'

// Category Controller
import { createCatrgoryControl } from '../../../controller/category/categoryController'
import { handleSubCategoryControl } from '../../../controller/subCategory/subCategoryControl'
import { subCategoryListAPI, subCategoryListByCategoryID } from '../../../config/quries/SubCategory/SubCategoryQuries'
import { createChildCategoryControl } from '../../../controller/childCategory/childCategoryControl'
import { listChildCategoryBySubCategory } from '../../../config/quries/childCategory/childCategory'

const Location = () => {
    const queryClient = useQueryClient()

    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [subCategoryModalOpen, setSubCategoryModalOpen] = useState(false)
    const [childCategoryModalOpen, setChildCategoryModalOpen] = useState(false)



    // Array
    const categoryListArray = [
        {
            title: 'Countries',
            handle: () => setCategoryModalOpen(true)
        },
        {
            title: 'States',
            handle: () => setSubCategoryModalOpen(true)
        },
        {
            title: 'Cities',
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
        category: [
            {
                _id: '12345',
                name: 'Nothing Found'
            }
        ],
        subCategory: [
            {
                _id: '12345',
                name: 'Nothing Found'
            }
        ],
        childCategory: [
            {
                _id: '12345',
                name: 'Nothing Found'
            }
        ]
    })
    const [selectedCategory, setSelectedCategory] = useState({
        category: null,
        subCategory: null,
        childCategory: null
    })

    // Query Fetching
    useQuery('categoryList',
        categoryListAPI,
        {
            refetchOnWindowFocus: false,
            onSuccess: (res) => {
                setCategoryDetails({ ...categoryDetails, category: res.data.data.result })
            }
        }
    )
    useQuery(
        [
            'subCategoryList',
            selectedCategory.category
        ],
        subCategoryListByCategoryID,
        {
            refetchOnWindowFocus: false,
            enabled: !!selectedCategory.category,
            onSuccess: (res) => {
                setCategoryDetails({ ...categoryDetails, subCategory: res.data.data.result })
            }
        }
    )

    useQuery(
        [
            'childCategoryList',
            selectedCategory.subCategory
        ],
        listChildCategoryBySubCategory,
        {
            refetchOnWindowFocus: false,
            enabled: !!selectedCategory.subCategory,
            onSuccess: (res) => {
                setCategoryDetails({ ...categoryDetails, childCategory: res.data.data.result })
            },
        }
    )

    // Handle Create New Category
    const handleCreateCategory = () => {
        createCatrgoryControl(
            categoryList,
            setCategoryList,
            categoryValidation,
            setCategoryValidation,
            setCategoryModalOpen,
            queryClient)
    }
    const handleSubCategory = () => {
        handleSubCategoryControl(
            categoryList,
            selectedCategory,
            categoryValidation,
            setCategoryList,
            setSelectedCategory,
            setCategoryValidation,
            setSubCategoryModalOpen,
            queryClient)
    }
    const handleCreateChildCategory = () => {
        createChildCategoryControl(
            categoryList,
            selectedCategory,
            categoryValidation,
            setCategoryList,
            setSelectedCategory,
            setCategoryValidation,
            setChildCategoryModalOpen,
            queryClient
        )
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

    const cateGoryAccordion =
        Array.isArray(categoryDetails.category)
            ? categoryDetails.category.map((cateValue, cindex) => (
                <Accordion.Item key={cindex} value={cateValue.name}>
                    <Accordion.Control
                        onClick={() => setSelectedCategory({ ...selectedCategory, category: cateValue._id })}
                        className='category-accordion-heading'>
                        <div className='category-accordion-heading-left'>
                            <p>{cateValue.name}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }} className='category-accordion-heading-right'>
                            <button onClick={(e) => { e.stopPropagation(); setEditModal({ ...editModal, category: true }); }}>
                                <Flex align={'center'} gap={'0.4rem'}>
                                    <Pencil size={'1rem'} />
                                    Edit
                                </Flex>
                            </button>
                            {/* <button onClick={handleDeleteCategory}>
                                <Flex align={'center'} gap={'0.4rem'}>
                                    <Trash size={'1rem'} />
                                    Delete
                                </Flex>
                            </button> */}

                        </div>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Accordion variant="contained" radius="xs" chevronPosition="left">
                            {
                                Array.isArray(categoryDetails.subCategory) ?
                                    categoryDetails.subCategory?.map((subValue, sIndex) => (
                                        <>
                                            <Accordion.Item value={subValue.name}>
                                                <Accordion.Control
                                                    onClick={() => setSelectedCategory({ ...selectedCategory, subCategory: subValue._id })}
                                                    key={sIndex} className='subcategory-accordion-heading'>
                                                    <div className='subcategory-accordion-heading-left'>
                                                        <p>
                                                            {
                                                                subValue.name
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className='subcategory-accordion-heading-right'>
                                                        <button onClick={(e) => {
                                                            e.stopPropagation();
                                                            setEditModal({
                                                                ...editModal,
                                                                subCategory: true
                                                            })
                                                        }}>Edit</button>
                                                    </div>
                                                </Accordion.Control>
                                            </Accordion.Item>
                                        </>
                                    )) : "Nothing Found"
                            }
                        </Accordion>
                    </Accordion.Panel>
                </Accordion.Item>
            ))
            : 'No Categories Found to Display'


    // State for Edit Modal 
    const [editModal, setEditModal] = useState({
        category: false,
        subCategory: false,
        childCategory: false
    })
    const [editCategoriesValue, setEditCategoriesValue] = useState({
        category: {
            _id: '',
            name: ''
        },
        subCategory: '',
        childCategory: ''
    })


    return (
        <div>
            <Modal
                zIndex={121212}
                size="md"
                opened={editModal.category ? true : editModal.subCategory ? true : editModal.childCategory ? true : false}
                onClose={() => setEditModal(
                    {
                        ...editModal,
                        category: false,
                        subCategory: false,
                        childCategory: false
                    })}
                title=""
                centered
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='preheader-register-modal'
            >
                <div className="preheader-register-modal-header">
                    {
                        editModal.category ?
                            <h1>Edit Category</h1> :
                            editModal.subCategory ?
                                <h1>Edit Sub Category</h1> :
                                editModal.childCategory ?
                                    <h1>Edit Child Category</h1> : ''
                    }
                </div>
                <div className="preheader-register-modal-body">
                    <div className="preheader-register-modal-body-content">
                        {
                            editModal.category ?
                                <Input.Wrapper
                                    error={`${categoryValidation.catgeory === 1 ? 'Please Enter Category' :
                                        categoryValidation.catgeory === 2 ? 'Category Name Already Exists' :
                                            ''}`}
                                    label="Category">
                                    <Input placeholder="Category"
                                        value={editCategoriesValue?.category?.name}
                                        onChange={(e) =>
                                            setEditCategoriesValue(
                                                {
                                                    ...editCategoriesValue,
                                                    catgeory: {
                                                        ...editCategoriesValue.category,
                                                        name: e.target.value
                                                    }
                                                }
                                            )}
                                    />
                                </Input.Wrapper> :
                                editModal.subCategory ?
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
                                    :
                                    editModal.childCategory ?
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
                                        : ''
                        }
                        <button
                            onClick={handleCreateCategory}
                        >Add Category</button>
                    </div>
                </div>
            </Modal>
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
                            <Accordion variant="separated" radius="xs" chevronPosition="left">
                                {cateGoryAccordion}
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
                                    setSelectedCategory({ ...selectedCategory, category: e })}
                            />
                            <Input.Wrapper
                                error={`${categoryValidation.subCategory === 1 ? 'Please Fill Input' :
                                    categoryValidation.subCategory === 2 ? 'Subcategory Name Already Exits' :
                                        ''
                                    }`}
                                label="Sub Category">
                                <Input placeholder="Sub Category"
                                    disabled={!selectedCategory.category}
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
                                error={`${categoryValidation.catgeory === 1 ? 'Please Select Category' : ''}`}
                                label="Category"
                                data={
                                    Array.isArray(categoryDetails?.category) ?
                                        categoryDetails?.category?.map(data => ({
                                            value: data._id,
                                            label: data.name
                                        })) :
                                        {
                                            value: 'Nothing Found',
                                            label: 'Nothing Found'
                                        }
                                }
                                rightSection={<img src={arrowdown} alt="arrowdown" width='10px' />}
                                placeholder="Select Category"
                                nothingFound="Nothing found"
                                searchable
                                onChange={(e) =>
                                    setSelectedCategory({ ...selectedCategory, category: e })}
                            />
                            <>
                                <Select
                                    disabled={
                                        !selectedCategory.category
                                    }
                                    label="Sub Category"
                                    data={
                                        Array.isArray(categoryDetails?.subCategory) ?
                                            categoryDetails?.subCategory?.map(data => ({
                                                value: data._id,
                                                label: data.name
                                            })) : ''
                                    }
                                    rightSection={<img src={arrowdown} alt="arrowdown" width='10px' />}
                                    placeholder="Select Sub Category"
                                    nothingFound="Nothing found"
                                    searchable
                                    onChange={(e) =>
                                        setSelectedCategory({ ...selectedCategory, subCategory: e })}
                                />
                                <Input.Wrapper
                                    error={`${categoryValidation.childCategory === 1 ? 'Please Enter Value' :
                                        categoryValidation.childCategory === 2 ? 'Child Category Already Exists in Same Category and Sub Category' :
                                            ''
                                        }`}
                                    label="Child Category">
                                    <Input
                                        disabled={
                                            !selectedCategory.subCategory
                                        }
                                        value={categoryList.childCategory}
                                        onChange={(e) => setCategoryList({ ...categoryList, childCategory: e.target.value })}
                                        placeholder="Child Category" />
                                </Input.Wrapper>
                                <Button
                                    onClick={handleCreateChildCategory}
                                    disabled={!categoryList.childCategory}
                                >Add Child Category</Button>
                            </>

                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Location