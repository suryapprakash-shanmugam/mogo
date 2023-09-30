//import react packages
import React, { useMemo, useState } from 'react'


// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Menu, Text, Group, Input, Pagination, Select } from '@mantine/core'

//import mantine models
import { modals } from '@mantine/modals'

//import Earnings css
import './Earnings.css'

//import icons
import arrowdown from '../../../../assets/preheader/arrow-down.webp'
import anglebottom from '../../../../assets/admin/table/anglebottom.webp'
import trash from '../../../../assets/admin/table/dropdown/trash.png'


const Earnings = () => {
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
            accessor: 'id'
        },
        {
            Header: 'Order',
            accessor: 'Order'
        },
        {
            Header: 'User',
            accessor: 'User'
        },
        {
            Header: 'Total',
            accessor: 'Total'
        },
        {
            Header: 'VAT',
            accessor: 'VAT',
        },
        {
            Header: 'Commission',
            accessor: 'Commission'
        },
        {
            Header: 'Discount Coupon',
            accessor: 'Discount_Coupon'
        },
        {
            Header: 'Shipping Cost',
            accessor: 'Shipping_Cost'
        },
        {
            Header: 'Earned Amount',
            accessor: 'Earned_Amount'
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
        { "id": 1, "Order": 1, "User": "Pebrook", "Total": "$520.91", "VAT": "$8.26", "Commission": "$2.96", "Discount_Coupon": "$3.96", "Shipping_Cost": "$4.51", "Earned_Amount": "$1.11", "Date": "9/23/2022" },
        { "id": 2, "Order": 2, "User": "Vincenty", "Total": "$815.63", "VAT": "$1.42", "Commission": "$2.35", "Discount_Coupon": "$1.43", "Shipping_Cost": "$6.52", "Earned_Amount": "$3.73", "Date": "11/3/2022" },
        { "id": 3, "Order": 3, "User": "Allayne", "Total": "$954.20", "VAT": "$6.66", "Commission": "$2.87", "Discount_Coupon": "$3.23", "Shipping_Cost": "$6.10", "Earned_Amount": "$1.45", "Date": "5/29/2023" },
        { "id": 4, "Order": 4, "User": "Esra", "Total": "$339.43", "VAT": "$7.69", "Commission": "$0.69", "Discount_Coupon": "$0.98", "Shipping_Cost": "$2.43", "Earned_Amount": "$1.30", "Date": "8/23/2023" },
        { "id": 5, "Order": 5, "User": "Bill", "Total": "$253.42", "VAT": "$1.45", "Commission": "$2.27", "Discount_Coupon": "$3.75", "Shipping_Cost": "$1.47", "Earned_Amount": "$0.39", "Date": "7/23/2023" },
        { "id": 6, "Order": 6, "User": "Burgess", "Total": "$19.84", "VAT": "$7.17", "Commission": "$1.67", "Discount_Coupon": "$1.88", "Shipping_Cost": "$8.77", "Earned_Amount": "$1.35", "Date": "11/22/2022" },
        { "id": 7, "Order": 7, "User": "Oates", "Total": "$156.40", "VAT": "$0.85", "Commission": "$0.76", "Discount_Coupon": "$4.43", "Shipping_Cost": "$4.55", "Earned_Amount": "$2.73", "Date": "2/25/2023" },
        { "id": 8, "Order": 8, "User": "Roderigo", "Total": "$99.58", "VAT": "$3.52", "Commission": "$0.15", "Discount_Coupon": "$2.17", "Shipping_Cost": "$3.85", "Earned_Amount": "$0.42", "Date": "6/2/2023" },
        { "id": 9, "Order": 9, "User": "Kerwin", "Total": "$87.82", "VAT": "$3.64", "Commission": "$2.77", "Discount_Coupon": "$2.47", "Shipping_Cost": "$7.84", "Earned_Amount": "$1.94", "Date": "2/18/2023" },
        { "id": 10, "Order": 10, "User": "Justen", "Total": "$168.44", "VAT": "$9.62", "Commission": "$1.54", "Discount_Coupon": "$1.88", "Shipping_Cost": "$1.22", "Earned_Amount": "$0.56", "Date": "8/15/2023" },
        { "id": 11, "Order": 11, "User": "Man", "Total": "$676.44", "VAT": "$3.39", "Commission": "$0.78", "Discount_Coupon": "$4.75", "Shipping_Cost": "$2.83", "Earned_Amount": "$4.72", "Date": "9/30/2022" },
        { "id": 12, "Order": 12, "User": "Saul", "Total": "$78.49", "VAT": "$5.54", "Commission": "$2.99", "Discount_Coupon": "$2.26", "Shipping_Cost": "$1.88", "Earned_Amount": "$0.43", "Date": "3/17/2023" },
        { "id": 13, "Order": 13, "User": "Chick", "Total": "$146.51", "VAT": "$6.96", "Commission": "$2.94", "Discount_Coupon": "$1.30", "Shipping_Cost": "$0.09", "Earned_Amount": "$1.06", "Date": "11/1/2022" },
        { "id": 14, "Order": 14, "User": "Erny", "Total": "$578.60", "VAT": "$4.57", "Commission": "$1.12", "Discount_Coupon": "$2.18", "Shipping_Cost": "$6.13", "Earned_Amount": "$0.24", "Date": "1/2/2023" },
        { "id": 15, "Order": 15, "User": "Roma", "Total": "$632.40", "VAT": "$2.57", "Commission": "$2.00", "Discount_Coupon": "$4.12", "Shipping_Cost": "$0.34", "Earned_Amount": "$2.87", "Date": "4/21/2023" },
        { "id": 16, "Order": 16, "User": "Agosto", "Total": "$789.85", "VAT": "$1.25", "Commission": "$1.14", "Discount_Coupon": "$2.00", "Shipping_Cost": "$7.05", "Earned_Amount": "$3.17", "Date": "3/4/2023" },
        { "id": 17, "Order": 17, "User": "Kahaleel", "Total": "$635.41", "VAT": "$8.42", "Commission": "$2.31", "Discount_Coupon": "$4.54", "Shipping_Cost": "$0.67", "Earned_Amount": "$0.10", "Date": "5/17/2023" },
        { "id": 18, "Order": 18, "User": "Theobald", "Total": "$336.77", "VAT": "$2.28", "Commission": "$0.48", "Discount_Coupon": "$2.43", "Shipping_Cost": "$1.76", "Earned_Amount": "$0.93", "Date": "6/9/2023" },
        { "id": 19, "Order": 19, "User": "Kincaid", "Total": "$702.39", "VAT": "$4.78", "Commission": "$0.91", "Discount_Coupon": "$2.87", "Shipping_Cost": "$1.47", "Earned_Amount": "$4.78", "Date": "6/9/2023" },
        { "id": 20, "Order": 20, "User": "Sutherlan", "Total": "$377.59", "VAT": "$4.81", "Commission": "$1.69", "Discount_Coupon": "$1.60", "Shipping_Cost": "$7.09", "Earned_Amount": "$4.77", "Date": "7/27/2023" },
        { "id": 21, "Order": 21, "User": "Barron", "Total": "$724.59", "VAT": "$7.96", "Commission": "$2.36", "Discount_Coupon": "$1.13", "Shipping_Cost": "$5.69", "Earned_Amount": "$3.45", "Date": "8/20/2023" },
        { "id": 22, "Order": 22, "User": "Brennan", "Total": "$47.36", "VAT": "$7.18", "Commission": "$2.68", "Discount_Coupon": "$1.79", "Shipping_Cost": "$4.90", "Earned_Amount": "$0.77", "Date": "12/22/2022" },
        { "id": 23, "Order": 23, "User": "Hayden", "Total": "$610.24", "VAT": "$3.13", "Commission": "$2.75", "Discount_Coupon": "$1.94", "Shipping_Cost": "$3.32", "Earned_Amount": "$3.53", "Date": "11/16/2022" },
        { "id": 24, "Order": 24, "User": "Mathian", "Total": "$495.35", "VAT": "$9.44", "Commission": "$0.93", "Discount_Coupon": "$2.68", "Shipping_Cost": "$4.34", "Earned_Amount": "$3.58", "Date": "12/4/2022" },
        { "id": 25, "Order": 25, "User": "Zechariah", "Total": "$871.22", "VAT": "$3.65", "Commission": "$1.84", "Discount_Coupon": "$3.66", "Shipping_Cost": "$0.13", "Earned_Amount": "$3.63", "Date": "9/4/2023" },
        { "id": 26, "Order": 26, "User": "Adair", "Total": "$698.27", "VAT": "$1.71", "Commission": "$1.43", "Discount_Coupon": "$2.51", "Shipping_Cost": "$6.21", "Earned_Amount": "$0.42", "Date": "7/13/2023" },
        { "id": 27, "Order": 27, "User": "Mic", "Total": "$73.00", "VAT": "$3.53", "Commission": "$0.74", "Discount_Coupon": "$2.70", "Shipping_Cost": "$1.20", "Earned_Amount": "$2.92", "Date": "3/31/2023" },
        { "id": 28, "Order": 28, "User": "Laughton", "Total": "$940.98", "VAT": "$5.85", "Commission": "$1.29", "Discount_Coupon": "$0.93", "Shipping_Cost": "$6.65", "Earned_Amount": "$3.60", "Date": "8/10/2023" },
        { "id": 29, "Order": 29, "User": "Gregorio", "Total": "$998.12", "VAT": "$9.66", "Commission": "$1.91", "Discount_Coupon": "$2.99", "Shipping_Cost": "$4.55", "Earned_Amount": "$1.11", "Date": "11/29/2022" },
        { "id": 30, "Order": 30, "User": "Lawrence", "Total": "$982.32", "VAT": "$8.53", "Commission": "$1.29", "Discount_Coupon": "$2.23", "Shipping_Cost": "$4.93", "Earned_Amount": "$1.57", "Date": "5/11/2023" },
        { "id": 31, "Order": 31, "User": "Haven", "Total": "$540.35", "VAT": "$4.39", "Commission": "$1.26", "Discount_Coupon": "$4.97", "Shipping_Cost": "$8.66", "Earned_Amount": "$2.44", "Date": "12/30/2022" },
        { "id": 32, "Order": 32, "User": "Staffard", "Total": "$159.61", "VAT": "$1.50", "Commission": "$0.49", "Discount_Coupon": "$1.08", "Shipping_Cost": "$2.39", "Earned_Amount": "$1.65", "Date": "12/29/2022" },
        { "id": 33, "Order": 33, "User": "Edmund", "Total": "$616.98", "VAT": "$0.75", "Commission": "$2.91", "Discount_Coupon": "$1.30", "Shipping_Cost": "$0.68", "Earned_Amount": "$2.34", "Date": "5/30/2023" },
        { "id": 34, "Order": 34, "User": "Vaughan", "Total": "$323.04", "VAT": "$9.67", "Commission": "$0.17", "Discount_Coupon": "$4.46", "Shipping_Cost": "$5.49", "Earned_Amount": "$2.11", "Date": "1/17/2023" },
        { "id": 35, "Order": 35, "User": "Ilario", "Total": "$718.80", "VAT": "$2.34", "Commission": "$2.93", "Discount_Coupon": "$3.70", "Shipping_Cost": "$9.70", "Earned_Amount": "$2.46", "Date": "3/19/2023" },
        { "id": 36, "Order": 36, "User": "Smith", "Total": "$725.39", "VAT": "$9.17", "Commission": "$0.34", "Discount_Coupon": "$4.84", "Shipping_Cost": "$3.28", "Earned_Amount": "$1.68", "Date": "1/16/2023" },
        { "id": 37, "Order": 37, "User": "Ilario", "Total": "$571.34", "VAT": "$7.61", "Commission": "$0.33", "Discount_Coupon": "$3.42", "Shipping_Cost": "$3.86", "Earned_Amount": "$1.29", "Date": "2/6/2023" },
        { "id": 38, "Order": 38, "User": "Dill", "Total": "$549.02", "VAT": "$9.97", "Commission": "$2.04", "Discount_Coupon": "$1.52", "Shipping_Cost": "$8.62", "Earned_Amount": "$2.67", "Date": "2/22/2023" },
        { "id": 39, "Order": 39, "User": "Findlay", "Total": "$521.77", "VAT": "$4.62", "Commission": "$2.41", "Discount_Coupon": "$1.71", "Shipping_Cost": "$3.74", "Earned_Amount": "$1.85", "Date": "9/22/2023" },
        { "id": 40, "Order": 40, "User": "Preston", "Total": "$905.76", "VAT": "$6.70", "Commission": "$0.39", "Discount_Coupon": "$0.36", "Shipping_Cost": "$6.30", "Earned_Amount": "$4.80", "Date": "8/1/2023" }
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
    const [selectedStatus] = useState('All');
    const [selectedPaymentStatus] = useState('All');



    return (
        <div>
            <div className="earnings-div">
                <Card>
                    <div className="earnings-div-heading">
                        <h2>Earnings</h2>
                    </div>
                    <div className="earnings-div-table">
                        <div>
                            <div className='earnings-filter-container'>
                                <div className='earnings-filter-container-div1'>
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
                                <div className='earnings-filter-container-div4'>
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

export default Earnings