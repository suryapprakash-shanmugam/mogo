//import react packages
import React, { useMemo, useState } from 'react'

//import mantine packages
import { Card, Text, Menu, Group, Input, Pagination, Select } from '@mantine/core'

//import PayoutRequests css
import './PayoutRequests.css'

// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine models
import { modals } from '@mantine/modals'

//import react router dom packages
import { Link } from 'react-router-dom'

//import icons
import plus from '../../../../assets/admin/addpayout/plus.png'
import trash from '../../../../assets/admin/table/dropdown/trash.png'
import check from '../../../../assets/admin/table/dropdown/check.png'
import arrowdown from '../../../../assets/preheader/arrow-down.webp'
import anglebottom from '../../../../assets/admin/table/anglebottom.webp'


const PayoutRequests = () => {

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
            accessor: 'Id'
        },
        {
            Header: 'User',
            accessor: 'User'
        },
        {
            Header: 'Withdrawal Method',
            accessor: 'Withdrawal_Method'
        },
        {
            Header: 'Withdrawal Amount',
            accessor: 'Withdrawal_Amount'
        },
        {
            Header: 'Status',
            accessor: 'Status',
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
                        <Menu.Item>
                            <img src={check} alt='check icon' width={15} />&nbsp;&nbsp;Completed
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
            "User": "Mikael",
            "Withdrawal_Method": "Bitcoin (BTC)",
            "Withdrawal_Amount": 3,
            "Status": "Completed",
            "Date": "3/13/2023"
        }, {
            "Id": 2,
            "User": "Abey",
            "Withdrawal_Method": "Bitcoin (BTC)",
            "Withdrawal_Amount": 12,
            "Status": "Completed",
            "Date": "8/30/2023"
        }, {
            "Id": 3,
            "User": "Mariette",
            "Withdrawal_Method": "Paypal",
            "Withdrawal_Amount": 25,
            "Status": "Completed",
            "Date": "12/6/2022"
        }, {
            "Id": 4,
            "User": "Valentia",
            "Withdrawal_Method": "SWIFT",
            "Withdrawal_Amount": 75,
            "Status": "Pending",
            "Date": "3/7/2023"
        }, {
            "Id": 5,
            "User": "Baron",
            "Withdrawal_Method": "Paypal",
            "Withdrawal_Amount": 24,
            "Status": "Completed",
            "Date": "4/2/2023"
        }, {
            "Id": 6,
            "User": "Netty",
            "Withdrawal_Method": "Paypal",
            "Withdrawal_Amount": 15,
            "Status": "Pending",
            "Date": "4/13/2023"
        }, {
            "Id": 7,
            "User": "Ethan",
            "Withdrawal_Method": "SWIFT",
            "Withdrawal_Amount": 35,
            "Status": "Completed",
            "Date": "2/17/2023"
        }, {
            "Id": 8,
            "User": "Danya",
            "Withdrawal_Method": "Paypal",
            "Withdrawal_Amount": 1,
            "Status": "Completed",
            "Date": "11/4/2022"
        }, {
            "Id": 9,
            "User": "Paulina",
            "Withdrawal_Method": "Bitcoin (BTC)",
            "Withdrawal_Amount": 31,
            "Status": "Completed",
            "Date": "8/1/2023"
        }, {
            "Id": 10,
            "User": "Noemi",
            "Withdrawal_Method": "SWIFT",
            "Withdrawal_Amount": 70,
            "Status": "Completed",
            "Date": "8/27/2023"
        }, {
            "Id": 11,
            "User": "Ingunna",
            "Withdrawal_Method": "SWIFT",
            "Withdrawal_Amount": 12,
            "Status": "Completed",
            "Date": "8/20/2023"
        }, {
            "Id": 12,
            "User": "Lambert",
            "Withdrawal_Method": "SWIFT",
            "Withdrawal_Amount": 77,
            "Status": "Pending",
            "Date": "1/10/2023"
        }, {
            "Id": 13,
            "User": "Parke",
            "Withdrawal_Method": "SWIFT",
            "Withdrawal_Amount": 86,
            "Status": "Completed",
            "Date": "6/17/2023"
        }, {
            "Id": 14,
            "User": "Sharla",
            "Withdrawal_Method": "Bitcoin (BTC)",
            "Withdrawal_Amount": 1,
            "Status": "Completed",
            "Date": "6/27/2023"
        }, {
            "Id": 15,
            "User": "Nikos",
            "Withdrawal_Method": "Paypal",
            "Withdrawal_Amount": 71,
            "Status": "Pending",
            "Date": "5/24/2023"
        }, {
            "Id": 16,
            "User": "Mandi",
            "Withdrawal_Method": "SWIFT",
            "Withdrawal_Amount": 18,
            "Status": "Pending",
            "Date": "8/6/2023"
        }, {
            "Id": 17,
            "User": "Taryn",
            "Withdrawal_Method": "Bitcoin (BTC)",
            "Withdrawal_Amount": 83,
            "Status": "Pending",
            "Date": "4/9/2023"
        }, {
            "Id": 18,
            "User": "Stevie",
            "Withdrawal_Method": "SWIFT",
            "Withdrawal_Amount": 6,
            "Status": "Completed",
            "Date": "9/6/2023"
        }, {
            "Id": 19,
            "User": "Sherman",
            "Withdrawal_Method": "SWIFT",
            "Withdrawal_Amount": 27,
            "Status": "Completed",
            "Date": "5/2/2023"
        }, {
            "Id": 20,
            "User": "Christiane",
            "Withdrawal_Method": "Paypal",
            "Withdrawal_Amount": 7,
            "Status": "Pending",
            "Date": "9/25/2022"
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

    return (
        <div>
            <div className="payout-requests-div">
                <Card className='payout-requests-div-card'>
                    <div className="payout-requests-div-card-heading">
                        <h3>Payout Requests</h3>
                        <Text component={Link} to="/addpayout">
                            <button><img src={plus} alt="plus icon" width={14} />Add Payout</button>
                        </Text>
                    </div>
                    <div className="payout-requests-div-card-body">
                        <div className="payoutrequests-div-table">
                            <div>
                                <div className='payoutrequests-filter-container'>
                                    <div className='payoutrequests-filter-container-div1'>
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
                                    <div className='payoutrequests-filter-container-div2'>
                                        <Select
                                            label='Status'
                                            onChange={(e) => setSelectedStatus(e)}
                                            rightSection={<img src={arrowdown} width={10} alt="arrow down icon" />}
                                            defaultValue={'All'}
                                            data={[
                                                { value: 'All', label: 'All' },
                                                { value: 'Pending', label: 'Pending' },
                                                { value: 'Completed', label: 'Completed' },
                                            ]}
                                        />
                                    </div>
                                    <div className='payoutrequests-filter-container-div4'>
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
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default PayoutRequests