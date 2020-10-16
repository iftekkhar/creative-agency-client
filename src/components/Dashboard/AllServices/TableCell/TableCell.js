import React from 'react';
import { Dropdown, Form } from 'react-bootstrap';

const TableCell = ({ serviceList, handleBlur }) => {
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