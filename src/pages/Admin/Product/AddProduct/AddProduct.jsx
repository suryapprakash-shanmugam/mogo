//import react packages
import React, { useEffect, useRef, useState } from 'react'

//import AddProduct css
import './AddProduct.css'

//import mantine packages
import { Accordion, Card, Checkbox, Group, Indicator, Input, Radio, Select, Space, Tabs, Textarea, ThemeIcon } from '@mantine/core';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

import NumericInput from '../../../../components/Admin/Input/NumericInput';

//import icons
import anglebottom from '../../../../assets/preheader/arrow-down.webp'
import Quantity from '../../../../components/Admin/Quantity/Quantity';
import image_icon from '../../../../assets/admin/product/image_icon.png'
import trash from '../../../../assets/admin/table/dropdown/trash.png'
import { handleCreateProduct } from '../../../../controller/produuct/ProductController';
import { useQuery } from 'react-query';
import { listAllProduct } from '../../../../config/quries/Products/ProductQuries';
import { showNotification } from '@mantine/notifications';
import { CircleCheck, X } from 'tabler-icons-react';

// Convert Image
import convert from 'image-conversion';
import { categoryListAPI } from '../../../../config/quries/Category/CategoryQueries';
import { subCategoryListByCategoryID } from '../../../../config/quries/SubCategory/SubCategoryQuries';


