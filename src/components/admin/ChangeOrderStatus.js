import React, { useState } from 'react'
import styled from 'styled-components'
import authAPI from '../../api/axios'
import { StyledButton } from '../ui/Button'

const ChangeOrderStatus = ({ status, orderId }) => {
// why select value=props.status doesnt work
    const [orderStatus, setOrderStatus] = useState(status)
    const changeOrderStatus = async (e) => {
        e.preventDefault()
        await authAPI.patch(`/admin/order/${orderId}`, { status: orderStatus })
    }

    return (
        <div>
            <span>Status: </span>
            <select value={orderStatus} name="Status" onChange={e => setOrderStatus(e.target.value)}>
                <option value="In proccess">In progress</option>
                <option value="Shipped">Shipped</option>
                <option value="Completed">Completed</option>
            </select>
            <StyledBtn type="submit" onClick={changeOrderStatus}>save</StyledBtn>
        </div>
    )
}

export default ChangeOrderStatus

const StyledBtn = styled(StyledButton)`
    width: 5rem;
    margin-bottom: 1rem;
`
