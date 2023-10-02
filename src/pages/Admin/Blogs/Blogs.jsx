//import react packages
import React, { useMemo, useState } from 'react'
// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Menu, Text, Group, Input, Pagination, Select, Modal, Textarea, FileInput, TagsInput } from '@mantine/core'

//import mantine models
import { modals } from '@mantine/modals'

//import Blogs css
import './Blogs.css'

//import icons
import anglebottom from '../../../assets/admin/table/anglebottom.webp'
import plus from '../../../assets/admin/addpayout/plus.png'
import trash from '../../../assets/admin/table/dropdown/trash.png'
import edit from '../../../assets/admin/table/dropdown/edit.png'
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import ReactQuill from 'react-quill'

const Blogs = () => {

    const [blogsModalOpen, setBlogsModalOpen] = useState(false)
    const [editorHtml, setEditorHtml] = useState('');

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

    const handleEditorChange = (html) => {
        setEditorHtml(html);
    };
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

    const openDeleteModal = () =>
        modals.openConfirmModal({
            title: 'Delete your profile',
            children: (
                <Text size="sm">
                    Are you sure you want to delete your profile? This action is destructive and you will have
                    to contact support to restore your data.
                </Text>
            ),
            labels: { confirm: 'Delete account', cancel: "No don't delete it" },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => console.log('Confirmed'),
        });

    // Props Column
    const COLUMN = [
        {
            Header: 'Id',
            accessor: 'Id',
        },
        {
            Header: 'Title',
            accessor: 'Title',
        },
        {
            Header: 'Category',
            accessor: 'Category',
        },
        {
            Header: 'Date',
            accessor: 'Date',
        },
        {
            Header: 'Options',
            accessor: (() => <div>
                <Menu classNames='table-selectbox'>
                    <Menu.Target>
                        <button className='table-select-dropdown'><img src={anglebottom} alt='anglebottom' width={15} /></button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item onClick={() => { setBlogsModalOpen(true) }}>
                            <img src={edit} alt='block icon' width={15} />&nbsp;&nbsp;Edit
                        </Menu.Item>
                        <Menu.Item onClick={openDeleteModal}>
                            <img src={trash} alt='trash icon' width={15} />&nbsp;&nbsp; Delete
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
            )

        },
    ]

    const tableData = [
        {
            "Id": 1,
            "Title": "Colorful women scarfs",
            "Category": "Backpacks",
            "Date": "7/21/2023"
        }, {
            "Id": 2,
            "Title": "Women's ankle boot with different colors",
            "Category": "Scarfs",
            "Date": "2/2/2023"
        }, {
            "Id": 3,
            "Title": "Women's ankle boot with different colors",
            "Category": "Backpacks",
            "Date": "5/2/2023"
        }, {
            "Id": 4,
            "Title": "Navy polka dot dress",
            "Category": "Backpacks",
            "Date": "7/25/2023"
        }, {
            "Id": 5,
            "Title": "Colorful women scarfs",
            "Category": "Boots",
            "Date": "5/8/2023"
        }, {
            "Id": 6,
            "Title": "Colorful women scarfs",
            "Category": "Dresses",
            "Date": "9/18/2023"
        }, {
            "Id": 7,
            "Title": "Women's ankle boot with different colors",
            "Category": "Backpacks",
            "Date": "3/7/2023"
        }, {
            "Id": 8,
            "Title": "Women's ankle boot with different colors",
            "Category": "Dresses",
            "Date": "8/27/2023"
        }, {
            "Id": 9,
            "Title": "Navy polka dot dress",
            "Category": "Backpacks",
            "Date": "6/14/2023"
        }, {
            "Id": 10,
            "Title": "Women's ankle boot with different colors",
            "Category": "Boots",
            "Date": "7/2/2023"
        }, {
            "Id": 11,
            "Title": "Colorful women scarfs",
            "Category": "Scarfs",
            "Date": "2/22/2023"
        }, {
            "Id": 12,
            "Title": "Colorful women scarfs",
            "Category": "Boots",
            "Date": "12/22/2022"
        }, {
            "Id": 13,
            "Title": "Women's ankle boot with different colors",
            "Category": "Backpacks",
            "Date": "6/22/2023"
        }, {
            "Id": 14,
            "Title": "Women's ankle boot with different colors",
            "Category": "Scarfs",
            "Date": "11/19/2022"
        }, {
            "Id": 15,
            "Title": "Navy polka dot dress",
            "Category": "Boots",
            "Date": "7/9/2023"
        }, {
            "Id": 16,
            "Title": "Navy polka dot dress",
            "Category": "Backpacks",
            "Date": "9/30/2022"
        }, {
            "Id": 17,
            "Title": "Colorful women scarfs",
            "Category": "Boots",
            "Date": "12/16/2022"
        }, {
            "Id": 18,
            "Title": "Navy polka dot dress",
            "Category": "Scarfs",
            "Date": "11/27/2022"
        }, {
            "Id": 19,
            "Title": "Colorful women scarfs",
            "Category": "Backpacks",
            "Date": "5/28/2023"
        }, {
            "Id": 20,
            "Title": "Women's ankle boot with different colors",
            "Category": "Backpacks",
            "Date": "6/3/2023"
        }
    ]

    // React Table
    const {
        getTableBodyProps,
        getTableProps,
        page,
        headerGroups,
        prepareRow,
        state,
        setGlobalFilter,
        nextPage,
        previousPage,
        pageOptions,
        canPreviousPage,
        canNextPage,
        setPageSize,
        gotoPage,
        pageCount
    }
        = useTable({
            columns: useMemo(() => COLUMN, []), // Wrap COLUMN in useMemo
            data: useMemo(() => tableData, []), // Wrap tableData in useMemo
        },
            useGlobalFilter,
            usePagination
        )

    // Global Filter
    const { globalFilter, pageIndex } = state


    // Status Filter 

    return (
        <div>
            <div className="blogs-div">
                <Card className='blogs-div-card'>
                    <div className="blogs-div-card-heading">
                        <h4>Blog Posts</h4>
                        <button onClick={() => { setBlogsModalOpen(true) }}><img src={plus} width="11" alt='plus icon' />Add Post</button>
                    </div>
                    <div className="blogs-div-card-body">
                        <div className='transactions-filter-container'>
                            <div className='transactions-filter-container-div1'>
                                <Select
                                    label='Show'
                                    onChange={(e) => setPageSize(Number(e))}
                                    rightSection={<img src={arrowdown} width={10} alt="arrow down icon" />}
                                    defaultValue={'10'}
                                    data={[
                                        { value: '10', label: '10', key: '10' },
                                        { value: '20', label: '20', key: '20' },
                                        { value: '30', label: '30', key: '30' },
                                        { value: '40', label: '40', key: '40' },
                                        { value: pageCount * 10, label: 'All', key: 'All' },
                                    ]}
                                />
                            </div>
                            <div className='transactions-filter-container-div4'>
                                <Input.Wrapper label="Search" maw={320} mx="auto">
                                    <Input value={globalFilter || ''} onChange={(e) => setGlobalFilter(e.target.value)} placeholder='Search Filter' />
                                </Input.Wrapper>
                            </div>
                        </div>
                        <div className='table-style'>
                            <table {...getTableProps()} className="custum-table-style">
                                <thead>
                                    {
                                        headerGroups.map((headerGroup) => (
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {
                                                    headerGroup.headers.map((header) => (
                                                        <th{...header.getHeaderProps()}>
                                                            {
                                                                header.render('Header')
                                                            }
                                                        </th>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {page.length > 0 ? (
                                        page.map((row) => {
                                            prepareRow(row);
                                            return (
                                                <tr {...row.getRowProps()}>
                                                    {row.cells.map((cell) => (
                                                        <td {...cell.getCellProps()}>
                                                            {cell.render('Cell')}
                                                        </td>
                                                    ))}
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={headerGroups[0].headers.length}>
                                                Nothing Found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className='react-table-pagination'>
                            <Pagination.Root
                                total={pageOptions.length}
                                defaultValue={pageIndex + 1}
                                value={pageIndex + 1}
                                onChange={(e) => gotoPage(e - 1)}
                            >
                                <Group spacing={5} position="center">
                                    <Pagination.First
                                        disabled={!canPreviousPage}
                                        onClick={() => gotoPage(0)}
                                    />
                                    <Pagination.Previous
                                        disabled={!canPreviousPage}
                                        onClick={() => {
                                            previousPage();
                                            gotoPage(pageIndex - 1);
                                        }}
                                    />
                                    <Pagination.Items value={2} />
                                    <Pagination.Next
                                        disabled={!canNextPage}
                                        onClick={() => {
                                            nextPage();
                                            gotoPage(pageIndex + 1);
                                        }}
                                    />
                                    <Pagination.Last
                                        disabled={!canNextPage}
                                        onClick={() => gotoPage(pageCount - 1)}
                                    />
                                </Group>
                            </Pagination.Root>
                        </div>
                    </div>
                </Card>
            </div>

            <Modal
                zIndex={12121}
                size="xl"
                opened={blogsModalOpen}
                onClose={() => setBlogsModalOpen(false)}
                title=""
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='sellerbalance-edit-modal'
            >
                <div className="sellerbalance-edit-modal-header">
                    <h4>Add Post</h4>
                </div>
                <div className="sellerbalance-edit-modal-body">
                    <div className="sellerbalance-edit-modal-body-content">
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <Input.Wrapper label="Title" description="" error="">
                                <Input placeholder='Title' />
                            </Input.Wrapper>
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <Input.Wrapper label="Slug" description="" error="">
                                <Input placeholder='Slug' />
                            </Input.Wrapper>
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <Textarea
                                label="Summery & Description"
                                placeholder="Summery & Description"
                                autosize
                                minRows={2}
                            />
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input padding0">
                            <Select
                                label="Category"
                                data={dataCategory}
                                placeholder="Select Category"
                                nothingFound="Nothing found"
                                searchable
                                creatable
                                rightSection={<img src={arrowdown} alt="arrowdown icon" width={14} />}
                                getCreateLabel={(query) => `+ Create ${query}`}
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    setDataCategory((current) => [...current, item]);
                                    return item;
                                }}
                            />

                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input padding0">
                            <Select
                                label="Sub Category"
                                data={dataSubCategory}
                                placeholder="Select Sub Category"
                                nothingFound="Nothing found"
                                searchable
                                creatable
                                rightSection={<img src={arrowdown} alt="arrowdown icon" width={14} />}
                                getCreateLabel={(query) => `+ Create ${query}`}
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    setDataSubCategory((current) => [...current, item]);
                                    return item;
                                }}
                            />

                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input padding0">
                            <Select
                                label="Child Category"
                                data={dataChildCategory}
                                placeholder="Select Child Category"
                                nothingFound="Nothing found"
                                searchable
                                creatable
                                rightSection={<img src={arrowdown} alt="arrowdown icon" width={14} />}
                                getCreateLabel={(query) => `+ Create ${query}`}
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    setDataChildCategory((current) => [...current, item]);
                                    return item;
                                }}
                            />
                        </div>
                        {/* <div className="sellerbalance-edit-modal-body-content-input">
                            <TagsInput label="Tags" placeholder="Enter tag" />
                        </div> */}
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <FileInput
                                label="Image"
                                placeholder='Click To Upload'
                            />
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <label>Product description</label>
                            <ReactQuill
                                className='quill-style'
                                value={editorHtml}
                                onChange={handleEditorChange}
                                modules={modules}
                            />
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-button ht-20">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Blogs