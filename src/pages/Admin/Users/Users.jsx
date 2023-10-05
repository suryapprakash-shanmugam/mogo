//import react
import React, { useMemo, useState } from 'react'

// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Menu, Text, Group, Input, Pagination, Select, Modal, Tabs, PasswordInput } from '@mantine/core'

//import mantine models
import { modals } from '@mantine/modals'


//import react router dom packages
import { Link } from 'react-router-dom'

//import icons
import anglebottom from '../../../assets/admin/table/anglebottom.webp'
import trash from '../../../assets/admin/table/dropdown/trash.png'
import edit from '../../../assets/admin/table/dropdown/edit.png'
import block from '../../../assets/admin/table/dropdown/block.png'
import plus from '../../../assets/admin/table/dropdown/plus.png'
import arrowdown from '../../../assets/preheader/arrow-down.webp'

import './Users.css'
const Users = () => {

    const [usersModalOpen, setUsersModalOpen] = useState(false)

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
            Header: 'User',
            accessor: 'User',
        },
        {
            Header: 'Email',
            accessor: 'Email',
        },
        {
            Header: 'Status',
            accessor: 'Status',
        },
        {
            Header: 'Last Seeen',
            accessor: 'Last Seeen',
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
                        <Text>
                            <Menu.Item>
                                <img src={edit} alt='edit icon' width={15} />&nbsp;&nbsp;Edit
                            </Menu.Item>
                        </Text>
                        <Text>
                            <Menu.Item>
                                <img src={block} alt='block icon' width={15} />&nbsp;&nbsp;Ban User
                            </Menu.Item>
                        </Text>
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
            "User": "Lurline",
            "Email": "larchbell0@wisc.edu",
            "Status": "Active",
            "Last Seeen": "2/3/2023",
            "Date": "3/22/2023"
        }, {
            "Id": 2,
            "User": "Stephen",
            "Email": "semons1@dell.com",
            "Status": "Banned",
            "Last Seeen": "1/9/2023",
            "Date": "3/2/2023"
        }, {
            "Id": 3,
            "User": "Clementine",
            "Email": "clettsom2@usgs.gov",
            "Status": "Active",
            "Last Seeen": "6/23/2023",
            "Date": "12/1/2022"
        }, {
            "Id": 4,
            "User": "Jaquith",
            "Email": "jhayselden3@tripadvisor.com",
            "Status": "Banned",
            "Last Seeen": "10/2/2023",
            "Date": "6/28/2023"
        }, {
            "Id": 5,
            "User": "Michale",
            "Email": "mduffield4@cnn.com",
            "Status": "Banned",
            "Last Seeen": "9/26/2023",
            "Date": "3/2/2023"
        }, {
            "Id": 6,
            "User": "Barris",
            "Email": "bginger5@odnoklassniki.ru",
            "Status": "Active",
            "Last Seeen": "9/13/2023",
            "Date": "1/8/2023"
        }, {
            "Id": 7,
            "User": "Perceval",
            "Email": "pdaviddi6@msn.com",
            "Status": "Active",
            "Last Seeen": "9/8/2023",
            "Date": "5/3/2023"
        }, {
            "Id": 8,
            "User": "Daffi",
            "Email": "ddillet7@examiner.com",
            "Status": "Active",
            "Last Seeen": "6/10/2023",
            "Date": "3/17/2023"
        }, {
            "Id": 9,
            "User": "Lennie",
            "Email": "lthresher8@altervista.org",
            "Status": "Banned",
            "Last Seeen": "8/5/2023",
            "Date": "12/15/2022"
        }, {
            "Id": 10,
            "User": "Genvieve",
            "Email": "gcamili9@hud.gov",
            "Status": "Banned",
            "Last Seeen": "11/21/2022",
            "Date": "6/2/2023"
        }, {
            "Id": 11,
            "User": "Lynnette",
            "Email": "lyakubowicza@nsw.gov.au",
            "Status": "Active",
            "Last Seeen": "3/1/2023",
            "Date": "9/8/2023"
        }, {
            "Id": 12,
            "User": "Gina",
            "Email": "gmaylerb@epa.gov",
            "Status": "Banned",
            "Last Seeen": "7/20/2023",
            "Date": "1/20/2023"
        }, {
            "Id": 13,
            "User": "Fleming",
            "Email": "flitterickc@msu.edu",
            "Status": "Active",
            "Last Seeen": "10/9/2022",
            "Date": "10/20/2022"
        }, {
            "Id": 14,
            "User": "Kareem",
            "Email": "khellicard@printfriendly.com",
            "Status": "Banned",
            "Last Seeen": "6/9/2023",
            "Date": "7/12/2023"
        }, {
            "Id": 15,
            "User": "Adriana",
            "Email": "amcdonnelle@un.org",
            "Status": "Active",
            "Last Seeen": "10/3/2023",
            "Date": "8/31/2023"
        }
    ]

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
            <div className="users-div">
                <Card className='users-div-container'>
                    <div className="users-div-container-heading">
                        <h4>Users</h4>
                        <button onClick={() => { setUsersModalOpen(true) }}><img src={plus} width="12" alt="plus icon" />Add User</button>
                    </div>
                    <div className="users-div-container-content">
                        <Tabs variant="pills" defaultValue="admin">
                            <Tabs.List>
                                <Tabs.Tab value="admin">Admin</Tabs.Tab>
                                <Tabs.Tab value="vendor">Vendor</Tabs.Tab>
                                <Tabs.Tab value="users">Users</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="admin" className='users-div-container-content-tabs-panel' pt="xs">
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
                                                { value: 'Active', label: 'Active' },
                                                { value: 'Banned', label: 'Banned' },
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
                            </Tabs.Panel>

                            <Tabs.Panel value="vendor" className='users-div-container-content-tabs-panel' pt="xs">
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
                                                { value: 'Active', label: 'Active' },
                                                { value: 'Banned', label: 'Banned' },
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
                            </Tabs.Panel>

                            <Tabs.Panel value="users" className='users-div-container-content-tabs-panel' pt="xs">
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
                                                { value: 'Active', label: 'Active' },
                                                { value: 'Banned', label: 'Banned' },
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
                            </Tabs.Panel>
                        </Tabs>
                    </div>
                </Card>
            </div>

            <Modal
                zIndex={12121}
                size="lg"
                opened={usersModalOpen}
                onClose={() => setUsersModalOpen(false)}
                title=""
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='sellerbalance-edit-modal'
            >
                <div className="sellerbalance-edit-modal-header">
                    <h4>Add User</h4>
                </div>
                <div className="sellerbalance-edit-modal-body">
                    <div className="sellerbalance-edit-modal-body-content">
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <Input.Wrapper
                                label="First Name"
                            >
                                <Input />
                            </Input.Wrapper>
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <Input.Wrapper
                                label="Last Name"
                            >
                                <Input />
                            </Input.Wrapper>
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <Input.Wrapper
                                label="Email Address"
                            >
                                <Input />
                            </Input.Wrapper>
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <PasswordInput
                                label="Password"
                            />
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-input">
                            <Select
                            placeholder='Pick One'
                            rightSection={<img src={arrowdown} width="14" alt="arrowdown icon" />}
                                label="User Type"
                                data={[
                                    { value: 'Admin', label: 'Admin' },
                                    { value: 'Vendor', label: 'Vendor' },
                                ]}
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

export default Users