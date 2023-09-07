//import react packages
import React from 'react'

//import Breadcrumb css
import './Breadcrumb.css'

//import mantine packages
import { Breadcrumbs } from '@mantine/core';

//import react-router-dom packages
import { Link } from 'react-router-dom'


const Breadcrumb = ({ value }) => {
    return (
        <div>
            <Breadcrumbs className='breadcrumb'>
                {value.map((item, index) => (
                    <React.Fragment key={index}>
                        {index === value.length - 1 ? (
                            <span className='breadcrumb-current'>{item.title}</span>
                        ) : (
                            <Link className='breadcrumb-link' to={item.href}>{item.title}</Link>
                        )}
                        {index < value.length - 1 && <span></span>}
                    </React.Fragment>
                ))}
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb