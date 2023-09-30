//import react packages
import React, { useMemo, useState } from 'react'


// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Menu, Text, Group, Input, Pagination, Select, Modal } from '@mantine/core'

//import mantine models
import { modals } from '@mantine/modals'


//import react router dom packages
import { Link } from 'react-router-dom'

//import ExpiredProducts css
import './ExpiredProducts.css'

import NumericInput from '../../../../components/UI/Input/NumericInput'

//import icons
import anglebottom from '../../../../assets/admin/table/anglebottom.webp'
import info from '../../../../assets/admin/table/dropdown/info.png'
import trash from '../../../../assets/admin/table/dropdown/trash.png'
import edit from '../../../../assets/admin/table/dropdown/edit.png'
import plusfilled from '../../../../assets/admin/table/dropdown/plus-filled.png'
import minus from '../../../../assets/admin/table/dropdown/minus.png'
import arrowdown from '../../../../assets/preheader/arrow-down.webp'

const ExpiredProducts = () => {

    const [specialOffers, setSpecialOffers] = useState(false);
    const [featuredOffers, setFeaturedOffers] = useState(false);
    const [featuredModalOpen, setFeaturedModalOpen] = useState(false)
    const [maxValue, setMaxValue] = useState('1');

    const handlespecialOffers = () => {
        setSpecialOffers(!specialOffers);
    };

    const handlefeaturedOffers = () => {
        setFeaturedOffers(!featuredOffers);
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
            Header: 'Product',
            accessor: 'Product',
        },
        {
            Header: 'SKU',
            accessor: 'SKU',
        },
        {
            Header: 'Category',
            accessor: 'Category',
        },
        {
            Header: 'User',
            accessor: 'User',
        },
        {
            Header: 'Stock',
            accessor: 'Stock',
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
                        <Text component={Link} to="/expiredproductsdetails_individual">
                            <Menu.Item>
                                <img src={info} alt='info icon' width={15} />&nbsp;&nbsp;View Details
                            </Menu.Item>
                        </Text>
                        <Menu.Item onClick={() => { setFeaturedModalOpen(true) }}>
                            {
                                featuredOffers ? <><img src={plusfilled} alt='check icon' width={15} />&nbsp;&nbsp;Add to Featured</> : <><img src={minus} alt='check icon' width={15} />&nbsp;&nbsp;Remove From Featured</>
                            }

                        </Menu.Item>
                        <Menu.Item onClick={handlespecialOffers}>
                            {
                                specialOffers ? <>
                                    <img src={minus} alt='block icon' width={15} />
                                    &nbsp;&nbsp;Remove From Special Offers
                                </> : <>
                                    <img src={plusfilled} alt='block icon' width={15} />
                                    &nbsp;&nbsp;Add to Special Offers
                                </>
                            }
                        </Menu.Item>
                        <Text component={Link} to="/addproduct">
                            <Menu.Item>
                                <img src={edit} alt='block icon' width={15} />&nbsp;&nbsp;Edit
                            </Menu.Item>
                        </Text>
                        <Menu.Item onClick={openDeleteModal}>
                            <img src={trash} alt='trash icon' width={15} />&nbsp;&nbsp; Delete
                        </Menu.Item>
                        <Menu.Item onClick={openDeleteModal}>
                            <img src={trash} alt='trash icon' width={15} />&nbsp;&nbsp; Delete Permanently
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
            "Product": "Colorful women scarfs",
            "SKU": "G251A129I7",
            "Category": "Backpacks",
            "User": "Nikola",
            "Stock": "In Stock",
            "Date": "7/21/2023"
        }, {
            "Id": 2,
            "Product": "Women's ankle boot with different colors",
            "SKU": "G251A129I7",
            "Category": "Scarfs",
            "User": "Rand",
            "Stock": "Out of Stock",
            "Date": "2/2/2023"
        }, {
            "Id": 3,
            "Product": "Women's ankle boot with different colors",
            "SKU": "G251A129I7",
            "Category": "Backpacks",
            "User": "Shawn",
            "Stock": "In Stock",
            "Date": "5/2/2023"
        }, {
            "Id": 4,
            "Product": "Navy polka dot dress",
            "SKU": "G251A129I7",
            "Category": "Backpacks",
            "User": "Rubin",
            "Stock": "In Stock",
            "Date": "7/25/2023"
        }, {
            "Id": 5,
            "Product": "Colorful women scarfs",
            "SKU": "G251A129I7",
            "Category": "Boots",
            "User": "Elwood",
            "Stock": "Out of Stock",
            "Date": "5/8/2023"
        }, {
            "Id": 6,
            "Product": "Colorful women scarfs",
            "SKU": "G251A129I7",
            "Category": "Dresses",
            "User": "Chris",
            "Stock": "In Stock",
            "Date": "9/18/2023"
        }, {
            "Id": 7,
            "Product": "Women's ankle boot with different colors",
            "SKU": "G251A129I7",
            "Category": "Backpacks",
            "User": "Myron",
            "Stock": "In Stock",
            "Date": "3/7/2023"
        }, {
            "Id": 8,
            "Product": "Women's ankle boot with different colors",
            "SKU": "G251A129I7",
            "Category": "Dresses",
            "User": "Ferguson",
            "Stock": "Out of Stock",
            "Date": "8/27/2023"
        }, {
            "Id": 9,
            "Product": "Navy polka dot dress",
            "SKU": "G251A129I7",
            "Category": "Backpacks",
            "User": "Sullivan",
            "Stock": "In Stock",
            "Date": "6/14/2023"
        }, {
            "Id": 10,
            "Product": "Women's ankle boot with different colors",
            "SKU": "G251A129I7",
            "Category": "Boots",
            "User": "Land",
            "Stock": "In Stock",
            "Date": "7/2/2023"
        }, {
            "Id": 11,
            "Product": "Colorful women scarfs",
            "SKU": "G251A129I7",
            "Category": "Scarfs",
            "User": "Robinson",
            "Stock": "In Stock",
            "Date": "2/22/2023"
        }, {
            "Id": 12,
            "Product": "Colorful women scarfs",
            "SKU": "G251A129I7",
            "Category": "Boots",
            "User": "Ulises",
            "Stock": "In Stock",
            "Date": "12/22/2022"
        }, {
            "Id": 13,
            "Product": "Women's ankle boot with different colors",
            "SKU": "G251A129I7",
            "Category": "Backpacks",
            "User": "Myles",
            "Stock": "In Stock",
            "Date": "6/22/2023"
        }, {
            "Id": 14,
            "Product": "Women's ankle boot with different colors",
            "SKU": "G251A129I7",
            "Category": "Scarfs",
            "User": "Vick",
            "Stock": "Out of Stock",
            "Date": "11/19/2022"
        }, {
            "Id": 15,
            "Product": "Navy polka dot dress",
            "SKU": "G251A129I7",
            "Category": "Boots",
            "User": "Elden",
            "Stock": "In Stock",
            "Date": "7/9/2023"
        }, {
            "Id": 16,
            "Product": "Navy polka dot dress",
            "SKU": "G251A129I7",
            "Category": "Backpacks",
            "User": "Nelson",
            "Stock": "In Stock",
            "Date": "9/30/2022"
        }, {
            "Id": 17,
            "Product": "Colorful women scarfs",
            "SKU": "G251A129I7",
            "Category": "Boots",
            "User": "Kimbell",
            "Stock": "In Stock",
            "Date": "12/16/2022"
        }, {
            "Id": 18,
            "Product": "Navy polka dot dress",
            "SKU": "G251A129I7",
            "Category": "Scarfs",
            "User": "Demetri",
            "Stock": "Out of Stock",
            "Date": "11/27/2022"
        }, {
            "Id": 19,
            "Product": "Colorful women scarfs",
            "SKU": "G251A129I7",
            "Category": "Backpacks",
            "User": "Banky",
            "Stock": "In Stock",
            "Date": "5/28/2023"
        }, {
            "Id": 20,
            "Product": "Women's ankle boot with different colors",
            "SKU": "G251A129I7",
            "Category": "Backpacks",
            "User": "Giavani",
            "Stock": "In Stock",
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
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [selectedSubStatus, setSelectedSubStatus] = useState('All');
    const [selectedStockStatus, setSelectedStockStatus] = useState('All');



    return (
        <div>
            <div className="expiredproducts-div">
                <Card>
                    <div className="expiredproducts-div-heading">
                        <h2>Expired Products</h2>
                    </div>
                    <div className="expiredproducts-div-table">
                        <div>
                            <div className='expiredproducts-filter-container'>
                                <div className='expiredproducts-filter-container-div1'>
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
                                <div className='expiredproducts-filter-container-div2'>
                                    <Select
                                        label='Category'
                                        onChange={(e) => setSelectedStatus(e)}
                                        rightSection={<img src={arrowdown} width={10} alt="arrow down icon" />}
                                        defaultValue={'All'}
                                        data={[
                                            { value: 'All', label: 'All' },
                                            { value: 'Backpacks', label: 'Backpacks' },
                                            { value: 'Scarfs', label: 'Scarfs' },
                                            { value: 'Boots', label: 'Boots' },
                                        ]}
                                    />
                                </div>
                                <div className='expiredproducts-filter-container-div3'>
                                    <Select
                                        label='Sub Category'
                                        onChange={(e) => setSelectedSubStatus(e)}
                                        rightSection={<img src={arrowdown} width={10} alt="arrow down icon" />}
                                        defaultValue={'All'}
                                        data={[
                                            { value: 'All', label: 'All' },
                                            { value: 'Backpacks', label: 'Backpacks' },
                                            { value: 'Scarfs', label: 'Scarfs' },
                                            { value: 'Boots', label: 'Boots' },
                                        ]}
                                    />
                                </div>
                                <div className='expiredproducts-filter-container-div5'>
                                    <Select
                                        label='Stock'
                                        onChange={(e) => setSelectedStockStatus(e)}
                                        rightSection={<img src={arrowdown} width={10} alt="arrow down icon" />}
                                        defaultValue={'All'}
                                        data={[
                                            { value: 'All', label: 'All' },
                                            { value: 'In Stock', label: 'In Stock' },
                                            { value: 'Out of Stock', label: 'Out of Stock' },
                                        ]}
                                    />
                                </div>
                                <div className='expiredproducts-filter-container-div4'>
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
                                            page
                                                .filter(row => selectedStatus === 'All' || row.values.Category === selectedStatus)
                                                .filter(row => selectedSubStatus === 'All' || row.values.Category === selectedSubStatus)
                                                .filter(row => selectedStockStatus === 'All' || row.values.Stock === selectedStockStatus)
                                                .map((row) => {
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
                    </div>
                </Card>
            </div>

            <Modal
                zIndex={12121}
                size="md"
                opened={featuredModalOpen}
                onClose={() => setFeaturedModalOpen(false)}
                title=""
                centered
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='sellerbalance-edit-modal'
            >
                <div className="sellerbalance-edit-modal-header">
                    <h4>Add to Featured</h4>
                </div>
                <div className="sellerbalance-edit-modal-body">
                    <div className="sellerbalance-edit-modal-body-content">
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <NumericInput
                                value={maxValue}
                                onChange={setMaxValue}
                                label="Number of Days"
                            />
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-button">
                            <button onClick={handlefeaturedOffers}>Submit</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ExpiredProducts