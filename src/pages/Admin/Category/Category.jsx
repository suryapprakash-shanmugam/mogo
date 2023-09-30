//import react packages
import React, { useState } from 'react'

//import mantine packages
import { Accordion, ActionIcon, Card, Input, Modal, Select } from '@mantine/core'

//import Category css
import './Category.css'

//import icons
import arrowdown from '../../../assets/preheader/arrow-down.webp'

const Category = () => {

    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [subCategoryModalOpen, setSubCategoryModalOpen] = useState(false)
    const [childCategoryModalOpen, setChildCategoryModalOpen] = useState(false)

    const [categoryData, setCategoryData] = useState([
        { value: 'Dress', label: 'Dress' },
        { value: 'Cloth', label: 'Cloth' },
    ]);
    const [subCategoryData, setSubCategoryData] = useState([
        { value: 'Dress', label: 'Dress' },
        { value: 'Cloth', label: 'Cloth' },
    ]);

    return (
        <div>
            <div className="category-div">
                <Card className='category-div-card'>
                    <div className="category-div-card-head">
                        <h3>Category</h3>
                        <div className="categoey-div-card-head-button">
                            <button onClick={() => { setCategoryModalOpen(true); }}>Category</button>
                            <button onClick={() => { setSubCategoryModalOpen(true); }}>Sub Category</button>
                            <button onClick={() => { setChildCategoryModalOpen(true); }}>Child Category</button>
                        </div>
                    </div>
                </Card>
                <div className="category-div-accordition-display">
                    <Card className='category-div-accordition-display-card'>
                        <div className="category-div-accordition-display-card-display">
                            <Accordion variant="contained" radius="xs" chevronPosition="left">
                                <Accordion.Item value="category">

                                    <Accordion.Control className='category-accordion-heading'>
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
                                    </Accordion.Panel>
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
                            <Input.Wrapper label="Category">
                                <Input placeholder="Category" />
                            </Input.Wrapper>
                            <button>Add Category</button>
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
                                label="Category"
                                data={categoryData}
                                rightSection={<img src={arrowdown} alt="arrowdown" width='10px' />}
                                placeholder="Select Category"
                                nothingFound="Nothing found"
                                searchable
                                creatable
                                getCreateLabel={(query) => `+ Create ${query}`}
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    setCategoryData((current) => [...current, item]);
                                    return item;
                                }}
                            />

                            <Input.Wrapper label="Sub Category">
                                <Input placeholder="Sub Category" />
                            </Input.Wrapper>
                            <button>Add Sub Category</button>
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
                                data={categoryData}
                                rightSection={<img src={arrowdown} alt="arrowdown" width='10px' />}
                                placeholder="Select Category"
                                nothingFound="Nothing found"
                                searchable
                                creatable
                                getCreateLabel={(query) => `+ Create ${query}`}
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    setCategoryData((current) => [...current, item]);
                                    return item;
                                }}
                            />
                            <Select
                                label="Sub Category"
                                data={subCategoryData}
                                rightSection={<img src={arrowdown} alt="arrowdown" width='10px' />}
                                placeholder="Select Sub Category"
                                nothingFound="Nothing found"
                                searchable
                                creatable
                                getCreateLabel={(query) => `+ Create ${query}`}
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    setSubCategoryData((current) => [...current, item]);
                                    return item;
                                }}
                            />

                            <Input.Wrapper label="Child Category">
                                <Input placeholder="Child Category" />
                            </Input.Wrapper>
                            <button>Add Child Category</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Category