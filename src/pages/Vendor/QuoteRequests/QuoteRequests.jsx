//import react packags
import React, { useMemo, useState } from 'react'

// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Menu, Text, Group, Input, Pagination, Select } from '@mantine/core'

//import mantine models
import { modals } from '@mantine/modals'


//import react router dom packages
import { Link } from 'react-router-dom'

//import icons
import anglebottom from '../../../assets/admin/table/anglebottom.webp'
import trash from '../../../assets/admin/table/dropdown/trash.png'
import arrowdown from '../../../assets/preheader/arrow-down.webp'

//import QuoteRequests css
import './QuoteRequests.css'

const QuoteRequests = () => {
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
            Header: 'Quote',
            accessor: 'Quote',
        },
        {
            Header: 'Product',
            accessor: 'Product',
        },
        {
            Header: 'Quantity',
            accessor: 'Quantity',
        },
        {
            Header: 'Seller',
            accessor: 'Seller',
        },
        {
            Header: 'Buyer',
            accessor: 'Buyer',
        },
        {
            Header: 'Status',
            accessor: 'Status',
        },
        {
            Header: "Seller's Bid",
            accessor: "Seller's Bid",
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
            "Quote": 1,
            "Product": "Navy blue skate shoes",
            "Quantity": 72,
            "Seller": "Karlens",
            "Buyer": "Lockyear",
            "Status": "Pending Quote",
            "Seller's Bid": 490,
            "Date": "3/21/2023"
        }, {
            "Quote": 2,
            "Product": "fashion women backpack",
            "Quantity": 7,
            "Seller": "Christin",
            "Buyer": "Burn",
            "Status": "Completed",
            "Seller's Bid": 104,
            "Date": "5/30/2023"
        }, {
            "Quote": 3,
            "Product": "fashion women backpack",
            "Quantity": 91,
            "Seller": "Madelyn",
            "Buyer": "Curbishley",
            "Status": "Pending Quote",
            "Seller's Bid": 399,
            "Date": "2/10/2023"
        }, {
            "Quote": 4,
            "Product": "fashion women backpack",
            "Quantity": 16,
            "Seller": "Tisha",
            "Buyer": "Napoli",
            "Status": "Completed",
            "Seller's Bid": 371,
            "Date": "4/13/2023"
        }, {
            "Quote": 5,
            "Product": "Navy blue skate shoes",
            "Quantity": 52,
            "Seller": "Gabe",
            "Buyer": "Eite",
            "Status": "Pending Quote",
            "Seller's Bid": 127,
            "Date": "12/1/2022"
        }, {
            "Quote": 6,
            "Product": "fashion women backpack",
            "Quantity": 13,
            "Seller": "Jacklin",
            "Buyer": "Driver",
            "Status": "Pending Quote",
            "Seller's Bid": 215,
            "Date": "1/21/2023"
        }, {
            "Quote": 7,
            "Product": "Black fashion women backpack",
            "Quantity": 55,
            "Seller": "Petronia",
            "Buyer": "Brik",
            "Status": "Completed",
            "Seller's Bid": 151,
            "Date": "1/29/2023"
        }, {
            "Quote": 8,
            "Product": "Black fashion women backpack",
            "Quantity": 40,
            "Seller": "Stormi",
            "Buyer": "Crosson",
            "Status": "Pending Quote",
            "Seller's Bid": 372,
            "Date": "4/7/2023"
        }, {
            "Quote": 9,
            "Product": "fashion women backpack",
            "Quantity": 64,
            "Seller": "Donovan",
            "Buyer": "Criple",
            "Status": "Pending Quote",
            "Seller's Bid": 280,
            "Date": "1/27/2023"
        }, {
            "Quote": 10,
            "Product": "Navy blue skate shoes",
            "Quantity": 69,
            "Seller": "Amity",
            "Buyer": "Vint",
            "Status": "Completed",
            "Seller's Bid": 454,
            "Date": "9/11/2023"
        }, {
            "Quote": 11,
            "Product": "Navy blue skate shoes",
            "Quantity": 66,
            "Seller": "Rickert",
            "Buyer": "Timothy",
            "Status": "Completed",
            "Seller's Bid": 156,
            "Date": "2/8/2023"
        }, {
            "Quote": 12,
            "Product": "Navy blue skate shoes",
            "Quantity": 41,
            "Seller": "Murdoch",
            "Buyer": "Mustchin",
            "Status": "Completed",
            "Seller's Bid": 224,
            "Date": "10/20/2022"
        }, {
            "Quote": 13,
            "Product": "Black fashion women backpack",
            "Quantity": 87,
            "Seller": "Bo",
            "Buyer": "Shobbrook",
            "Status": "Pending Quote",
            "Seller's Bid": 146,
            "Date": "5/4/2023"
        }, {
            "Quote": 14,
            "Product": "Black fashion women backpack",
            "Quantity": 10,
            "Seller": "Romain",
            "Buyer": "Knotte",
            "Status": "Completed",
            "Seller's Bid": 251,
            "Date": "11/26/2022"
        }, {
            "Quote": 15,
            "Product": "Black fashion women backpack",
            "Quantity": 70,
            "Seller": "Martina",
            "Buyer": "Betts",
            "Status": "Completed",
            "Seller's Bid": 250,
            "Date": "12/19/2022"
        }, {
            "Quote": 16,
            "Product": "fashion women backpack",
            "Quantity": 6,
            "Seller": "Lib",
            "Buyer": "Maddock",
            "Status": "Pending Quote",
            "Seller's Bid": 334,
            "Date": "3/22/2023"
        }, {
            "Quote": 17,
            "Product": "fashion women backpack",
            "Quantity": 61,
            "Seller": "Moll",
            "Buyer": "Selcraig",
            "Status": "Pending Quote",
            "Seller's Bid": 331,
            "Date": "6/3/2023"
        }, {
            "Quote": 18,
            "Product": "Navy blue skate shoes",
            "Quantity": 22,
            "Seller": "Elysha",
            "Buyer": "Petcher",
            "Status": "Completed",
            "Seller's Bid": 321,
            "Date": "4/7/2023"
        }, {
            "Quote": 19,
            "Product": "fashion women backpack",
            "Quantity": 31,
            "Seller": "Irma",
            "Buyer": "Halstead",
            "Status": "Pending Quote",
            "Seller's Bid": 195,
            "Date": "11/28/2022"
        }, {
            "Quote": 20,
            "Product": "fashion women backpack",
            "Quantity": 88,
            "Seller": "Cornelle",
            "Buyer": "Lissandre",
            "Status": "Pending Quote",
            "Seller's Bid": 323,
            "Date": "3/10/2023"
        }, {
            "Quote": 21,
            "Product": "fashion women backpack",
            "Quantity": 48,
            "Seller": "Aldus",
            "Buyer": "Dorricott",
            "Status": "Pending Quote",
            "Seller's Bid": 165,
            "Date": "6/1/2023"
        }, {
            "Quote": 22,
            "Product": "Navy blue skate shoes",
            "Quantity": 16,
            "Seller": "Sander",
            "Buyer": "Eton",
            "Status": "Completed",
            "Seller's Bid": 415,
            "Date": "10/17/2022"
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
            columns: useMemo(() => COLUMN, []),
            data: useMemo(() => tableData, []),
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
            <div className="products-div">
                <Card>
                    <div className="products-div-heading">
                        <h2>Quote Requests</h2>
                    </div>
                    <div className="products-div-table">
                        <div>
                            <div className='products-filter-container'>
                                <div className='products-filter-container-div1'>
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
                                <div className='products-filter-container-div2'>
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
                                <div className='products-filter-container-div3'>
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
                                <div className='products-filter-container-div5'>
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
                                <div className='products-filter-container-div4'>
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
        </div>
    )
}

export default QuoteRequests