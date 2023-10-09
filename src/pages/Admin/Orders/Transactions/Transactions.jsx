//import react packages
import React, { useMemo, useState } from 'react'


// React Table
import { useTable, usePagination, useGlobalFilter } from "react-table"

//import mantine packages
import { Card, Menu, Text, Group, Input, Pagination, Select } from '@mantine/core'

//import mantine models
import { modals } from '@mantine/modals'

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
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Order',
            accessor: 'Order'
        },
        {
            Header: 'Payment Method',
            accessor: 'Payment_Method'
        },
        {
            Header: 'Payment Id',
            accessor: 'Payment_Id'
        },
        {
            Header: 'User',
            accessor: 'User',
        },
        {
            Header: 'Currency',
            accessor: 'Currency'
        },
        {
            Header: 'Payment Amount',
            accessor: 'Payment_Amount'
        },
        {
            Header: 'Payment Status',
            accessor: 'Payment_Status'
        },
        {
            Header: 'Ip Address',
            accessor: 'Ip_Address'
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
        { "id": 1, "Order": 1, "Payment_Method": "Stripe", "Payment_Id": "24915c63a49d417fa418f484120c61c2d2fe693a", "User": "Gerrie", "Currency": "IDR", "Payment_Amount": "₹8.97", "Payment_Status": "COMPLETED", "Ip_Address": "72.44.156.37", "Date": "6/18/2023" },

        { "id": 2, "Order": 2, "Payment_Method": "Stripe", "Payment_Id": "705767132fc8de3c19e24e6fde0fafb317a301e5", "User": "Rosabel", "Currency": "SEK", "Payment_Amount": "₹8.37", "Payment_Status": "COMPLETED", "Ip_Address": "244.226.19.92", "Date": "2/8/2023" },

        { "id": 3, "Order": 3, "Payment_Method": "Midtrans", "Payment_Id": "94ff1e74cf5b6959cc66c3c16892d17cc66b485e", "User": "Alyse", "Currency": "IDR", "Payment_Amount": "₹8.80", "Payment_Status": "Succeeded", "Ip_Address": "30.217.3.130", "Date": "10/10/2022" },

        { "id": 4, "Order": 4, "Payment_Method": "Iyzico", "Payment_Id": "4259b34201023ac123b331ea622917684ba3c1c9", "User": "Arleen", "Currency": "MXN", "Payment_Amount": "₹8.26", "Payment_Status": "COMPLETED", "Ip_Address": "235.223.224.240", "Date": "5/31/2023" },

        { "id": 5, "Order": 5, "Payment_Method": "Mercado Pago", "Payment_Id": "636110f774ff8f688b39ac88de26a25fe7771e51", "User": "Deni", "Currency": "EUR", "Payment_Amount": "₹1.29", "Payment_Status": "COMPLETED", "Ip_Address": "117.159.210.87", "Date": "5/10/2023" },

        { "id": 6, "Order": 6, "Payment_Method": "Midtrans", "Payment_Id": "11e4d8105ae74f65b2cd69c7ab3ecfb2eaed91ce", "User": "Ilene", "Currency": "EUR", "Payment_Amount": "₹0.96", "Payment_Status": "COMPLETED", "Ip_Address": "35.23.72.156", "Date": "2/11/2023" },

        { "id": 7, "Order": 7, "Payment_Method": "Iyzico", "Payment_Id": "d15d7dc542934a279658aa93e05c921576732b83", "User": "Moshe", "Currency": "IDR", "Payment_Amount": "₹7.00", "Payment_Status": "Succeeded", "Ip_Address": "74.48.244.134", "Date": "5/6/2023" },

        { "id": 8, "Order": 8, "Payment_Method": "Mercado Pago", "Payment_Id": "dd8e975ca6835e44b1fb753f8b2155be0e3ad027", "User": "Jesus", "Currency": "CNY", "Payment_Amount": "₹5.93", "Payment_Status": "Succeeded", "Ip_Address": "91.43.133.254", "Date": "2/22/2023" },

        { "id": 9, "Order": 9, "Payment_Method": "Iyzico", "Payment_Id": "619edaaacb31ba07414cb40a7c180d96659f96bf", "User": "Shaylah", "Currency": "BOB", "Payment_Amount": "₹2.85", "Payment_Status": "Succeeded", "Ip_Address": "30.86.91.166", "Date": "10/2/2022" },

        { "id": 10, "Order": 10, "Payment_Method": "Stripe", "Payment_Id": "2bb3f19fcef55aa4cb1e2783a8f949f518c3d032", "User": "Mala", "Currency": "USD", "Payment_Amount": "₹9.85", "Payment_Status": "success", "Ip_Address": "153.56.25.213", "Date": "7/7/2023" },

        { "id": 11, "Order": 11, "Payment_Method": "Stripe", "Payment_Id": "4b38e40f9daeccedde31270cebff2b366f795abc", "User": "Walker", "Currency": "CNY", "Payment_Amount": "₹1.44", "Payment_Status": "success", "Ip_Address": "210.238.92.72", "Date": "9/25/2022" },

        { "id": 12, "Order": 12, "Payment_Method": "Midtrans", "Payment_Id": "49ba7bf54a04f6e062589c989364a5bf1179ced3", "User": "Bobbi", "Currency": "UAH", "Payment_Amount": "₹7.03", "Payment_Status": "Succeeded", "Ip_Address": "165.115.237.107", "Date": "8/28/2023" },

        { "id": 13, "Order": 13, "Payment_Method": "Iyzico", "Payment_Id": "660fd9e9314745146d206e7495b1b93d33a06b78", "User": "Fayina", "Currency": "IDR", "Payment_Amount": "₹4.14", "Payment_Status": "COMPLETED", "Ip_Address": "114.131.134.90", "Date": "4/19/2023" },

        { "id": 14, "Order": 14, "Payment_Method": "Mercado Pago", "Payment_Id": "aebc85ead8752705de6cfe74cba180f94c213d71", "User": "Lewes", "Currency": "PHP", "Payment_Amount": "₹1.35", "Payment_Status": "success", "Ip_Address": "254.160.121.2", "Date": "9/12/2023" },

        { "id": 15, "Order": 15, "Payment_Method": "Stripe", "Payment_Id": "9ddb39f2268d0d21d20f1e8cbc3b7bebd3a13dca", "User": "Bertie", "Currency": "COP", "Payment_Amount": "₹5.46", "Payment_Status": "success", "Ip_Address": "186.173.50.98", "Date": "4/8/2023" },

        { "id": 16, "Order": 16, "Payment_Method": "Mercado Pago", "Payment_Id": "c2f123e30f68879e3ea8090190cf4a4dfd97fcf0", "User": "Rina", "Currency": "EUR", "Payment_Amount": "₹7.58", "Payment_Status": "success", "Ip_Address": "227.179.39.125", "Date": "2/6/2023" },

        { "id": 17, "Order": 17, "Payment_Method": "Midtrans", "Payment_Id": "b305d18c6144f52abf88cfac7e13a92ec6ebc5e7", "User": "Carmela", "Currency": "RUB", "Payment_Amount": "₹7.92", "Payment_Status": "COMPLETED", "Ip_Address": "156.148.170.212", "Date": "11/12/2022" },

        { "id": 18, "Order": 18, "Payment_Method": "Mercado Pago", "Payment_Id": "70f26870ec0dfad1bc10ea2385045ca386c55c98", "User": "Chandal", "Currency": "PHP", "Payment_Amount": "₹5.79", "Payment_Status": "COMPLETED", "Ip_Address": "165.244.68.248", "Date": "2/23/2023" },

        { "id": 19, "Order": 19, "Payment_Method": "Midtrans", "Payment_Id": "eb3173b5ec1d0ef03ced8015990ee0a7fcd548ce", "User": "Tina", "Currency": "CNY", "Payment_Amount": "₹0.06", "Payment_Status": "Succeeded", "Ip_Address": "45.56.96.27", "Date": "11/14/2022" },

        { "id": 20, "Order": 20, "Payment_Method": "Midtrans", "Payment_Id": "8df57495dc30c445a028176f8b695c17c604b37b", "User": "Guy", "Currency": "CNY", "Payment_Amount": "₹7.23", "Payment_Status": "COMPLETED", "Ip_Address": "9.28.71.158", "Date": "1/19/2023" },

        { "id": 21, "Order": 21, "Payment_Method": "Midtrans", "Payment_Id": "5f2d0dc03d881069fc8802bc7e2be70f50469021", "User": "Carlina", "Currency": "CNY", "Payment_Amount": "₹2.73", "Payment_Status": "success", "Ip_Address": "147.217.193.208", "Date": "12/7/2022" },

        { "id": 22, "Order": 22, "Payment_Method": "Stripe", "Payment_Id": "c361cab9199d4e8d17397b75a37cbe6d55ee5b17", "User": "Marthe", "Currency": "EUR", "Payment_Amount": "₹0.86", "Payment_Status": "COMPLETED", "Ip_Address": "154.214.229.178", "Date": "8/1/2023" },

        { "id": 23, "Order": 23, "Payment_Method": "Midtrans", "Payment_Id": "3257d6be168df0bf97b7571c249d4083a0093a34", "User": "Adrea", "Currency": "IDR", "Payment_Amount": "₹8.92", "Payment_Status": "COMPLETED", "Ip_Address": "67.3.156.13", "Date": "9/5/2023" },

        { "id": 24, "Order": 24, "Payment_Method": "Midtrans", "Payment_Id": "9c783c51a694109feebe9f9c2dd458d8fbb709bc", "User": "Konstantine", "Currency": "BRL", "Payment_Amount": "₹6.20", "Payment_Status": "Succeeded", "Ip_Address": "211.124.17.138", "Date": "5/15/2023" },

        { "id": 25, "Order": 25, "Payment_Method": "Stripe", "Payment_Id": "8ce3dabc31cef20a21277c9ef35f567270880fea", "User": "Felicdad", "Currency": "EUR", "Payment_Amount": "₹8.18", "Payment_Status": "COMPLETED", "Ip_Address": "26.125.116.60", "Date": "11/30/2022" },

        { "id": 26, "Order": 26, "Payment_Method": "Midtrans", "Payment_Id": "0bf69b9a75ea943946608208a45d9b6f07a134a8", "User": "Killian", "Currency": "HNL", "Payment_Amount": "₹6.81", "Payment_Status": "COMPLETED", "Ip_Address": "219.94.158.255", "Date": "1/3/2023" },

        { "id": 27, "Order": 27, "Payment_Method": "Mercado Pago", "Payment_Id": "bf33b9a8da6df490b53bd11f272a1f2a3013e4a6", "User": "Jackson", "Currency": "EUR", "Payment_Amount": "₹3.62", "Payment_Status": "Succeeded", "Ip_Address": "132.78.122.241", "Date": "5/3/2023" },

        { "id": 28, "Order": 28, "Payment_Method": "Iyzico", "Payment_Id": "f7c5cd3e8f6453a59cf219e30d9d08816633be22", "User": "Edmon", "Currency": "CNY", "Payment_Amount": "₹2.01", "Payment_Status": "Succeeded", "Ip_Address": "183.38.56.183", "Date": "9/5/2023" },

        { "id": 29, "Order": 29, "Payment_Method": "Stripe", "Payment_Id": "fb502ba11aab6b54a63734fdd252baf3a9c97e97", "User": "Darwin", "Currency": "SEK", "Payment_Amount": "₹3.28", "Payment_Status": "Succeeded", "Ip_Address": "48.155.251.111", "Date": "8/6/2023" },

        { "id": 30, "Order": 30, "Payment_Method": "Midtrans", "Payment_Id": "74717908097d7db1f80df8c33e136c811692d15d", "User": "Maye", "Currency": "HRK", "Payment_Amount": "₹6.55", "Payment_Status": "success", "Ip_Address": "247.239.47.81", "Date": "1/23/2023" },

        { "id": 31, "Order": 31, "Payment_Method": "Midtrans", "Payment_Id": "74869040fd4527adfdc8632d87b7328535654334", "User": "Zechariah", "Currency": "IDR", "Payment_Amount": "₹1.26", "Payment_Status": "success", "Ip_Address": "169.196.185.100", "Date": "1/17/2023" },

        { "id": 32, "Order": 32, "Payment_Method": "Mercado Pago", "Payment_Id": "7ec9ff98644f6611809f2611a1ede8005f32b27d", "User": "Delcine", "Currency": "UAH", "Payment_Amount": "₹4.40", "Payment_Status": "success", "Ip_Address": "237.92.226.6", "Date": "1/7/2023" },

        { "id": 33, "Order": 33, "Payment_Method": "Stripe", "Payment_Id": "5e0cf4b7ca1453b0631239c0abd7d23f7aaf2299", "User": "Brandtr", "Currency": "CNY", "Payment_Amount": "₹1.84", "Payment_Status": "success", "Ip_Address": "97.233.76.136", "Date": "5/25/2023" },

        { "id": 34, "Order": 34, "Payment_Method": "Mercado Pago", "Payment_Id": "66389b7570693a091bde68ea27017a42157076b6", "User": "Franky", "Currency": "COP", "Payment_Amount": "₹7.17", "Payment_Status": "Succeeded", "Ip_Address": "57.194.125.8", "Date": "1/19/2023" },

        { "id": 35, "Order": 35, "Payment_Method": "Iyzico", "Payment_Id": "ff4980542a2e4a980d83d15823850025300e6a1e", "User": "Codie", "Currency": "PHP", "Payment_Amount": "₹8.67", "Payment_Status": "COMPLETED", "Ip_Address": "24.136.15.195", "Date": "4/20/2023" },

        { "id": 36, "Order": 36, "Payment_Method": "Midtrans", "Payment_Id": "ee3ca8b009e38b78fdb66cdd1af531109d9540a0", "User": "Vin", "Currency": "RUB", "Payment_Amount": "₹9.97", "Payment_Status": "success", "Ip_Address": "182.177.226.238", "Date": "2/23/2023" },

        { "id": 37, "Order": 37, "Payment_Method": "Iyzico", "Payment_Id": "c0a37f88c11984ac38d71109a3e20754b5965455", "User": "Rhiamon", "Currency": "TND", "Payment_Amount": "₹4.85", "Payment_Status": "COMPLETED", "Ip_Address": "167.61.51.73", "Date": "10/28/2022" },

        { "id": 38, "Order": 38, "Payment_Method": "Stripe", "Payment_Id": "9828a4498fcc8031d963bde78916a346e89b904c", "User": "Rickert", "Currency": "ERN", "Payment_Amount": "₹8.78", "Payment_Status": "success", "Ip_Address": "38.51.120.100", "Date": "6/7/2023" },

        { "id": 39, "Order": 39, "Payment_Method": "Midtrans", "Payment_Id": "476287e5bdadb75b1ff36db5287e6379c33494a6", "User": "Maris", "Currency": "BRL", "Payment_Amount": "₹2.95", "Payment_Status": "COMPLETED", "Ip_Address": "60.17.31.94", "Date": "9/30/2022" },

        { "id": 40, "Order": 40, "Payment_Method": "Midtrans", "Payment_Id": "418ac719fb2948ae7a99f1e008328c2b6d2ce000", "User": "Winne", "Currency": "EUR", "Payment_Amount": "₹3.39", "Payment_Status": "COMPLETED", "Ip_Address": "81.87.31.109", "Date": "4/18/2023" }
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


    // Status Filter 
    const [selectedStatus] = useState('All');
    const [selectedPaymentStatus] = useState('All');



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