import React, { useState } from 'react'
import { Card, PasswordInput } from '@mantine/core'
import './ChangePassword.css'
const ChangePassword = () => {

    const [changePassword, setChangePassword] = useState(
        {
            old_password: '',
            new_password: '',
            confirm_password: '',
        }
    )

    return (
        <div>
            <div className="change-password-div">
                <Card className="change-password-div-card">
                    <div className="change-password-div-card-heading">
                        <h2>Change Password</h2>
                    </div>
                    <div className="change-password-div-card-content">
                        <div className="change-password-div-card-content-form">
                            <div className="change-password-div-card-content-form-individual">
                                <PasswordInput
                                    label="Old Password"
                                    radius="xs"
                                    value={changePassword.old_password}
                                    onChange={(e) => setChangePassword({
                                        ...changePassword,
                                        old_password: e.target.value
                                    })
                                    }
                                />
                            </div>
                            <div className="change-password-div-card-content-form-individual">
                                <PasswordInput
                                    label="New Password"
                                    radius="xs"
                                    value={changePassword.new_password}
                                    onChange={(e) => setChangePassword({
                                        ...changePassword,
                                        new_password: e.target.value
                                    })
                                    }
                                />
                            </div>
                            <div className="change-password-div-card-content-form-individual">
                                <PasswordInput
                                    label="Confirm Password"
                                    radius="xs"
                                    value={changePassword.confirm_password}
                                    onChange={(e) => setChangePassword({
                                        ...changePassword,
                                        confirm_password: e.target.value
                                    })
                                    }
                                />
                            </div>
                            <div className="change-password-div-card-content-form-button">
                                <button>Change Password</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default ChangePassword