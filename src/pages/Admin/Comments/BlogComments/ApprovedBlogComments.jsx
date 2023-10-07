//import react packages
import React, { useMemo, useState } from 'react'

// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Menu, Text, Group, Input, Pagination, Select } from '@mantine/core'

//import mantine models
import { modals } from '@mantine/modals'

//import productcomments css
import './BlogComments.css'

//import icons
import list from '../../../../assets/admin/payout/list.png'
import arrowdown from '../../../../assets/preheader/arrow-down.webp'
import anglebottom from '../../../../assets/admin/table/anglebottom.webp'
import trash from '../../../../assets/admin/table/dropdown/trash.png'

import { Link } from 'react-router-dom'

const ApprovedBlogComments = () => {
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
            Header: 'Name',
            accessor: 'Name'
        },
        {
            Header: 'Email',
            accessor: 'Email'
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
            Header: 'Ip Address',
            accessor: 'Ip Address'
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
        {
            "Id": 1,
            "Name": "Giulia",
            "Email": "gmendenhall0@privacy.gov.au",
            "Comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "Url": "D'Amore Group",
            "Ip Address": "138.44.141.156",
            "Date": "10/7/2022"
        }, {
            "Id": 2,
            "Name": "Angelika",
            "Email": "arenzo1@home.pl",
            "Comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "Url": "Beatty-Streich",
            "Ip Address": "244.187.244.2",
            "Date": "3/15/2023"
        }, {
            "Id": 3,
            "Name": "Almeta",
            "Email": "adryden2@list-manage.com",
            "Comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
            "Url": "Kunde, Howell and Hoppe",
            "Ip Address": "239.37.24.121",
            "Date": "3/23/2023"
        }, {
            "Id": 4,
            "Name": "Hermia",
            "Email": "hslater3@bizjournals.com",
            "Comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "Url": "Murray, McClure and Kirlin",
            "Ip Address": "54.150.15.19",
            "Date": "6/4/2023"
        }, {
            "Id": 5,
            "Name": "Town",
            "Email": "tpaddington4@php.net",
            "Comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "Url": "Stroman-McLaughlin",
            "Ip Address": "33.126.119.171",
            "Date": "1/7/2023"
        }, {
            "Id": 6,
            "Name": "Farand",
            "Email": "fparsall5@spotify.com",
            "Comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "Url": "Sanford LLC",
            "Ip Address": "219.180.98.224",
            "Date": "1/4/2023"
        }, {
            "Id": 7,
            "Name": "Austin",
            "Email": "atoxell6@google.fr",
            "Comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
            "Url": "Bradtke and Sons",
            "Ip Address": "204.53.244.208",
            "Date": "3/5/2023"
        }, {
            "Id": 8,
            "Name": "Robert",
            "Email": "ryacobsohn7@sogou.com",
            "Comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "Url": "Tremblay-Anderson",
            "Ip Address": "136.22.62.245",
            "Date": "6/3/2023"
        }, {
            "Id": 9,
            "Name": "Bethina",
            "Email": "beddolls8@gmpg.org",
            "Comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "Url": "Wiegand, Langosh and Larson",
            "Ip Address": "230.225.165.164",
            "Date": "8/6/2023"
        }, {
            "Id": 10,
            "Name": "Jody",
            "Email": "jweippert9@bravesites.com",
            "Comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "Url": "Gerhold, Kohler and Koelpin",
            "Ip Address": "27.102.113.7",
            "Date": "8/3/2023"
        }, {
            "Id": 11,
            "Name": "Barty",
            "Email": "bsemrada@about.me",
            "Comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "Url": "Hickle LLC",
            "Ip Address": "147.124.225.40",
            "Date": "7/19/2023"
        }, {
            "Id": 12,
            "Name": "Lyda",
            "Email": "lstandleyb@twitpic.com",
            "Comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
            "Url": "Beer-Lesch",
            "Ip Address": "234.105.118.253",
            "Date": "10/24/2022"
        }, {
            "Id": 13,
            "Name": "Donn",
            "Email": "dpaddemorec@adobe.com",
            "Comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
            "Url": "Hauck, Larson and Bradtke",
            "Ip Address": "45.125.9.252",
            "Date": "4/19/2023"
        }, {
            "Id": 14,
            "Name": "Tarra",
            "Email": "tputtockd@aol.com",
            "Comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "Url": "Simonis, Tromp and Okuneva",
            "Ip Address": "127.90.38.175",
            "Date": "7/18/2023"
        }, {
            "Id": 15,
            "Name": "Eddi",
            "Email": "ewitherdone@scientificamerican.com",
            "Comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
            "Url": "Botsford LLC",
            "Ip Address": "31.126.130.122",
            "Date": "11/28/2022"
        }, {
            "Id": 16,
            "Name": "Keely",
            "Email": "kjoppf@domainmarket.com",
            "Comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "Url": "Gleason-Predovic",
            "Ip Address": "112.160.124.38",
            "Date": "6/4/2023"
        }, {
            "Id": 17,
            "Name": "Felizio",
            "Email": "fhazeldineg@dyndns.org",
            "Comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "Url": "Hilpert LLC",
            "Ip Address": "171.143.26.153",
            "Date": "3/22/2023"
        }, {
            "Id": 18,
            "Name": "Hermie",
            "Email": "hgooderridgeh@whitehouse.gov",
            "Comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "Url": "Gleichner-Heaney",
            "Ip Address": "250.31.238.189",
            "Date": "5/4/2023"
        }, {
            "Id": 19,
            "Name": "Alejandrina",
            "Email": "abrosiusi@de.vu",
            "Comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "Url": "Hegmann, Bergstrom and Kling",
            "Ip Address": "157.3.205.149",
            "Date": "1/7/2023"
        }, {
            "Id": 20,
            "Name": "Cristionna",
            "Email": "celsomj@drupal.org",
            "Comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "Url": "Ortiz, Reynolds and Rosenbaum",
            "Ip Address": "42.252.33.74",
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
            columns: useMemo(() => COLUMN, []), 
            data: useMemo(() => tableData, []), 
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
            <div className="product-comments-div">
                <h3>Blog Comments</h3>
                <Card className="product-comments-div-card">
                    <div className="product-comments-div-card-heading">
                        <h4>Approved Comments</h4>
                        <Text component={Link} to="/pending_blog_comments"><button><img src={list} width={12} alt="list icon" />Pending Comments</button></Text>
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
                </Card>
            </div>
        </div>
    )
}

export default ApprovedBlogComments