import React, { useMemo } from 'react'

// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Text, Group, Pagination, Select } from '@mantine/core'
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';
import './UserOrders.css'
//import icons
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import { Link } from 'react-router-dom'
const UserOrders = () => {
  // array for breadcrumb
  const items = [
    { title: 'Home', href: '/' },
    { title: 'User Orders', href: '/your_orders' },
  ];
  // Props Column
  const COLUMN = [
    {
      Header: 'Order',
      accessor: 'Order'
    },
    {
      Header: 'Total',
      accessor: 'Total'
    },
    {
      Header: 'Payment',
      accessor: 'Payment'
    },
    {
      Header: 'Status',
      accessor: 'Status'
    },
    {
      Header: 'Date',
      accessor: 'Date'
    },
    {
      Header: 'Options',
      accessor: (() => <div>
        <Text component={Link} to="/user_order_individual">
          <button className='sales-button user-orders-button-style'>Details</button>
        </Text>
      </div>
      )

    },
  ]

  const tableData = [
    {
      "Order": 1,
      "Total": 10633,
      "Payment": "COD",
      "Status": "Shipped",
      "Date": "12/29/2022"
    }, {
      "Order": 2,
      "Total": 10504,
      "Payment": "COD",
      "Status": "Order Placed",
      "Date": "1/25/2023"
    }, {
      "Order": 3,
      "Total": 6985,
      "Payment": "Net Banking",
      "Status": "Shipped",
      "Date": "7/15/2023"
    }, {
      "Order": 4,
      "Total": 5583,
      "Payment": "Net Banking",
      "Status": "Shipped",
      "Date": "1/29/2023"
    }, {
      "Order": 5,
      "Total": 8875,
      "Payment": "Net Banking",
      "Status": "Devivered",
      "Date": "2/17/2023"
    }, {
      "Order": 6,
      "Total": 511,
      "Payment": "Net Banking",
      "Status": "Order Placed",
      "Date": "3/17/2023"
    }, {
      "Order": 7,
      "Total": 586,
      "Payment": "Net Banking",
      "Status": "Devivered",
      "Date": "5/27/2023"
    }, {
      "Order": 8,
      "Total": 8454,
      "Payment": "COD",
      "Status": "Devivered",
      "Date": "12/12/2022"
    }, {
      "Order": 9,
      "Total": 10944,
      "Payment": "Net Banking",
      "Status": "Devivered",
      "Date": "1/16/2023"
    }, {
      "Order": 10,
      "Total": 1742,
      "Payment": "Net Banking",
      "Status": "Order Placed",
      "Date": "3/4/2023"
    }, {
      "Order": 11,
      "Total": 1176,
      "Payment": "Net Banking",
      "Status": "Out Of Delivery",
      "Date": "9/17/2023"
    }, {
      "Order": 12,
      "Total": 9820,
      "Payment": "COD",
      "Status": "Out Of Delivery",
      "Date": "5/22/2023"
    }, {
      "Order": 13,
      "Total": 10181,
      "Payment": "COD",
      "Status": "Order Placed",
      "Date": "3/5/2023"
    }, {
      "Order": 14,
      "Total": 3728,
      "Payment": "Net Banking",
      "Status": "Devivered",
      "Date": "8/21/2023"
    }, {
      "Order": 15,
      "Total": 4784,
      "Payment": "Net Banking",
      "Status": "Devivered",
      "Date": "10/18/2022"
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
  const { pageIndex } = state


  // Status Filter 

  return (
    <div>
      <div className="user-orders-div">
        <div className="user-orders-div-container">
          <div className="category-div-container-breadcrumb">
            <Breadcrumb value={items} />
          </div>
          <div className="user-orders-div-container-heading">
            <h2>Orders</h2>
          </div>
          <div className="user-orders-div-container-content">
            <div className='payoutrequests-filter-container sales-container'>
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
    </div>
  )
}

export default UserOrders