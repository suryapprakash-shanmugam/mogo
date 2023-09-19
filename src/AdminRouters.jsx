//import react packages
import React from 'react'

//import react-router-dom packages
import { useLocation } from 'react-router-dom';

//import dashboard from pages->admin->dashboard
import Dashboard from './pages/Admin/Dashboard/Dashboard';

const AdminRouters = () => {
    const location = useLocation();

    window.scrollTo(0, 0)

    const bodyContent = {
        '/admin_dashboard': <Dashboard />,
    }

    const renderBodyData = bodyContent[location.pathname] || null

    return (
        <div>
            <div>
                header
            </div>
            <div>{renderBodyData}</div>
            <div>
                footer
            </div>
        </div>
    )
}

export default AdminRouters