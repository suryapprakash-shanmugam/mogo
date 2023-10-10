import React, { useState } from 'react'
import { Button, Card, Input, Modal, Select, Text } from '@mantine/core'
import './BankDetails.css'
import plus from '../../../assets/admin/table/dropdown/plus.png'
import edit from '../../../assets/admin/table/dropdown/edit.png'
import trash from '../../../assets/admin/table/dropdown/trash.png'
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import { modals } from '@mantine/modals';

const BankDetails = () => {

    const openDeleteModal = () =>
        modals.openConfirmModal({
            zIndex:'12341',
            title: 'Delete your profile',
            centered: true,
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

    const [modalOpen, setModalOpen] = useState(false)
    const [editmodalOpen, seteditModalOpen] = useState(false)

    const accountType = [
        { value: 'Savings', label: 'Savings' },
        { value: 'Active', label: 'Active' },
    ]

    const [bankDetails, setBankDetails] = useState({
        accountholder: '',
        bankname: '',
        accountnumber: '',
        accounttype: '',
        accountifsc: '',
    })

    return (
        <div>
            <div className="bank-details-div">
                <Card className='bank-details-div-card'>
                    <div className="bank-details-div-card-heading">
                        <h2>Bank Details</h2>
                        <button onClick={() => setModalOpen(true)}><img src={plus} width={12} alt="plus icon" />Add Bank Details</button>
                    </div>
                    <div className="bank-details-div-card-content">
                        <div className="bank-details-div-card-content-show-bank-details">
                            <div className="bank-details-div-card-content-show-bank-details-individual">
                                <h5>Account Holder : </h5>
                                <p>Bank Name : </p>
                                <p>Account Number : </p>
                                <p>Account Type : </p>
                                <p>IFSC Code : </p>
                                <div className="bank-details-div-card-content-show-bank-details-individual-buttons">
                                    <button onClick={() => seteditModalOpen(true)}><img src={edit} width={12} alt="edit icon" />Edit</button>
                                    <button onClick={openDeleteModal}><img src={trash} width={12} alt="trash icon" />Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <Modal
                zIndex={12121}
                size={'lg'}
                opened={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Add Bank Details"
                className='bank-details-from'
            >
                <div className="bank-details-form-individual">
                    <Input.Wrapper
                        label="Account Holder Name"
                    >
                        <Input
                            value={bankDetails.accountholder}
                            placeholder="Account Holder Name"
                            onChange={(e) => {
                                setBankDetails({
                                    ...bankDetails,
                                    accountholder: e.target.value
                                })
                            }}
                        />
                    </Input.Wrapper>
                </div>
                <div className="bank-details-form-individual">
                    <Input.Wrapper
                        label="Bank Name"
                    >
                        <Input
                            value={bankDetails.bankname}
                            placeholder="Bank Name"
                            onChange={(e) => {
                                setBankDetails({
                                    ...bankDetails,
                                    bankname: e.target.value
                                })
                            }}
                        />
                    </Input.Wrapper>
                </div>
                <div className="bank-details-form-individual">
                    <Input.Wrapper
                        label="Account Number"
                    >
                        <Input
                            value={bankDetails.accountnumber}
                            placeholder="Account Number"
                            onChange={(e) => {
                                setBankDetails({
                                    ...bankDetails,
                                    accountnumber: e.target.value
                                })
                            }}
                        />
                    </Input.Wrapper>
                </div>
                <div className="bank-details-form-individual">
                    <Select
                        rightSection={<img src={arrowdown} width={11} alt="arrowdown icon" />}
                        label="Account Type"
                        placeholder="Select"
                        searchable
                        nothingFound="No options"
                        data={accountType}
                        value={bankDetails.accounttype}
                        onChange={(e) => {
                            setBankDetails({
                                ...bankDetails,
                                accounttype: e
                            })
                        }}
                    />
                </div>
                <div className="bank-details-form-individual">
                    <Input.Wrapper
                        label="IFSC Code"
                    >
                        <Input
                            value={bankDetails.accountifsc}
                            placeholder="IFSC Code"
                            onChange={(e) => {
                                setBankDetails({
                                    ...bankDetails,
                                    accountifsc: e.target.value
                                })
                            }}
                        />
                    </Input.Wrapper>
                </div>
                <div className="model-btn-style bank-details-btn">
                    <Button color="teal">
                        Save Changes
                    </Button>
                    <Button color="red" onClick={() => setModalOpen(false)}>
                        Close
                    </Button>
                </div>
            </Modal>
            <Modal
                zIndex={12121}
                size={'lg'}
                opened={editmodalOpen}
                onClose={() => seteditModalOpen(false)}
                title="Edit Bank Details"
                className='bank-details-from'
            >
                <div className="bank-details-form-individual">
                    <Input.Wrapper
                        label="Account Holder Name"
                    >
                        <Input
                            value={bankDetails.accountholder}
                            placeholder="Account Holder Name"
                            onChange={(e) => {
                                setBankDetails({
                                    ...bankDetails,
                                    accountholder: e.target.value
                                })
                            }}
                        />
                    </Input.Wrapper>
                </div>
                <div className="bank-details-form-individual">
                    <Input.Wrapper
                        label="Bank Name"
                    >
                        <Input
                            value={bankDetails.bankname}
                            placeholder="Bank Name"
                            onChange={(e) => {
                                setBankDetails({
                                    ...bankDetails,
                                    bankname: e.target.value
                                })
                            }}
                        />
                    </Input.Wrapper>
                </div>
                <div className="bank-details-form-individual">
                    <Input.Wrapper
                        label="Account Number"
                    >
                        <Input
                            value={bankDetails.accountnumber}
                            placeholder="Account Number"
                            onChange={(e) => {
                                setBankDetails({
                                    ...bankDetails,
                                    accountnumber: e.target.value
                                })
                            }}
                        />
                    </Input.Wrapper>
                </div>
                <div className="bank-details-form-individual">
                    <Select
                        rightSection={<img src={arrowdown} width={11} alt="arrowdown icon" />}
                        label="Account Type"
                        placeholder="Select"
                        searchable
                        nothingFound="No options"
                        data={accountType}
                        value={bankDetails.accounttype}
                        onChange={(e) => {
                            setBankDetails({
                                ...bankDetails,
                                accounttype: e
                            })
                        }}
                    />
                </div>
                <div className="bank-details-form-individual">
                    <Input.Wrapper
                        label="IFSC Code"
                    >
                        <Input
                            value={bankDetails.accountifsc}
                            placeholder="IFSC Code"
                            onChange={(e) => {
                                setBankDetails({
                                    ...bankDetails,
                                    accountifsc: e.target.value
                                })
                            }}
                        />
                    </Input.Wrapper>
                </div>
                <div className="model-btn-style bank-details-btn">
                    <Button color="teal">
                        Save Changes
                    </Button>
                    <Button color="red" onClick={() => seteditModalOpen(false)}>
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

export default BankDetails