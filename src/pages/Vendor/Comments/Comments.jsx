import React, { useMemo, useState } from 'react'

// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Group, Pagination, Select } from '@mantine/core'

import arrowdown from '../../../assets/preheader/arrow-down.webp'

import './Comments.css'
const Comments = () => {

    const COLUMN = [
        {
            Header: 'Id',
            accessor: 'Id'
        },
        {
            Header: 'Name',
            accessor: 'Name'
        },
        {
            Header: 'Comment',
            accessor: 'Comment'
        },
        {
            Header: 'Url',
            accessor: 'Url',
        },
        {
            Header: 'Date',
            accessor: 'Date'
        },
    ]
    const tableData = [
        {
            "Id": 1,
            "Name": "Giulia",
            "Comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "Url": "D'Amore Group",
            "Date": "10/7/2022"
        }, {
            "Id": 2,
            "Name": "Angelika",
            "Comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "Url": "Beatty-Streich",
            "Date": "3/15/2023"
        }, {
            "Id": 3,
            "Name": "Almeta",
            "Comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
            "Url": "Kunde, Howell and Hoppe",
            "Date": "3/23/2023"
        }, {
            "Id": 4,
            "Name": "Hermia",
            "Comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "Url": "Murray, McClure and Kirlin",
            "Date": "6/4/2023"
        }, {
            "Id": 5,
            "Name": "Town",
            "Comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "Url": "Stroman-McLaughlin",
            "Date": "1/7/2023"
        }, {
            "Id": 6,
            "Name": "Farand",
            "Comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "Url": "Sanford LLC",
            "Date": "1/4/2023"
        }, {
            "Id": 7,
            "Name": "Austin",
            "Comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
            "Url": "Bradtke and Sons",
            "Date": "3/5/2023"
        }, {
            "Id": 8,
            "Name": "Robert",
            "Comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "Url": "Tremblay-Anderson",
            "Date": "6/3/2023"
        }, {
            "Id": 9,
            "Name": "Bethina",
            "Comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "Url": "Wiegand, Langosh and Larson",
            "Date": "8/6/2023"
        }, {
            "Id": 10,
            "Name": "Jody",
            "Comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "Url": "Gerhold, Kohler and Koelpin",
            "Date": "8/3/2023"
        }, {
            "Id": 11,
            "Name": "Barty",
            "Comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "Url": "Hickle LLC",
            "Date": "7/19/2023"
        }, {
            "Id": 12,
            "Name": "Lyda",
            "Comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
            "Url": "Beer-Lesch",
            "Date": "10/24/2022"
        }, {
            "Id": 13,
            "Name": "Donn",
            "Comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
            "Url": "Hauck, Larson and Bradtke",
            "Date": "4/19/2023"
        }, {
            "Id": 14,
            "Name": "Tarra",
            "Comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "Url": "Simonis, Tromp and Okuneva",
            "Date": "7/18/2023"
        }, {
            "Id": 15,
            "Name": "Eddi",
            "Comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
            "Url": "Botsford LLC",
            "Date": "11/28/2022"
        }, {
            "Id": 16,
            "Name": "Keely",
            "Comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "Url": "Gleason-Predovic",
            "Date": "6/4/2023"
        }, {
            "Id": 17,
            "Name": "Felizio",
            "Comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "Url": "Hilpert LLC",
            "Date": "3/22/2023"
        }, {
            "Id": 18,
            "Name": "Hermie",
            "Comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "Url": "Gleichner-Heaney",
            "Date": "5/4/2023"
        }, {
            "Id": 19,
            "Name": "Alejandrina",
            "Comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "Url": "Hegmann, Bergstrom and Kling",
            "Date": "1/7/2023"
        }, {
            "Id": 20,
            "Name": "Cristionna",
            "Comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "Url": "Ortiz, Reynolds and Rosenbaum",
            "Date": "8/1/2023"
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
            <div className="product-comments-div">
                <Card className="product-comments-div-card">
                    <div className="product-comments-div-card-heading">
                        <h4>Comments</h4>
                    </div>
                    <div className="product-comments-div-card-content">
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

export default Comments