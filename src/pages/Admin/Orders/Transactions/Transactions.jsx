//import react packages
import React, { useMemo, useState } from 'react'


// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Menu, Text, Group, Input, Pagination, Select } from '@mantine/core'

//import mantine models
import { modals } from '@mantine/modals'


//import react router dom packages
import { Link } from 'react-router-dom'

//import Transactions css
import './Transactions.css'

//import icons
import arrowdown from '../../../../assets/preheader/arrow-down.webp'
import anglebottom from '../../../../assets/admin/table/anglebottom.webp'
import trash from '../../../../assets/admin/table/dropdown/trash.png'


const Transactions = () => {
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
            Header: 'Order Id',
            accessor: 'Order_Id'
        },
        {
            Header: 'Buyer',
            accessor: 'Buyer'
        },
        {
            Header: 'Total',
            accessor: 'Total'
        },
        {
            Header: 'Currency',
            accessor: 'Currency'
        },
        {
            Header: 'Status',
            accessor: 'Status',
        },
        {
            Header: 'Payment Status',
            accessor: 'Payment_Status'
        },
        {
            Header: 'Updated',
            accessor: 'Updated'
        },
        {
            Header: 'Date',
            accessor: 'Date'
        },
        {
            Header: 'Options',
            accessor: (() => <div>
                <Menu classNames='table-selectbox'>
                    <Menu.Target>
                        <button className='table-select-dropdown'>Select an option <img src={anglebottom} alt='anglebottom' width={15} /></button>
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
            "Order_Id": 1,
            "Buyer": "Abe",
            "Total": "$69.06",
            "Currency": "PAB",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "5/26/2023",
            "Date": "12/21/2022",
            "Options": null
        },
        {
            "Order_Id": 2,
            "Buyer": "Skippie",
            "Total": "$5.22",
            "Currency": "ARS",
            "Status": "Failed",
            "Payment_Status": "Completed",
            "Updated": "7/26/2023",
            "Date": "12/3/2022",
            "Options": null
        },
        {
            "Order_Id": 3,
            "Buyer": "Myrah",
            "Total": "$70.13",
            "Currency": "SEK",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "1/2/2023",
            "Date": "9/20/2022",
            "Options": null
        },
        {
            "Order_Id": 4,
            "Buyer": "Darby",
            "Total": "$21.35",
            "Currency": "PEN",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "5/6/2023",
            "Date": "3/4/2023",
            "Options": null
        },
        {
            "Order_Id": 5,
            "Buyer": "Markos",
            "Total": "$73.81",
            "Currency": "CDF",
            "Status": "Completed",
            "Payment_Status": "Completed",
            "Updated": "12/21/2022",
            "Date": "11/29/2022",
            "Options": null
        },
        {
            "Order_Id": 6,
            "Buyer": "Desmund",
            "Total": "$60.19",
            "Currency": "PLN",
            "Status": "Pending",
            "Payment_Status": "Pending",
            "Updated": "3/10/2023",
            "Date": "8/22/2023",
            "Options": null
        },
        {
            "Order_Id": 7,
            "Buyer": "Barbabra",
            "Total": "$19.01",
            "Currency": "PHP",
            "Status": "Pending",
            "Payment_Status": "Pending",
            "Updated": "7/18/2023",
            "Date": "10/29/2022",
            "Options": null
        },
        {
            "Order_Id": 8,
            "Buyer": "Ingrid",
            "Total": "$27.14",
            "Currency": "KRW",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "6/19/2023",
            "Date": "3/25/2023",
            "Options": null
        },
        {
            "Order_Id": 9,
            "Buyer": "Jaine",
            "Total": "$51.73",
            "Currency": "PEN",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "5/4/2023",
            "Date": "6/1/2023",
            "Options": null
        },
        {
            "Order_Id": 10,
            "Buyer": "Ewen",
            "Total": "$27.48",
            "Currency": "IDR",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "3/27/2023",
            "Date": "7/3/2023",
            "Options": null
        },
        {
            "Order_Id": 11,
            "Buyer": "Kayley",
            "Total": "$88.13",
            "Currency": "THB",
            "Status": "Failed",
            "Payment_Status": "Completed",
            "Updated": "9/25/2022",
            "Date": "1/30/2023",
            "Options": null
        },
        {
            "Order_Id": 12,
            "Buyer": "Sibylle",
            "Total": "$3.91",
            "Currency": "IDR",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "10/12/2022",
            "Date": "12/18/2022",
            "Options": null
        },
        {
            "Order_Id": 13,
            "Buyer": "Emeline",
            "Total": "$74.82",
            "Currency": "RUB",
            "Status": "Completed",
            "Payment_Status": "Completed",
            "Updated": "10/14/2022",
            "Date": "9/22/2022",
            "Options": null
        },
        {
            "Order_Id": 14,
            "Buyer": "Sonni",
            "Total": "$96.72",
            "Currency": "CNY",
            "Status": "Completed",
            "Payment_Status": "Completed",
            "Updated": "4/23/2023",
            "Date": "3/9/2023",
            "Options": null
        },
        {
            "Order_Id": 15,
            "Buyer": "Justina",
            "Total": "$61.32",
            "Currency": "MXN",
            "Status": "Completed",
            "Payment_Status": "Failed",
            "Updated": "11/1/2022",
            "Date": "4/26/2023",
            "Options": null
        },
        {
            "Order_Id": 16,
            "Buyer": "Austin",
            "Total": "$71.11",
            "Currency": "IDR",
            "Status": "Pending",
            "Payment_Status": "Pending",
            "Updated": "1/30/2023",
            "Date": "2/4/2023",
            "Options": null
        },
        {
            "Order_Id": 17,
            "Buyer": "Lesli",
            "Total": "$4.44",
            "Currency": "THB",
            "Status": "Pending",
            "Payment_Status": "Pending",
            "Updated": "7/27/2023",
            "Date": "2/7/2023",
            "Options": null
        },
        {
            "Order_Id": 18,
            "Buyer": "Cindy",
            "Total": "$2.36",
            "Currency": "CNY",
            "Status": "Pending",
            "Payment_Status": "Pending",
            "Updated": "5/8/2023",
            "Date": "3/11/2023",
            "Options": null
        },
        {
            "Order_Id": 19,
            "Buyer": "Dorie",
            "Total": "$80.27",
            "Currency": "CNY",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "6/21/2023",
            "Date": "4/4/2023",
            "Options": null
        },
        {
            "Order_Id": 20,
            "Buyer": "Ginger",
            "Total": "$48.98",
            "Currency": "CNY",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "7/4/2023",
            "Date": "11/14/2022",
            "Options": null
        },
        {
            "Order_Id": 21,
            "Buyer": "Felisha",
            "Total": "$90.61",
            "Currency": "IDR",
            "Status": "Pending",
            "Payment_Status": "Pending",
            "Updated": "1/30/2023",
            "Date": "10/13/2022",
            "Options": null
        },
        {
            "Order_Id": 22,
            "Buyer": "Emelita",
            "Total": "$25.89",
            "Currency": "COP",
            "Status": "Completed",
            "Payment_Status": "Completed",
            "Updated": "1/27/2023",
            "Date": "2/23/2023",
            "Options": null
        },
        {
            "Order_Id": 23,
            "Buyer": "Rea",
            "Total": "$3.44",
            "Currency": "BRL",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "1/7/2023",
            "Date": "9/10/2022",
            "Options": null
        },
        {
            "Order_Id": 24,
            "Buyer": "Wandie",
            "Total": "$81.54",
            "Currency": "PHP",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "2/22/2023",
            "Date": "5/10/2023",
            "Options": null
        },
        {
            "Order_Id": 25,
            "Buyer": "Joyce",
            "Total": "$79.69",
            "Currency": "SEK",
            "Status": "Pending",
            "Payment_Status": "Pending",
            "Updated": "9/29/2022",
            "Date": "7/28/2023",
            "Options": null
        },
        {
            "Order_Id": 26,
            "Buyer": "Saundra",
            "Total": "$9.28",
            "Currency": "ILS",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "10/23/2022",
            "Date": "7/10/2023",
            "Options": null
        },
        {
            "Order_Id": 27,
            "Buyer": "Mable",
            "Total": "$25.81",
            "Currency": "EUR",
            "Status": "Completed",
            "Payment_Status": "Failed",
            "Updated": "11/6/2022",
            "Date": "10/5/2022",
            "Options": null
        },
        {
            "Order_Id": 28,
            "Buyer": "Lynea",
            "Total": "$40.64",
            "Currency": "RUB",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "7/11/2023",
            "Date": "8/16/2023",
            "Options": null
        },
        {
            "Order_Id": 29,
            "Buyer": "Jeffie",
            "Total": "$62.10",
            "Currency": "SEK",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "9/29/2022",
            "Date": "7/28/2023",
            "Options": null
        },
        {
            "Order_Id": 30,
            "Buyer": "Rosaleen",
            "Total": "$4.19",
            "Currency": "PKR",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "11/6/2022",
            "Date": "6/10/2023",
            "Options": null
        },
        {
            "Order_Id": 31,
            "Buyer": "Ester",
            "Total": "$80.71",
            "Currency": "BAM",
            "Status": "Pending",
            "Payment_Status": "Pending",
            "Updated": "12/6/2022",
            "Date": "10/4/2022",
            "Options": null
        },
        {
            "Order_Id": 32,
            "Buyer": "Taddeo",
            "Total": "$69.49",
            "Currency": "USD",
            "Status": "Completed",
            "Payment_Status": "Pending",
            "Updated": "11/5/2022",
            "Date": "12/5/2022",
            "Options": null
        },
        {
            "Order_Id": 33,
            "Buyer": "Larina",
            "Total": "$67.04",
            "Currency": "JPY",
            "Status": "Failed",
            "Payment_Status": "Pending",
            "Updated": "5/14/2023",
            "Date": "10/7/2022",
            "Options": null
        },
        {
            "Order_Id": 34,
            "Buyer": "Delano",
            "Total": "$51.58",
            "Currency": "SEK",
            "Status": "Completed",
            "Payment_Status": "Completed",
            "Updated": "6/22/2023",
            "Date": "1/18/2023",
            "Options": null
        },
        {
            "Order_Id": 35,
            "Buyer": "Daveta",
            "Total": "$43.89",
            "Currency": "IDR",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "2/2/2023",
            "Date": "11/25/2022",
            "Options": null
        },
        {
            "Order_Id": 36,
            "Buyer": "Heinrick",
            "Total": "$12.29",
            "Currency": "CNY",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "8/26/2023",
            "Date": "3/10/2023",
            "Options": null
        },
        {
            "Order_Id": 37,
            "Buyer": "Kelsy",
            "Total": "$16.29",
            "Currency": "CNY",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "8/31/2022",
            "Date": "2/12/2023",
            "Options": null
        },
        {
            "Order_Id": 38,
            "Buyer": "Nickie",
            "Total": "$64.89",
            "Currency": "IDR",
            "Status": "Completed",
            "Payment_Status": "Completed",
            "Updated": "8/24/2023",
            "Date": "10/27/2022",
            "Options": null
        },
        {
            "Order_Id": 39,
            "Buyer": "Cly",
            "Total": "$23.64",
            "Currency": "CNY",
            "Status": "Pending",
            "Payment_Status": "Completed",
            "Updated": "11/16/2022",
            "Date": "4/28/2023",
            "Options": null
        },
        {
            "Order_Id": 40,
            "Buyer": "Levey",
            "Total": "$77.24",
            "Currency": "PEN",
            "Status": "Pending",
            "Payment_Status": "Pending",
            "Updated": "11/17/2022",
            "Date": "12/9/2022",
            "Options": null
        },
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
    const [selectedPaymentStatus, setSelectedPaymentStatus] = useState('All');



    return (
        <div>
            <div className="transactions-div">
                <Card>
                    <div className="transactions-div-heading">
                        <h2>Transactions</h2>
                    </div>
                    <div className="transactions-div-table">
                        <div>
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
                                            page
                                                .filter(row => selectedStatus === 'All' || row.values.Status === selectedStatus)
                                                .filter(row => selectedPaymentStatus === 'All' || row.values.Payment_Status === selectedPaymentStatus)
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

export default Transactions