const AddProduct = () => {
    const [multiProductImage, setMultiProductImage] = useState()
    const [productSingleImage, setProductSingleImage] = useState()
    const [taxRate, setTaxRate] = useState('')
    const [editorHtml, setEditorHtml] = useState('');
    const [editorShortHtml, setEditorShortHtml] = useState('');
    const [selectedType, setSelectedType] = useState('simple');
    const [taxStatus, setTaxStatus] = useState('');
    const [taxClass, setTaxClass] = useState('');
    const [variationStockClass, setvariationStockClass] = useState('In stock');
    const [variationshipping, setvariationshipping] = useState('Same as parent');
    const [variationtaxclass, setvariationtaxclass] = useState('Same as parent');
    const [maxSaleValue, setMaxSaleValue] = useState('');
    const [maxSaleValueVariation, setMaxSaleValueVariation] = useState('');
    const [maxLowStockValue, setMaxLowStockValue] = useState('');
    const [maxQuantityValue, setMaxQuantityValue] = useState('');
    const [maxInitialValue, setMaxInitialValue] = useState('');
    const [maxRegularValue, setMaxRegularValue] = useState('');
    const [maxRegularValueVariation, setMaxRegularValueVariation] = useState('');
    const [maxHeightValue, setMaxHeightValue] = useState('');
    const [maxWidthValue, setMaxWidthValue] = useState('');
    const [maxLengthValue, setMaxLengthValue] = useState('');
    const [maxWeightValue, setMaxWeightValue] = useState('');
    const [schedule, setSchedule] = useState(false);
    const [productImage, setProductImage] = useState(false);
    const [permaEdit, setPermaEdit] = useState(false);
    const [productGallery, setProductGallery] = useState(false);
    const [scheduleVariation, setScheduleVariation] = useState(false);
    const [stockManagement, setStockManagement] = useState(false);
    const [soldIndividual, setSoldIndividual] = useState(false);
    const [addCategory, setAddCategory] = useState(false);
    const [productdata, setProductData] = useState([])

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startDateVariation, setStartDateVariation] = useState(null);
    const [endDateVariation, setEndDateVariation] = useState(null);
    const [dataCategory, setDataCategory] = useState([
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
    ]);
    const [dataSubCategory, setDataSubCategory] = useState([
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
    ]);
    const [dataChildCategory, setDataChildCategory] = useState([
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
    ]);

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image'],
            [{ 'align': [] }],
            ['blockquote', 'code-block'],
            ['clean'],
        ],
    };

    const selectTypeArray = [
        { value: 'simple', label: 'Simple Product' },
        { value: 'variable', label: 'Variable Product' },
    ]
    const taxStatusArray = [
        { value: 'taxable', label: 'Taxable' },
        { value: 'none', label: 'None' },
    ]
    const taxClassArray = [
        { value: 'IST', label: 'IST' },
        { value: 'CGST', label: 'CGST' },
        { value: 'SGST', label: 'SGST' },
    ]
    const variationStockStatusArray = [
        { value: 'In stock', label: 'In stock' },
        { value: 'Out of stock', label: 'Out of stock' },
        { value: 'On backorder', label: 'On backorder' },
    ]
    const variationshippingArray = [
        { value: 'Same as parent', label: 'Same as parent' },
    ]
    const variationtaxclassArray = [
        { value: 'Same as parent', label: 'Same as parent' },
        { value: 'Standard', label: 'Standard' },
        { value: 'Reduced rate', label: 'Reduced rate' },
        { value: 'Zero rate', label: 'Zero rate' },
    ]
    const categoryArray = [
        { value: 'Dress', label: 'Dress' },
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Mobiles', label: 'Mobiles' },
        { value: 'Tex', label: 'Tex' },
    ]

    const showProductTagsArray = [
        { tags: 'electronics' },
        { tags: 'mobiles' },
    ]

    const handleTypeChange = (value) => {
        setSelectedType(value);
    };

    const handileProductImage = () => {
        setProductImage((prevproductImage) => !prevproductImage)
    }
    const handilePerma = () => {
        setPermaEdit((prevpermaEdit) => !prevpermaEdit)
    }

    const handileProductGallery = () => {
        setProductGallery((prevproductGallery) => !prevproductGallery)
    }
    const handileAddCategory = () => {
        setAddCategory((prevaddCategory) => !prevaddCategory)
    }

    const handleTaxStatusChange = (value) => {
        setTaxStatus(value);
    };
    const handleTaxClassChange = (value) => {
        setTaxClass(value);
    };
    const handlevariationStockClassChange = (value) => {
        setvariationStockClass(value);
    };
    const handlevariationshippingChange = (value) => {
        setvariationshipping(value);
    };
    const handlevariationtaxclassChange = (value) => {
        setvariationtaxclass(value);
    };

    const handleEditorChange = (html) => {
        setEditorHtml(html);
    };
    const handleEditorShortChange = (html) => {
        setEditorShortHtml(html);
    };
    const handleSchedule = () => {
        setSchedule((prevschedule) => !prevschedule);
        setStartDate(null);
        setEndDate(null);
    };
    const handleScheduleVariation = () => {
        setScheduleVariation((prevscheduleVariation) => !prevscheduleVariation);
        setStartDateVariation(null);
        setEndDateVariation(null);
    };
    // const handleStockManagement = () => {
    //     setStockManagement((stockManagement) => !stockManagement);
    // };
    // const handleSoldIndividual = () => {
    //     setSoldIndividual((soldIndividual) => !soldIndividual);
    // };

    const handleStartDateChange = (date) => {
        setStartDate(date);
        const minEndDate = new Date(date);
        minEndDate.setDate(minEndDate.getDate() + 1);
        setEndDate(minEndDate);
    };
    const handleStartDateChangeVariation = (date) => {
        setStartDateVariation(date);
        const minEndDateVariation = new Date(date);
        minEndDateVariation.setDate(minEndDateVariation.getDate() + 1);
        setEndDateVariation(minEndDateVariation);
    };

    const [accordionItems, setAccordionItems] = useState([]);
    const addAccordionItem = () => {
        setAccordionItems((prevItems) => [
            ...prevItems,
            {
                value: `value${prevItems.length + 1}`,
                name: '',
                options: '',
                visibleOnProductPage: true,
                usedForVariations: true,
            },
        ]);
    };

    const removeAccordionItem = (index) => {
        const updatedItems = [...accordionItems];
        updatedItems.splice(index, 1);
        setAccordionItems(updatedItems);
    };
    const [accordionVariationItems, setAccordionVariationItems] = useState([]);
    const addAccordionVariationItem = () => {
        setAccordionVariationItems((prevItems) => [
            ...prevItems,
            {
                value: `value${prevItems.length + 1}`,
                name: '',
                options: '',
                visibleOnProductPage: true,
                usedForVariations: true,
            },
        ]);
    };

    const removeAccordionVariationItem = (index) => {
        const updatedItems = [...accordionVariationItems];
        updatedItems.splice(index, 1);
        setAccordionVariationItems(updatedItems);
    };

    const handleCreateProductClick = () => {
        handleCreateProduct(productSingleImage, multiProductImage, productDetails)
    }

    // Hanlde Product Image Click     
    const fileInputRef = useRef(null);
    const multifileInputRef = useRef(null)
    const handleSetNewProductImage = () => {
        fileInputRef.current.click();
    };
    const handleMultiProductImage = () => {
        multifileInputRef.current.click()
    }
    const handleMultiProductUpload = (e) => {
        const files = e.target.files;
        const selectedImagesArray = Array.from(files);
        if (selectedImagesArray.length > 5) {
            showNotification({
                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                    <X color="red" />
                </ThemeIcon>,
                message: "Maximum 5 Images Only Allowed",
            })
        }
        else {
            setMultiProductImage(selectedImagesArray);
        }
    };

    // useReact Query
    useQuery('Products',
        listAllProduct,
        {
            onSuccess: (res) => {
                setProductData(res?.data?.data?.result)
            }
        }
    )

    // Handle File Upload
    const handleFileUpload = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile.size > 40 * 1024) {
            showNotification({
                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                    <CircleCheck color="red" />
                </ThemeIcon>,
                message: "Image Must Below 40KB",
            })
            return
        }
        setProductSingleImage(selectedFile);
    };


    // Preview Gallery Image
    const previewsGalleryProduct = multiProductImage?.map((image, index) => {
        const imageUrl = URL.createObjectURL(image)
        return (
            <Indicator
                key={index}
                className='add-product-div-container-right-product-gallery-card-content-gallery-indicator'
                label={<X onClick={() => removeMultiProductImage(index)} style={{ cursor: 'pointer' }} size={'1rem'} />}
                size={25} withBorder>
                <img src={imageUrl} />
            </Indicator>
        )
    });

    // handle Remove Multi Image
    const removeMultiProductImage = (e) => {
        const updatedMultiProductImage = multiProductImage.filter(
            (_, index) => index !== e
        );
        setMultiProductImage(updatedMultiProductImage);
    }


    // Product Details 
    const [productDetails, setProductDetails] = useState({
        product_name: '',
        product_description: '',
        product_short_description: '',
        product_type: 'simple',
        actual_price: '',
        sale_price: "",
        sale_price_date: '',
        tax_status: "none",
        tax_type: '',
        tax_rate: '',
        weight: '',
        length: '',
        width: '',
        height: '',
        SKU: '',
        status: stockManagement,
        initial_quantity: '',
        allow_backorders: '',
        low_stock_threshold: '',
        stock_status: '',
        product_status: '',
        product_image: '',
        product_gallery_image: '',
        product_category: '',
        product_subcategory: '',
        admin_id: sessionStorage.getItem('MogoAdminAccessToken101'),
        SKU: '',
        product_tags: ''
    })



    // Validation
    const [validateProductField, setValidateProductField] = useState({
        product_name: 0,
        product_description: 0,
        product_short_description: 0,
        product_type: 0,
        actual_price: 0,
        sale_price: 0,
        sale_price_date: 0,
        tax_status: 0,
        tax_type: 0,
        tax_rate: 0,
        weight: 0,
        length: 0,
        width: 0,
        height: 0,
        SKU: '',
        status: 0,
        initial_quantity: 0,
        allow_backorders: 0,
        low_stock_threshold: 0,
        stock_status: '',
        product_status: 0,
        product_image: 0,
        product_gallery_image: 0,
        product_category: 0,
    })

    useEffect(() => {
        if (productDetails.actual_price < productDetails.sale_price) {

        }
    }, [productDetails.actual_price, productDetails.sale_price])


    const [categoryDetails, setCategoryDetails] = useState({
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

    useQuery(
        [
            'subCategoryList',
            productDetails.product_category
        ],
        subCategoryListByCategoryID,
        {
            enabled: !!productDetails.product_category,
            onSuccess: (res) => {
                setCategoryDetails({ ...categoryDetails, subCategory: res.data.data.result })
            }
        }
    )

    return (
        <div>
            <div className="add-product-div">
                <div className="add-product-div-container">
                    <div className="add-product-div-container-left">
                        <div className="add-product-div-container-left-product-name">
                            <Input.Wrapper
                                error={`${validateProductField.product_name === 1 ?
                                    'Please Enter Product Name' :
                                    ''
                                    }`}
                                label="Add new product" description="">
                                <Input
                                    onChange={(e) => setProductDetails({ ...productDetails, product_name: e.target.value })}
                                    placeholder="Product Name"
                                    value={productDetails.product_name}
                                />
                            </Input.Wrapper>

                        </div>
                        {/* <div className="add-product-div-container-left-product-data-card-tab-panel-grid-link">
                            <label>Permalink:</label>
                            <p> https://weboney.in/lebanon/product/</p>
                            <Input />
                            <button onClick={handilePerma}>Edit</button>
                        </div> */}
                        <div className="add-product-div-container-left-product-description">
                            <Card className='add-product-div-container-left-product-description-card'>
                                <label>Product description
                                </label>
                                <Space w={'lg'} />
                                <span style={{ color: 'red' }}>
                                    {
                                        validateProductField.product_description === 1 ?
                                            "Description is Compulsory" :
                                            ''
                                    }
                                </span>
                                <ReactQuill
                                    onChange={(e) => setProductDetails({ ...productDetails, product_description: e })}
                                    className='quill-style'
                                    modules={modules}
                                    value={productDetails.product_description}
                                />
                            </Card>
                        </div>
                        <div className="add-product-div-container-left-product-data">
                            <div className='add-product-div-container-left-product-data-card'>
                                <div className="add-product-div-container-left-product-data-card-heading">
                                    <label>Product data</label>
                                    <Select
                                        rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                        placeholder="Select Type"
                                        data={selectTypeArray}
                                        value={productDetails.product_type}
                                        onChange={(e) => setProductDetails({ ...productDetails, product_type: e })}
                                    />
                                </div>
                                <div className="add-product-div-container-left-product-data-card-tab">
                                    {
                                        productDetails.product_type === "simple" ? (
                                            <Tabs variant="outline" defaultValue="general" orientation="vertical">
                                                <Tabs.List>
                                                    <Tabs.Tab value="general">General</Tabs.Tab>
                                                    <Tabs.Tab value="inventory">Inventory</Tabs.Tab>
                                                    <Tabs.Tab value="shipping">Shipping</Tabs.Tab>
                                                </Tabs.List>

                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="general">
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Regular price (₹)</label>
                                                        <Input.Wrapper
                                                            error={`${validateProductField.actual_price === 1 ?
                                                                'Please Enter Regular Price' :
                                                                validateProductField.actual_price === 2 ?
                                                                    'Regular Price Must be Greater than Sale Price' :
                                                                    ''
                                                                }`}
                                                        >
                                                            <NumericInput
                                                                value={productDetails.actual_price}
                                                                onChange={(e) => setProductDetails({ ...productDetails, actual_price: e })}
                                                            />
                                                        </Input.Wrapper>
                                                    </div>
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid grid-last">
                                                        <label>Sale price (₹)</label>
                                                        <Input.Wrapper
                                                            error={`${validateProductField.sale_price === 1 ?
                                                                'Please Enter Sale Price' :
                                                                validateProductField.sale_price === 2 ?
                                                                    'Sale Price Must be Less than Regular Price' :
                                                                    ''
                                                                }`}
                                                        >
                                                            <NumericInput
                                                                value={productDetails.sale_price}
                                                                onChange={(e) => setProductDetails({ ...productDetails, sale_price: e })}
                                                            />
                                                        </Input.Wrapper>
                                                    </div>
                                                    {/* {
                                                        schedule === true ? (
                                                            <div className="add-product-div-container-left-product-data-card-tab-panel-grid-sale">
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Sale price Dates</label>
                                                                    <DatePicker
                                                                        className='datepicker-style'
                                                                        selected={startDate}
                                                                        onChange={handleStartDateChange}
                                                                        minDate={new Date()} />
                                                                </div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid grid-last">
                                                                    <label></label>
                                                                    <DatePicker
                                                                        className='datepicker-style'
                                                                        selected={endDate}
                                                                        onChange={(date) => setEndDate(date)}
                                                                        minDate={endDate}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ) : ''
                                                    } */}
                                                    {/* <p onClick={handleSchedule} className='add-product-div-container-left-product-data-card-tab-panel-grid-schedule'>{schedule === true ? 'Cancel' : 'Schedule'}</p> */}
                                                    <div className='hr-line mt-10' />
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Tax status</label>
                                                        <Select
                                                            rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                            placeholder="Select Type"
                                                            data={taxStatusArray}
                                                            value={productDetails.tax_status}
                                                            onChange={(e) => setProductDetails({ ...productDetails, tax_status: e })}
                                                        />
                                                    </div>
                                                    {
                                                        productDetails.tax_status == 'taxable' ?
                                                            (
                                                                <>
                                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                        <label>Tax type</label>
                                                                        <Input.Wrapper
                                                                            error={`${validateProductField.tax_type === 1 ?
                                                                                'Tax Type is compulsory' : ''
                                                                                }`}
                                                                        >
                                                                            <Select
                                                                                value={productDetails.tax_type}
                                                                                onChange={(e) => setProductDetails({ ...productDetails, tax_type: e })}
                                                                                rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                                                placeholder="Select Tax type"
                                                                                data={taxClassArray}
                                                                            />
                                                                        </Input.Wrapper>
                                                                    </div>
                                                                    {
                                                                        productDetails.tax_type ?
                                                                            (
                                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                                    <label>Tax rate (%)</label>
                                                                                    <Input.Wrapper
                                                                                        error={`${validateProductField.tax_rate === 1 ?
                                                                                            'Tax Rate is compulsory' : ''
                                                                                            }`}
                                                                                    >
                                                                                        <NumericInput

                                                                                            value={productDetails.tax_rate}
                                                                                            onChange={(e) => setProductDetails({ ...productDetails, tax_rate: e })}
                                                                                            placeholder='Tax rate in Percentage'
                                                                                        />
                                                                                    </Input.Wrapper>
                                                                                </div>
                                                                            ) : ''
                                                                    }

                                                                </>
                                                            ) : ''
                                                    }
                                                </Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="inventory">
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>SKU</label>
                                                        <Input.Wrapper
                                                            error={
                                                                `${validateProductField.SKU === 1 ?
                                                                    'Product SKU is Compulsory' :
                                                                    ''
                                                                }`
                                                            }
                                                        >
                                                            <Input
                                                                value={productDetails.SKU}
                                                                onChange={(e) => setProductDetails({ ...productDetails, SKU: e.target.value })}
                                                            />
                                                        </Input.Wrapper>
                                                    </div>
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Stock management</label>
                                                        <Input.Wrapper
                                                            error={`${validateProductField.status === 1 ?
                                                                "Stock Management is Compulsory" : ''
                                                                }`}
                                                        >
                                                            <Checkbox
                                                                checked={stockManagement}
                                                                defaultChecked
                                                                label="Track stock quantity for this product"
                                                                radius="xs"
                                                                size="xs"
                                                                onChange={(e) => { setProductDetails({ ...productDetails, status: e }); setStockManagement(e.currentTarget.checked) }}
                                                            />
                                                        </Input.Wrapper>
                                                    </div>
                                                    {
                                                        stockManagement === true ? (
                                                            <div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Initial Quantity</label>
                                                                    <Input.Wrapper
                                                                        error={`${validateProductField.initial_quantity === 1 ?
                                                                            'Initial Quantity is Compulsory' :
                                                                            ''
                                                                            }`}
                                                                    >
                                                                        <Quantity
                                                                            value={maxQuantityValue}
                                                                            onChange={(e) => { setProductDetails({ ...productDetails, initial_quantity: e }); setMaxQuantityValue(e) }}
                                                                        />
                                                                    </Input.Wrapper>
                                                                </div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Allow backorders?</label>
                                                                    <Radio.Group
                                                                        name="favoriteFramework"
                                                                        onChange={(e) => { setProductDetails({ ...productDetails, allow_backorders: e }) }}
                                                                    >
                                                                        {
                                                                            validateProductField.allow_backorders === 1 ?
                                                                                'Back Orders are Compulsory' : ''
                                                                        }
                                                                        <Group mt="xs">
                                                                            <Radio value="Do not allow" label="Do not allow" />
                                                                            <Radio value="Allow, but notify customer" label="Allow, but notify customer" />
                                                                            <Radio value="Allow" label="Allow" />
                                                                        </Group>
                                                                    </Radio.Group>
                                                                </div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Low stock threshold</label>
                                                                    <Quantity
                                                                        value={maxLowStockValue}
                                                                        onChange={(e) => {
                                                                            setProductDetails({ ...productDetails, low_stock_threshold: e });
                                                                            setMaxLowStockValue(e)
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                <label>Stock status</label>
                                                                <Radio.Group
                                                                    name="favoriteFramework"
                                                                    onChange={(e) => { setProductDetails({ ...productDetails, stock_status: e }) }}
                                                                >
                                                                    <Group mt="xs">
                                                                        <Radio value="In stock" label="In stock" />
                                                                        <Radio value="Out of stock" label="Out of stock" />
                                                                        <Radio value="On backorder" label="On backorder" />
                                                                    </Group>
                                                                </Radio.Group>
                                                            </div>
                                                        )
                                                    }
                                                </Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="shipping">
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Weight (kg)</label>
                                                        <NumericInput
                                                            value={productDetails.weight}
                                                            onChange={(e) =>
                                                                setProductDetails({
                                                                    ...productDetails,
                                                                    weight: e
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid-multiple">
                                                        <label>Dimensions (cm)</label>
                                                        <NumericInput
                                                            value={productDetails.length}
                                                            onChange={(e) =>
                                                                setProductDetails({
                                                                    ...productDetails,
                                                                    length: e
                                                                })
                                                            }
                                                            placeholder="Length"
                                                        />
                                                        <NumericInput
                                                            value={productDetails.width}
                                                            onChange={(e) =>
                                                                setProductDetails({
                                                                    ...productDetails,
                                                                    width: e
                                                                })
                                                            }
                                                            placeholder="Width"
                                                        />
                                                        <NumericInput
                                                            value={productDetails.height}
                                                            onChange={(e) =>
                                                                setProductDetails({
                                                                    ...productDetails,
                                                                    height: e
                                                                })
                                                            }
                                                            placeholder="Height"
                                                        />
                                                    </div>
                                                </Tabs.Panel>
                                            </Tabs>
                                        ) : (
                                            <Tabs variant="outline" defaultValue="general" orientation="vertical">
                                                <Tabs.List>
                                                    <Tabs.Tab value="general">General</Tabs.Tab>
                                                    <Tabs.Tab value="inventory">Inventory</Tabs.Tab>
                                                    <Tabs.Tab value="shipping">Shipping</Tabs.Tab>
                                                    <Tabs.Tab value="attributes">Attributes</Tabs.Tab>
                                                    <Tabs.Tab value="variations">Variations</Tabs.Tab>
                                                </Tabs.List>

                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="general">
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Regular price (₹)</label>
                                                        <NumericInput
                                                            value={maxRegularValue}
                                                            onChange={setMaxRegularValue}
                                                        />
                                                    </div>
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid grid-last">
                                                        <label>Sale price (₹)</label>
                                                        <NumericInput
                                                            value={maxSaleValue}
                                                            onChange={setMaxSaleValue}
                                                        />
                                                    </div>
                                                    {
                                                        schedule === true ? (
                                                            <div className="add-product-div-container-left-product-data-card-tab-panel-grid-sale">
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Sale price Dates</label>
                                                                    <DatePicker
                                                                        className='datepicker-style'
                                                                        selected={startDate}
                                                                        onChange={handleStartDateChange}
                                                                        minDate={new Date()}
                                                                    />
                                                                </div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid grid-last">
                                                                    <label></label>
                                                                    <DatePicker
                                                                        className='datepicker-style'
                                                                        selected={endDate}
                                                                        onChange={(date) => setEndDate(date)}
                                                                        minDate={endDate}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ) : ''
                                                    }
                                                    <p onClick={handleSchedule} className='add-product-div-container-left-product-data-card-tab-panel-grid-schedule'>{schedule === true ? 'Cancel' : 'Schedule'}</p>
                                                    <div className='hr-line mt-10' />
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Tax status</label>
                                                        <Select
                                                            rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                            placeholder="Select Type"
                                                            data={taxStatusArray}
                                                            value={taxStatus}
                                                            onChange={handleTaxStatusChange}
                                                        />
                                                    </div>
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Tax class</label>
                                                        <Select
                                                            rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                            placeholder="Select Class"
                                                            data={taxClassArray}
                                                            value={taxClass}
                                                            onChange={handleTaxClassChange}
                                                        />
                                                    </div>
                                                </Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="inventory">
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>SKU</label>
                                                        <Input />
                                                    </div>
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Stock management</label>
                                                        <Checkbox
                                                            checked={stockManagement}
                                                            defaultChecked
                                                            label="Track stock quantity for this product"
                                                            radius="xs"
                                                            size="xs"
                                                            onChange={(e) => { setProductDetails({ ...productDetails, status: e }); setStockManagement(e.currentTarget.checked) }}
                                                        />
                                                    </div>
                                                    {
                                                        stockManagement === true ? (
                                                            <div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Quantity</label>
                                                                    <Quantity
                                                                        value={maxQuantityValue}
                                                                        onChange={setMaxQuantityValue}
                                                                    />
                                                                </div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Allow backorders?</label>
                                                                    <Radio.Group
                                                                        name="favoriteFramework"
                                                                        onChange={(e) => { setProductDetails({ ...productDetails, allow_backorders: e }) }}
                                                                    >
                                                                        <Group mt="xs">
                                                                            <Radio value="Do not allow" label="Do not allow" />
                                                                            <Radio value="Allow, but notify customer" label="Allow, but notify customer" />
                                                                            <Radio value="Allow" label="Allow" />
                                                                        </Group>
                                                                    </Radio.Group>
                                                                </div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Low stock threshold</label>
                                                                    <Quantity
                                                                        value={maxLowStockValue}
                                                                        onChange={setMaxLowStockValue}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                <label>Stock status</label>
                                                                <Radio.Group
                                                                    name="favoriteFramework"
                                                                    onChange={(e) =>
                                                                        setProductDetails({
                                                                            ...productDetails,
                                                                            stock_status: e

                                                                        })
                                                                    }
                                                                >
                                                                    <Group mt="xs">
                                                                        <Radio value="In stock" label="In stock" />
                                                                        <Radio value="Out of stock" label="Out of stock" />
                                                                        <Radio value="On backorder" label="On backorder" />
                                                                    </Group>
                                                                </Radio.Group>
                                                            </div>
                                                        )
                                                    }
                                                    <div className='hr-line mt-10' />
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Sold individually</label>
                                                        <Checkbox
                                                            checked={soldIndividual}
                                                            defaultChecked
                                                            label="Limit purchases to 1 item per order"
                                                            radius="xs"
                                                            size="xs"
                                                            onChange={(event) => setSoldIndividual(event.currentTarget.checked)}
                                                        />
                                                    </div>
                                                    <div className='hr-line mt-10' />
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Initial number in stock</label>
                                                        <Quantity
                                                            value={maxInitialValue}
                                                            onChange={setMaxInitialValue}
                                                        />
                                                    </div>
                                                </Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="shipping">
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Weight (kg)</label>
                                                        <NumericInput
                                                            value={maxWeightValue}
                                                            onChange={setMaxWeightValue}
                                                        />
                                                    </div>
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid-multiple">
                                                        <label>Dimensions (cm)</label>
                                                        <NumericInput
                                                            value={maxLengthValue}
                                                            onChange={setMaxLengthValue}
                                                            placeholder="Length"
                                                        />
                                                        <NumericInput
                                                            value={maxWidthValue}
                                                            onChange={setMaxWidthValue}
                                                            placeholder="Width"
                                                        />
                                                        <NumericInput
                                                            value={maxHeightValue}
                                                            onChange={setMaxHeightValue}
                                                            placeholder="Height"
                                                        />
                                                    </div>
                                                </Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="attributes">
                                                    <div className="atributes-panel">
                                                        <div className="atributes-panel-head">
                                                            <button onClick={addAccordionItem}>Add new</button>
                                                            <Select
                                                                rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                                placeholder="Add Existing"
                                                                data={taxClassArray}
                                                            />
                                                        </div>
                                                        <div className="atributes-panel-accordion">
                                                            <Accordion variant="separated">
                                                                <Accordion.Item value="value">
                                                                    <Accordion.Control>color</Accordion.Control>
                                                                    <Accordion.Panel>
                                                                        <div className="accordion-content">
                                                                            <div className="accordion-content-left">
                                                                                <label>Name:</label>
                                                                                <Input />
                                                                                <div className="accordion-content-left-checkbox">
                                                                                    <Checkbox
                                                                                        defaultChecked
                                                                                        label="Visible on the product page"
                                                                                    />
                                                                                    <Checkbox
                                                                                        defaultChecked
                                                                                        label="Used for variations"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="accordion-content-right">
                                                                                <Textarea
                                                                                    label="Value(s):"
                                                                                    placeholder="Enter options for customers to choose from, f.e. “Blue” or “Large”. Use “|” to separate different options."
                                                                                    minRows={4}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className='hr-line mt-10' />
                                                                        <button className='save-attributes-button'>Save attributes</button>
                                                                    </Accordion.Panel>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                            {accordionItems.map((item, index) => (
                                                                <Accordion variant="separated" key={index} chevronPosition="left">
                                                                    <Accordion.Item value="value">
                                                                        <Accordion.Control icon={<button className='remove-accordion-button' onClick={() => removeAccordionItem(index)}>Remove</button>}>color</Accordion.Control>
                                                                        <Accordion.Panel>
                                                                            <div className="accordion-content">
                                                                                <div className="accordion-content-left">
                                                                                    <label>Name:</label>
                                                                                    <Input />
                                                                                    <div className="accordion-content-left-checkbox">
                                                                                        <Checkbox
                                                                                            defaultChecked
                                                                                            label="Visible on the product page"
                                                                                        />
                                                                                        <Checkbox
                                                                                            defaultChecked
                                                                                            label="Used for variations"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="accordion-content-right">
                                                                                    <Textarea
                                                                                        label="Value(s):"
                                                                                        placeholder="Enter options for customers to choose from, f.e. “Blue” or “Large”. Use “|” to separate different options."
                                                                                        minRows={4}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className='hr-line mt-10' />
                                                                            <button className='save-attributes-button'>Save attributes</button>
                                                                        </Accordion.Panel>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="variations">
                                                    <div className="add-product-variations">
                                                        <div className="add-product-variations-head">
                                                            <button className='variations-button'>Generate variations</button>
                                                            <button className='variations-button' onClick={addAccordionVariationItem}>Add manually</button>
                                                        </div>
                                                        <div className="add-product-variations-content">
                                                            {accordionVariationItems.map((item, index) => (
                                                                <Accordion variant="separated" key={index} chevronPosition="left">
                                                                    <Accordion.Item value="value">
                                                                        <Accordion.Control icon={<span className='remove-accordion-button' onClick={() => removeAccordionVariationItem(index)}>Remove</span>}>color</Accordion.Control>
                                                                        <Accordion.Panel>
                                                                            <div className="accordionvariation-content">
                                                                                <div className="accordionvariation-content-image-sku">
                                                                                    <div className="accordionvariation-content-image-sku-image">
                                                                                        <div className="accordionvariation-content-image-sku-image-div">
                                                                                            <img src={image_icon} alt="image icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="accordionvariation-content-image-sku-sku">
                                                                                        <label>SKU</label>
                                                                                        <Input />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='hr-line mt-10' />
                                                                                <div className="accordionvariation-content-checkbox">
                                                                                    <Checkbox
                                                                                        defaultChecked
                                                                                        label="Enabled"
                                                                                    />
                                                                                    <Checkbox
                                                                                        label="Manage stock?"
                                                                                    />
                                                                                </div>
                                                                                <div className='hr-line mt-10' />
                                                                                <div className="accordionvariation-content-form">
                                                                                    <div className="accordionvariation-content-variation-image-btn">
                                                                                        <label>Variation Image Gallery</label>
                                                                                        <button>Add image</button>
                                                                                    </div>
                                                                                    <div className="accordionvariation-content-form-fields">
                                                                                        <div className="accordionvariation-content-form-fields-individual">
                                                                                            <div className="variation-field">
                                                                                                <label>Regular price (₹)</label>
                                                                                                <NumericInput
                                                                                                    value={maxRegularValueVariation}
                                                                                                    onChange={setMaxRegularValueVariation}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="variation-field">
                                                                                                <label>Sale price (₹) <span onClick={handleScheduleVariation} className='add-product-div-container-left-product-data-card-tab-panel-grid-schedule'>{scheduleVariation === true ? 'Cancel Schedule' : 'Schedule'}</span></label>
                                                                                                <NumericInput
                                                                                                    value={maxSaleValueVariation}
                                                                                                    onChange={setMaxSaleValueVariation}
                                                                                                />
                                                                                            </div>
                                                                                            {
                                                                                                scheduleVariation === true ? (
                                                                                                    <>
                                                                                                        <div className="variation-field-hide">
                                                                                                            <label>Sale start date</label>
                                                                                                            <DatePicker
                                                                                                                className='datepicker-style'
                                                                                                                selected={startDateVariation}
                                                                                                                onChange={handleStartDateChangeVariation}
                                                                                                                minDate={new Date()}
                                                                                                            />
                                                                                                        </div>
                                                                                                        <div className="variation-field-hide">
                                                                                                            <label>Sale end date</label>
                                                                                                            <DatePicker
                                                                                                                className='datepicker-style'
                                                                                                                selected={endDateVariation}
                                                                                                                onChange={(date) => setEndDateVariation(date)}
                                                                                                                minDate={endDateVariation}
                                                                                                            />
                                                                                                        </div>
                                                                                                    </>
                                                                                                ) : ''
                                                                                            }

                                                                                        </div>
                                                                                        <div className="accordionvariation-content-form-fields-individual-full">
                                                                                            <label>Stock status</label>
                                                                                            <Select
                                                                                                rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                                                                placeholder="Add Existing"
                                                                                                data={variationStockStatusArray}
                                                                                                value={variationStockClass}
                                                                                                onChange={handlevariationStockClassChange}
                                                                                            />
                                                                                        </div>
                                                                                        <div className="accordionvariation-content-form-fields-individual-full">
                                                                                            <label>Weight (kg)</label>
                                                                                            <NumericInput
                                                                                                value={maxWeightValue}
                                                                                                onChange={setMaxWeightValue}
                                                                                            />
                                                                                        </div>
                                                                                        <div className="accordionvariation-content-form-fields-individual-full">
                                                                                            <label>Dimensions (L×W×H) (cm)</label>
                                                                                            <div className="add-product-div-container-left-product-data-card-tab-panel-grid-multiple-variation">
                                                                                                <NumericInput
                                                                                                    value={maxLengthValue}
                                                                                                    onChange={setMaxLengthValue}
                                                                                                    placeholder="Length"
                                                                                                />
                                                                                                <NumericInput
                                                                                                    value={maxWidthValue}
                                                                                                    onChange={setMaxWidthValue}
                                                                                                    placeholder="Width"
                                                                                                />
                                                                                                <NumericInput
                                                                                                    value={maxHeightValue}
                                                                                                    onChange={setMaxHeightValue}
                                                                                                    placeholder="Height"
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="accordionvariation-content-form-fields-individual-full">
                                                                                            <label>Shipping class</label>
                                                                                            <Select
                                                                                                rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                                                                placeholder="Add Existing"
                                                                                                data={variationshippingArray}
                                                                                                value={variationshipping}
                                                                                                onChange={handlevariationshippingChange}
                                                                                            />
                                                                                        </div>
                                                                                        <div className="accordionvariation-content-form-fields-individual-full">
                                                                                            <label>Tax class</label>
                                                                                            <Select
                                                                                                rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                                                                placeholder="Add Existing"
                                                                                                data={variationtaxclassArray}
                                                                                                value={variationtaxclass}
                                                                                                onChange={handlevariationtaxclassChange}
                                                                                            />
                                                                                        </div>
                                                                                        <div className="accordionvariation-content-form-fields-individual-full">
                                                                                            <Textarea
                                                                                                label="Description"
                                                                                                minRows={3}
                                                                                            />
                                                                                        </div>
                                                                                        <div className='hr-line mt-10' />
                                                                                        <button className='accordionvariation-content-form-btn'>Save changes</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Accordion.Panel>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Tabs.Panel>
                                            </Tabs>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="add-product-div-container-left-short-description">
                            <Card className='add-product-div-container-left-short-description-card'>
                                <label>Product short description</label>
                                <ReactQuill
                                    className='quill-style'
                                    onChange={(e) =>
                                        setProductDetails({ ...productDetails, product_short_description: e })
                                    }
                                    modules={modules}
                                />
                            </Card>
                        </div>

                    </div>
                    <div className="add-product-div-container-right">
                        <div className="add-product-div-container-right-draft-publish">
                            <Card className='add-product-div-container-right-draft-publish-card'>
                                <div className="add-product-div-container-right-draft-publish-card-head">
                                    <h4>Publish</h4>
                                </div>
                                <div className='hr-line mt-10' />
                                <div className="add-product-div-container-right-draft-publish-card-content">
                                    <button onClick={() => {
                                        setProductDetails({
                                            ...productDetails,
                                            product_status: 'draft'
                                        });
                                        handleCreateProductClick()
                                    }}>Save Drafts</button>
                                    <button onClick={() => {
                                        setProductDetails({
                                            ...productDetails,
                                            product_status: 'publish'
                                        });
                                        handleCreateProductClick()
                                    }}>Publish</button>
                                </div>
                            </Card>
                        </div>
                        <div className="add-product-div-container-right-product-image">
                            <Card className='add-product-div-container-right-product-image-card'>
                                <div className="add-product-div-container-right-product-image-card-head">
                                    <h4>Product image</h4>
                                </div>
                                <div className='hr-line mt-10' />
                                <div className="add-product-div-container-right-product-image-card-content">
                                    {
                                        productSingleImage ?
                                            (<div className='add-product-div-container-right-product-image-card-content-image'>
                                                <img src={URL.createObjectURL(productSingleImage)} />
                                            </div>)
                                            : ''
                                    }
                                    <p onClick={handileProductImage}>
                                        {
                                            productSingleImage ?
                                                (<span
                                                    onClick={() => setProductSingleImage('')}
                                                    className='product-remove'>
                                                    Remove product image
                                                </span>)
                                                :
                                                <span
                                                    onClick={handleSetNewProductImage}
                                                    className='product-add'>
                                                    Set product image
                                                </span>
                                        }
                                        {
                                            <input
                                                onChange={handleFileUpload}
                                                accept="image/*"
                                                type='file'
                                                style={{ display: 'none' }}
                                                ref={fileInputRef} />
                                        }
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div className="add-product-div-container-right-product-gallery">
                            <Card className='add-product-div-container-right-product-gallery-card'>
                                <div className="add-product-div-container-right-product-gallery-card-head">
                                    <h4>Product gallery</h4>
                                </div>
                                {
                                    <input
                                        style={{ display: 'none' }}
                                        ref={multifileInputRef}
                                        type="file"
                                        accept="image/*"
                                        name='files'
                                        multiple
                                        onChange={handleMultiProductUpload}
                                    />
                                }
                                <div className='hr-line mt-10' />
                                <div className='add-product-div-container-right-product-gallery-card-content-gallery'>
                                    {previewsGalleryProduct}
                                </div>
                                <div className="add-product-div-container-right-product-gallery-card-content">
                                    <span onClick={handleMultiProductImage} className='product-add'>Add product gallery images</span>
                                    {/* <p onClick={handileProductGallery}>
                                        {
                                            productGallery === true ?
                                                (<span className='product-remove'>Add product gallery images</span>)
                                                :
                                            }
                                    </p> */}
                                </div>
                            </Card>
                        </div>
                        <div className="add-product-div-container-right-product-category">
                            <div className='add-product-div-container-right-product-category-card'>
                                <div className="add-product-div-container-right-product-category-card-head">
                                    <h4>Product category</h4>
                                </div>
                                <div className='hr-line mt-10' />
                                <div className="add-product-div-container-right-product-category-card-content">
                                    <div className="add-product-div-container-right-product-category-card-content-tabs">
                                        {
                                            categoryDetails.category.length > 1 ?
                                                <Select
                                                    label="Category"
                                                    onChange={(e) => {
                                                        setProductDetails({
                                                            ...productDetails,
                                                            product_category: e
                                                        });
                                                        setProductDetails({
                                                            ...productDetails,
                                                            product_subcategory: ''
                                                        })
                                                    }}
                                                    data={
                                                        Array.isArray(categoryDetails.category) ?
                                                            categoryDetails.category.map(data => ({
                                                                value: data._id,
                                                                label: data.name
                                                            })) : ''
                                                    }
                                                    value={productDetails.product_category}
                                                    placeholder="Select Category"
                                                    nothingFound="Nothing found"
                                                    searchable
                                                    rightSection={<img src={anglebottom}
                                                        alt="anglebottom icon" width={14} />}
                                                /> : ''
                                        }
                                        {
                                            productDetails.product_category ?
                                                categoryDetails.subCategory.length > 0 ?
                                                    <Select
                                                        onChange={e => {
                                                            setProductDetails({
                                                                ...productDetails,
                                                                product_subcategory: e
                                                            });
                                                            setProductDetails({
                                                                ...productDetails,
                                                                product_childcategory: ''
                                                            })
                                                        }}
                                                        value={productDetails.product_subcategory}
                                                        label="Sub Category"
                                                        data={
                                                            Array.isArray(categoryDetails.subCategory) ?
                                                                categoryDetails.subCategory.map(data => ({
                                                                    value: data._id,
                                                                    label: data.name
                                                                })) : ''
                                                        }
                                                        placeholder="Select Sub Category"
                                                        nothingFound="Nothing found"
                                                        searchable
                                                        rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                    /> : '' : ''
                                        }


                                        {/* <Tabs variant="outline" defaultValue="allcategory">
                                            <Tabs.List>
                                                <Tabs.Tab value="allcategory">
                                                    All Categories
                                                </Tabs.Tab>
                                                <Tabs.Tab value="mostused">
                                                    Most Used
                                                </Tabs.Tab>
                                            </Tabs.List>

                                            <Tabs.Panel className='category-tabpanel' value="allcategory">
                                                <Checkbox
                                                    label="category"
                                                    radius="xs"
                                                    size="xs"
                                                />
                                                <Checkbox
                                                    label="category"
                                                    radius="xs"
                                                    size="xs"
                                                />
                                                <Checkbox
                                                    label="category"
                                                    radius="xs"
                                                    size="xs"
                                                />
                                                <Checkbox
                                                    label="category"
                                                    radius="xs"
                                                    size="xs"
                                                />
                                            </Tabs.Panel>

                                            <Tabs.Panel className='category-tabpanel' value="mostused">
                                                <Checkbox
                                                    label="category"
                                                    radius="xs"
                                                    size="xs"
                                                />
                                                <Checkbox
                                                    label="category"
                                                    radius="xs"
                                                    size="xs"
                                                />
                                            </Tabs.Panel>
                                        </Tabs> */}

                                    </div>
                                    {/* <div className="add-product-div-container-right-product-category-card-content-add-category">
                                        <p onClick={handileAddCategory} className='add-product-div-container-right-product-category-card-content-add-category-btn'>+ Add new category</p>
                                        {
                                            addCategory === true ? (
                                                <div>
                                                    <div className="add-category-div">
                                                        <Input />
                                                    </div>
                                                    <div className="add-category-div">
                                                        <Select
                                                            rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                            placeholder="Parent Category"
                                                            data={categoryArray}
                                                        />
                                                    </div>
                                                    <div className='hr-line mt-10' />
                                                    <button className='add-category-btn'>Add Category</button>
                                                </div>
                                            ) : ''
                                        }
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="add-product-div-container-right-product-tags">
                            <Card className='add-product-div-container-right-product-tags-card'>
                                <div className="add-product-div-container-right-product-tags-card-head">
                                    <h4>Product tags</h4>
                                </div>
                                <div className='hr-line mt-10' />
                                <div className="add-product-div-container-right-product-tags-card-content">
                                    <div className="add-product-div-container-right-product-tags-card-content-form">
                                        <Input
                                            onChange={
                                                (e) =>
                                                    setProductDetails(
                                                        { ...productDetails, product_tags: e.target.value }
                                                    )}
                                        />
                                        <button>Add</button>
                                    </div>
                                    <p className='add-product-div-container-right-product-tags-card-content-para'>Separate tags with commas</p>
                                    <div className="add-product-div-container-right-product-tags-card-content-details">
                                        {/* {
                                            showProductTagsArray.map((producttag, index) => {
                                                return (
                                                    <p key={index} className='add-product-div-container-right-product-tags-card-content-details-individual'><img src={trash} alt="trash icon" width={11} /> {producttag.tags}</p>
                                                )
                                            })
                                        } */}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct