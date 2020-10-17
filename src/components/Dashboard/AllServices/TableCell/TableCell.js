import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const TableCell = ({ serviceList }) => {

    return (
        <tr>
            <td>{serviceList.name}</td>
            <td>{serviceList.email}</td>
            <td>{serviceList.title}</td>
            <td>{serviceList.details}</td>
            <td>{serviceList.status}
            </td>
        </tr>
    );
};

export default TableCell;