import React, { useMemo } from 'react'

// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Text, Group, Input, Pagination, Select } from '@mantine/core'
import './CancelledSales.css'
import arrowdown from '../../../../assets/preheader/arrow-down.webp'
import info from '../../../../assets/admin/table/dropdown/info.png'
import { Link } from 'react-router-dom'
const CancelledSales = () => {
  // Props Column
  const COLUMN = [
    {
      Header: 'Sale',
      accessor: 'Sale'
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
        <Text component={Link} to="/vendor_individual_order">
          <button className='sales-button'><img src={info} width={12} alt="info icon" />Details</button>
        </Text>
      </div>
      )

    },
  ]

  const tableData = [
    {
      "Sale": 3938,
      "Total": 5930,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "8/31/2023"
    }, {
      "Sale": 6470,
      "Total": 4742,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "9/24/2023"
    }, {
      "Sale": 3342,
      "Total": 2931,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "5/20/2023"
    }, {
      "Sale": 6370,
      "Total": 1446,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "9/30/2023"
    }, {
      "Sale": 4621,
      "Total": 5808,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "2/14/2023"
    }, {
      "Sale": 8283,
      "Total": 2948,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "11/16/2022"
    }, {
      "Sale": 1265,
      "Total": 5932,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "9/25/2023"
    }, {
      "Sale": 1042,
      "Total": 2428,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "4/20/2023"
    }, {
      "Sale": 6648,
      "Total": 943,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "4/8/2023"
    }, {
      "Sale": 3012,
      "Total": 4703,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "4/15/2023"
    }, {
      "Sale": 6581,
      "Total": 5197,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "11/15/2022"
    }, {
      "Sale": 2661,
      "Total": 1545,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "4/26/2023"
    }, {
      "Sale": 5805,
      "Total": 3418,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "2/18/2023"
    }, {
      "Sale": 1977,
      "Total": 638,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "8/14/2023"
    }, {
      "Sale": 1632,
      "Total": 3096,
      "Payment": "Payment Received",
      "Status": "Cancelled",
      "Date": "4/17/2023"
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

  return (
    <div>
      <div className="cancelledsales-div">
        <Card className='activesales-div-card'>
          <div className="activesales-div-card-heading">
            <h4>Cancelled Sales</h4>
          </div>
          <div className="activesales-div-card-content">
            <div className='transactions-filter-container'>
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

export default CancelledSales