import React from 'react'

export default function CompanyItem({ company: { company_title }}) {
    return (
        <div>
            <div>Company Title: { company_title }</div>
        </div>
    )
}
