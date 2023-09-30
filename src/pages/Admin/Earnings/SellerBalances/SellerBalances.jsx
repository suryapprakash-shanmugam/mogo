//import react packages
import React, { useMemo, useState } from 'react'


// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Menu, Group, Input, Pagination, Select, Modal } from '@mantine/core'

//import SellerBalances css
import './SellerBalances.css'

//import icons
import arrowdown from '../../../../assets/preheader/arrow-down.webp'
import anglebottom from '../../../../assets/admin/table/anglebottom.webp'
import edit from '../../../../assets/admin/table/dropdown/edit.png'
import NumericInput from '../../../../components/UI/Input/NumericInput'

const SellerBalances = () => {

    //usestate for open register modal
    const [sellerBalancesModalOpen, setSellerBalancesModalOpen] = useState(false)
    const [maxValue, setMaxValue] = useState('');

    // Props Column
    const COLUMN = [
        {
            Header: 'User Id',
            accessor: 'User_Id'
        },
        {
            Header: 'User',
            accessor: 'User'
        },
        {
            Header: 'Number of total sales',
            accessor: 'Number_of_total_sales'
        },
        {
            Header: 'Balance',
            accessor: 'Balance'
        },
        {
            Header: 'Options',
            accessor: (() => <div>
                <Menu classNames='table-selectbox'>
                    <Menu.Target>
                        <button className='table-select-dropdown'><img src={anglebottom} alt='anglebottom' width={15} /></button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item onClick={() => { setSellerBalancesModalOpen(true) }}>
                            <img src={edit} alt='edit icon' width={15} />&nbsp;&nbsp; Edit
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
            )

        },
    ]

    const tableData = [
        { "User_Id": 1, "User": "Rosco", "Number_of_total_sales": 69, "Balance": "$590.13" },
        { "User_Id": 2, "User": "Tremain", "Number_of_total_sales": 85, "Balance": "$994.54" },
        { "User_Id": 3, "User": "Mace", "Number_of_total_sales": 43, "Balance": "$633.45" },
        { "User_Id": 4, "User": "Reid", "Number_of_total_sales": 1, "Balance": "$660.64" },
        { "User_Id": 5, "User": "Jaye", "Number_of_total_sales": 46, "Balance": "$798.23" },
        { "User_Id": 6, "User": "Brody", "Number_of_total_sales": 40, "Balance": "$594.29" },
        { "User_Id": 7, "User": "Nealon", "Number_of_total_sales": 43, "Balance": "$405.40" },
        { "User_Id": 8, "User": "Chaddie", "Number_of_total_sales": 70, "Balance": "$512.13" },
        { "User_Id": 9, "User": "Mano", "Number_of_total_sales": 38, "Balance": "$988.95" },
        { "User_Id": 10, "User": "Samuel", "Number_of_total_sales": 63, "Balance": "$161.65" },
        { "User_Id": 11, "User": "Reinold", "Number_of_total_sales": 14, "Balance": "$929.16" },
        { "User_Id": 12, "User": "Roland", "Number_of_total_sales": 67, "Balance": "$919.50" },
        { "User_Id": 13, "User": "Dana", "Number_of_total_sales": 19, "Balance": "$441.05" },
        { "User_Id": 14, "User": "Shep", "Number_of_total_sales": 61, "Balance": "$905.20" },
        { "User_Id": 15, "User": "Erroll", "Number_of_total_sales": 99, "Balance": "$205.87" }
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
            <div className="sellerbalances-div">
                <Card>
                    <div className="sellerbalances-div-heading">
                        <h2>Seller Balances</h2>
                    </div>
                    <div className="sellerbalances-div-table">
                        <div>
                            <div className='sellerbalances-filter-container'>
                                <div className='sellerbalances-filter-container-div1'>
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
                                <div className='sellerbalances-filter-container-div4'>
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

            <Modal
                zIndex={12121}
                size="lg"
                opened={sellerBalancesModalOpen}
                onClose={() => setSellerBalancesModalOpen(false)}
                title=""
                centered
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='sellerbalance-edit-modal'
            >
                <div className="sellerbalance-edit-modal-header">
                    <h4>Update Seller Balance</h4>
                </div>
                <div className="sellerbalance-edit-modal-body">
                    <div className="sellerbalance-edit-modal-body-content">
                        <div className="sellerbalance-edit-modal-body-content-user-display">
                            <p>User Id: 1</p>
                            <p>Username: John Doe</p>
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <NumericInput
                                value={maxValue}
                                onChange={setMaxValue}
                                label="Number of total sales"
                            />
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <NumericInput
                                value={maxValue}
                                onChange={setMaxValue}
                                label="Balance"
                            />
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-button">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default SellerBalances