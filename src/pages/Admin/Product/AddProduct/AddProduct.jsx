//import react packages
import React, { useState } from 'react'

//import AddProduct css
import './AddProduct.css'

//import mantine packages
import { Card, Input, Select, Tabs } from '@mantine/core';

import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill'; // Import React-Quill

import NumericInput from '../../../../components/Admin/Input/NumericInput';

//import icons
import anglebottom from '../../../../assets/preheader/arrow-down.webp'


const AddProduct = () => {

    const [editorHtml, setEditorHtml] = useState('');
    const [selectedType, setSelectedType] = useState('simple');
    const [maxValue, setMaxValue] = useState('');
    const [schedule, setSchedule] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

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

    const handleTypeChange = (value) => {
        setSelectedType(value);
    };

    const handleEditorChange = (html) => {
        setEditorHtml(html);
    };
    const handleSchedule = () => {
        setSchedule((prevSchedule) => !prevSchedule);
    };

    const handleStartDateChange = (value) => {
        setStartDate(value);
        // Calculate the minimum date for the second Datepicker
        // by adding one day to the selected start date
        const minEndDate = new Date(value);
        minEndDate.setDate(minEndDate.getDate() + 1);
        setEndDate(minEndDate);
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
                            <Card className='add-product-div-container-left-product-data-card'>
                                <div className="add-product-div-container-left-product-data-card-heading">
                                    <label>Product data</label>
                                    <Select
                                        rightSection={<img src={anglebottom} alt="anglebottom icon" width={14} />}
                                        placeholder="Select Type"
                                        data={selectTypeArray}
                                        value={selectedType} // Set the value prop to the selectedType state variable
                                        onChange={handleTypeChange} // Call handleTypeChange when the selection changes
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
                                                            value={maxValue}
                                                            onChange={setMaxValue}
                                                        />
                                                    </div>
                                                    <div className="add-product-div-container-left-product-data-card-tab-panel-grid grid-last">
                                                        <label>Sale price (₹)</label>
                                                        <NumericInput
                                                            value={maxValue}
                                                            onChange={setMaxValue}
                                                        />
                                                    </div>
                                                    {
                                                        schedule === true ? (
                                                            <div className="add-product-div-container-left-product-data-card-tab-panel-grid-sale">
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid">
                                                                    <label>Sale price Dates</label>
                                                                    <NumericInput
                                                                        value={maxValue}
                                                                        onChange={setMaxValue}
                                                                    />
                                                                </div>
                                                                <div className="add-product-div-container-left-product-data-card-tab-panel-grid grid-last">
                                                                    <label></label>
                                                                    <NumericInput
                                                                        value={maxValue}
                                                                        onChange={setMaxValue}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ) : ''
                                                    }
                                                    <p onClick={handleSchedule} className='add-product-div-container-left-product-data-card-tab-panel-grid-schedule'>{schedule === true ? 'Cancel' : 'Schedule'}</p>
                                                </Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="inventory">Messages tab content</Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="shipping">Settings tab content</Tabs.Panel>
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

                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="general">Gallery tab content</Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="inventory">Messages tab content</Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="shipping">Settings tab content</Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="attributes">Settings tab content</Tabs.Panel>
                                                <Tabs.Panel className='add-product-div-container-left-product-data-card-tab-panel' value="variations">Settings tab content</Tabs.Panel>
                                            </Tabs>
                                        )
                                    }
                                </div>
                            </Card>
                        </div>

                    </div>
                    <div className="add-product-div-container-right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct