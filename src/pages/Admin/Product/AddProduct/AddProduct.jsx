//import react packages
import React, { useState } from 'react'

//import AddProduct css
import './AddProduct.css'

//import mantine packages
import { Accordion, Card, Checkbox, Group, Input, Radio, Select, Tabs, Textarea } from '@mantine/core';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill'; // Import React-Quill

import NumericInput from '../../../../components/Admin/Input/NumericInput';

//import icons
import anglebottom from '../../../../assets/preheader/arrow-down.webp'
import Quantity from '../../../../components/Admin/Quantity/Quantity';
import image_icon from '../../../../assets/admin/product/image_icon.png'
import trash from '../../../../assets/admin/table/dropdown/trash.png'


const AddProduct = () => {
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
    const [productGallery, setProductGallery] = useState(false);
    const [scheduleVariation, setScheduleVariation] = useState(false);
    const [stockManagement, setStockManagement] = useState(false);
    const [soldIndividual, setSoldIndividual] = useState(false);
    const [addCategory, setAddCategory] = useState(false);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startDateVariation, setStartDateVariation] = useState(null);
    const [endDateVariation, setEndDateVariation] = useState(null);



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
        setProductImage((prevProductImage) => !prevProductImage)
    }
    const handileProductGallery = () => {
        setProductGallery((prevProductGallery) => !prevProductGallery)
    }
    const handileAddCategory = () => {
        setAddCategory((prevAddCategory) => !prevAddCategory)
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
        setSchedule((prevSchedule) => !prevSchedule);
        setStartDate(null);
        setEndDate(null);
    };
    const handleScheduleVariation = () => {
        setScheduleVariation((prevScheduleVariation) => !prevScheduleVariation);
        setStartDateVariation(null);
        setEndDateVariation(null);
    };
    const handleStockManagement = () => {
        setStockManagement((stockManagement) => !stockManagement);
    };
    const handleSoldIndividual = () => {
        setSoldIndividual((soldIndividual) => !soldIndividual);
    };

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

    return (
        <div>
            <div className="add-product-div">
                <div className="add-product-div-container">
                    <div className="add-product-div-container-left">
                        <div className="add-product-div-container-left-product-name">
                            <Input.Wrapper label="Add new product" description="" error="">
                                <Input placeholder="Product Name" />
                            </Input.Wrapper>
                        </div>
                        <div className="add-product-div-container-left-product-description">
                            <Card className='add-product-div-container-left-product-description-card'>
                                <label>Product description</label>
                                <ReactQuill
                                    className='quill-style'
                                    value={editorHtml}
                                    onChange={handleEditorChange}
                                    modules={modules}
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
                                        value={selectedType}
                                        onChange={handleTypeChange}
                                    />
                                </div>
                                <div className="add-product-div-container-left-product-data-card-tab">
                                    {
                                        selectedType === "simple" ? (
                                            <Tabs variant="outline" defaultValue="general" orientation="vertical">
                                                <Tabs.List>
                                                    <Tabs.Tab value="general">General</Tabs.Tab>
                                                    <Tabs.Tab value="inventory">Inventory</Tabs.Tab>
                                                    <Tabs.Tab value="shipping">Shipping</Tabs.Tab>
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
                                                    {
                                                        taxStatus == 'taxable' ?
                                                            (
                                                                <>
                                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                        <label>Tax type</label>
                                                                        <Select
                                                                            rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                                            placeholder="Select Tax type"
                                                                            data={taxClassArray}
                                                                            value={taxClass}
                                                                            onChange={handleTaxClassChange}
                                                                        />
                                                                    </div>
                                                                    {
                                                                        taxClass ?
                                                                            (
                                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                                    <label>Tax rate (%)</label>
                                                                                    <NumericInput
                                                                                        value={taxRate}
                                                                                        placeholder='Tax rate in Percentage'
                                                                                        onChange={(e) => setTaxRate(e)}
                                                                                    />
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
                                                            onChange={handleStockManagement}
                                                        />
                                                    </div>
                                                    {
                                                        stockManagement === true ? (
                                                            <div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Initial Quantity</label>
                                                                    <Quantity
                                                                        value={maxQuantityValue}
                                                                        onChange={setMaxQuantityValue}
                                                                    />
                                                                </div >
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Allow backorders?</label>
                                                                    <Radio.Group
                                                                        name="favoriteFramework"
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
                                                            </div >
                                                        ) : (
                                                            <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                <label>Stock status</label>
                                                                <Radio.Group
                                                                    name="favoriteFramework"
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
                                                    {/* <div className='hr-line mt-10' /> */}
                                                    {/* <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Sold individually</label>
                                                        <Checkbox
                                                            checked={soldIndividual}
                                                            defaultChecked
                                                            label="Limit purchases to 1 item per order"
                                                            radius="xs"
                                                            size="xs"
                                                            onChange={handleSoldIndividual}
                                                        />
                                                    </div> */}
                                                    {/* <div className='hr-line mt-10' />
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Initial number in stock</label>
                                                        <Quantity
                                                            value={maxInitialValue}
                                                            onChange={setMaxInitialValue}
                                                        />
                                                    </div> */}
                                                </Tabs.Panel >
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
                                            </Tabs >
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
                                                            value={taxStatus} // Set the value prop to the selectedType state variable
                                                            onChange={handleTaxStatusChange}
                                                        />
                                                    </div>
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                        <label>Tax class</label>
                                                        <Select
                                                            rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                            placeholder="Select Class"
                                                            data={taxClassArray}
                                                            value={taxClass} // Set the value prop to the selectedType state variable
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
                                                            onChange={handleStockManagement}
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
                                                            onChange={handleSoldIndividual}
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
                                                                                                                minDate={endDateVariation} // Set the minimum date based on the selected start date
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
                                                                                                value={variationStockClass} // Set the value prop to the selectedType state variable
                                                                                                onChange={handlevariationStockClassChange} // Call handleTypeChange when the selection changes
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
                                                                                                value={variationshipping} // Set the value prop to the selectedType state variable
                                                                                                onChange={handlevariationshippingChange} // Call handleTypeChange when the selection changes
                                                                                            />
                                                                                        </div>
                                                                                        <div className="accordionvariation-content-form-fields-individual-full">
                                                                                            <label>Tax class</label>
                                                                                            <Select
                                                                                                rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                                                                                placeholder="Add Existing"
                                                                                                data={variationtaxclassArray}
                                                                                                value={variationtaxclass} // Set the value prop to the selectedType state variable
                                                                                                onChange={handlevariationtaxclassChange} // Call handleTypeChange when the selection changes
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
                                </div >
                            </div >
                        </div >

                        <div className="add-product-div-container-left-short-description">
                            <Card className='add-product-div-container-left-short-description-card'>
                                <label>Product short description</label>
                                <ReactQuill
                                    className='quill-style'
                                    value={editorShortHtml}
                                    onChange={handleEditorShortChange}
                                    modules={modules}
                                />
                            </Card>
                        </div>

                    </div >
                    <div className="add-product-div-container-right">
                        <div className="add-product-div-container-right-draft-publish">
                            <Card className='add-product-div-container-right-draft-publish-card'>
                                <div className="add-product-div-container-right-draft-publish-card-head">
                                    <h4>Publish</h4>
                                </div>
                                <div className='hr-line mt-10' />
                                <div className="add-product-div-container-right-draft-publish-card-content">
                                    <button>Save Drafts</button>
                                    <button>Publish</button>
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
                                        productImage === true ? (<div className='add-product-div-container-right-product-image-card-content-image'></div>) : ''
                                    }
                                    <p onClick={handileProductImage}>
                                        {
                                            productImage === true ? (<span className='product-remove'>Remove product image</span>) : (<span className='product-add'>Set product image</span>)
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
                                <div className='hr-line mt-10' />
                                <div className="add-product-div-container-right-product-gallery-card-content">
                                    {
                                        productGallery === true ? (
                                            <div className='product-gallery-card-content-gallery'>
                                                <div className='add-product-div-container-right-product-gallery-card-content-gallery'></div>
                                                <div className='add-product-div-container-right-product-gallery-card-content-gallery'></div>
                                            </div>
                                        ) : ''
                                    }
                                    <p onClick={handileProductGallery}>
                                        {
                                            productGallery === true ? (<span className='product-remove'>Add product gallery images</span>) : (<span className='product-add'>Add product gallery images</span>)
                                        }
                                    </p>
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
                                        <Tabs variant="outline" defaultValue="allcategory">
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
                                        </Tabs>
                                    </div>
                                    <div className="add-product-div-container-right-product-category-card-content-add-category">
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
                                    </div>
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
                                        <Input />
                                        <button>Add</button>
                                    </div>
                                    <p className='add-product-div-container-right-product-tags-card-content-para'>Separate tags with commas</p>
                                    <div className="add-product-div-container-right-product-tags-card-content-details">
                                        {
                                            showProductTagsArray.map((producttag, index) => {
                                                return (
                                                    <p key={index} className='add-product-div-container-right-product-tags-card-content-details-individual'><img src={trash} alt="trash icon" width={11} /> {producttag.tags}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default AddProduct