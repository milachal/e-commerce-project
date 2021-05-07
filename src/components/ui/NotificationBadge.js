import React from 'react'
import styled from 'styled-components'

const NotificationBadge = (props) => {
    return (
        <Badge>{props.children}</Badge>
    )
}

export default NotificationBadge

const Badge = styled.span`
    position: absolute;
    right: 2px;
    padding: 5px 10px;
    border-radius: 50%;
    background-color: red;
    color: white;
`