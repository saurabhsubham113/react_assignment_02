import React from 'react'

const Issue = ({ issue }) => {
    const borderStyle = {
        border: '1px solid black'
    }
    return (
        <>
            <td style={borderStyle}>{issue.id}</td>
            <td style={borderStyle}>{issue.description}</td>
            <td style={borderStyle}>{issue.severity}</td>
            <td style={borderStyle}>{issue.status}</td>
        </>
    )
}

export default Issue;
