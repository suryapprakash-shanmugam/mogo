//import react packages
import React, { useMemo, useState } from 'react'


// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Text, Group, Input, Pagination, Select } from '@mantine/core'

//import mantine models
import { modals } from '@mantine/modals'
import './Coupons.css'

//import icons
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import anglebottom from '../../../assets/admin/table/anglebottom.webp'
import trash from '../../../assets/admin/table/dropdown/trash.png'

import plus from '../../../assets/admin/table/dropdown/plus.png'
import { Link } from 'react-router-dom'
const Coupons = () => {

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
            Header: 'Coupon Code',
            accessor: 'Coupon Code'
        },
        {
            Header: 'Discount Rate',
            accessor: 'Discount Rate'
        },
        // {
        //     Header: 'Number of Coupons',
        //     accessor: 'Number of Coupons'
        // },
        // {
        //     Header: 'Used',
        //     accessor: 'Used'
        // },
        {
            Header: 'Number of Coupons and Used', // Combine the column headers
            accessor: ({ 'Number of Coupons': numCoupons, Used }) => `${numCoupons} (Used: ${Used})`, // Combine the values
        },
        {
            Header: 'Expiry Date',
            accessor: 'Expiry Date',
        },
        {
            Header: 'Status',
            accessor: 'Status'
        },
        {
            Header: 'Date',
            accessor: 'Date'
        },
    ]

    const tableData = [
        {
            "Coupon Code": "Advanced local artificial intelligence",
            "Discount Rate": 39,
            "Number of Coupons": 602,
            "Used": 762,
            "Expiry Date": "4/8/2023",
            "Status": "Inactive",
            "Date": "10/14/2022"
        }, {
            "Coupon Code": "Optimized explicit budgetary management",
            "Discount Rate": 80,
            "Number of Coupons": 672,
            "Used": 580,
            "Expiry Date": "9/6/2023",
            "Status": "Inactive",
            "Date": "3/11/2023"
        }, {
            "Coupon Code": "Multi-layered eco-centric time-frame",
            "Discount Rate": 66,
            "Number of Coupons": 536,
            "Used": 402,
            "Expiry Date": "11/6/2022",
            "Status": "Active",
            "Date": "12/30/2022"
        }, {
            "Coupon Code": "Innovative bottom-line neural-net",
            "Discount Rate": 22,
            "Number of Coupons": 334,
            "Used": 185,
            "Expiry Date": "9/17/2023",
            "Status": "Inactive",
            "Date": "12/4/2022"
        }, {
            "Coupon Code": "Cross-group optimizing middleware",
            "Discount Rate": 28,
            "Number of Coupons": 336,
            "Used": 319,
            "Expiry Date": "12/13/2022",
            "Status": "Active",
            "Date": "3/26/2023"
        }, {
            "Coupon Code": "Assimilated mobile support",
            "Discount Rate": 39,
            "Number of Coupons": 990,
            "Used": 925,
            "Expiry Date": "10/6/2022",
            "Status": "Inactive",
            "Date": "3/31/2023"
        }, {
            "Coupon Code": "Programmable uniform instruction set",
            "Discount Rate": 52,
            "Number of Coupons": 465,
            "Used": 452,
            "Expiry Date": "1/14/2023",
            "Status": "Active",
            "Date": "5/23/2023"
        }, {
            "Coupon Code": "Ameliorated 4th generation implementation",
            "Discount Rate": 15,
            "Number of Coupons": 98,
            "Used": 329,
            "Expiry Date": "9/3/2023",
            "Status": "Inactive",
            "Date": "9/17/2023"
        }, {
            "Coupon Code": "Reverse-engineered zero defect challenge",
            "Discount Rate": 85,
            "Number of Coupons": 230,
            "Used": 681,
            "Expiry Date": "6/19/2023",
            "Status": "Active",
            "Date": "10/28/2022"
        }, {
            "Coupon Code": "Pre-emptive bifurcated migration",
            "Discount Rate": 43,
            "Number of Coupons": 614,
            "Used": 582,
            "Expiry Date": "11/16/2022",
            "Status": "Inactive",
            "Date": "2/22/2023"
        }, {
            "Coupon Code": "Total content-based Graphical User Interface",
            "Discount Rate": 27,
            "Number of Coupons": 536,
            "Used": 682,
            "Expiry Date": "8/23/2023",
            "Status": "Inactive",
            "Date": "5/18/2023"
        }, {
            "Coupon Code": "Pre-emptive content-based approach",
            "Discount Rate": 11,
            "Number of Coupons": 821,
            "Used": 723,
            "Expiry Date": "6/22/2023",
            "Status": "Inactive",
            "Date": "10/7/2022"
        }, {
            "Coupon Code": "Synchronised mission-critical database",
            "Discount Rate": 72,
            "Number of Coupons": 605,
            "Used": 298,
            "Expiry Date": "8/7/2023",
            "Status": "Inactive",
            "Date": "1/28/2023"
        }, {
            "Coupon Code": "Open-source mobile service-desk",
            "Discount Rate": 89,
            "Number of Coupons": 844,
            "Used": 156,
            "Expiry Date": "5/31/2023",
            "Status": "Active",
            "Date": "3/22/2023"
        }, {
            "Coupon Code": "Assimilated 4th generation knowledge base",
            "Discount Rate": 10,
            "Number of Coupons": 629,
            "Used": 550,
            "Expiry Date": "4/26/2023",
            "Status": "Active",
            "Date": "1/6/2023"
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

    return (
        <div>
            <div className="coupons-div">
                <Card className='coupons-div-card'>
                    <div className="coupons-div-card-heading">
                        <h4>Coupons</h4>
                        <Text component={Link} to="/vendor_addcoupon">
                            <button><img src={plus} width={14} alt="list icon" />Add Coupon</button>
                        </Text>
                    </div>
                    <div className="coupons-div-card-content">
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
                </Card>
            </div>
        </div>
    )
}

export default Coupons