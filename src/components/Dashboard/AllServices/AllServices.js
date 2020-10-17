import React, { useState, useEffect, useContext } from 'react';
import { Card, Table, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import TableCell from './TableCell/TableCell';
const AllServices = () => {
    //LoggedIn User State
    const [loggedInUser, setLoggedInUser, isAdmin, setIsAdmin] = useContext(UserContext);
    const [serviceLists, setServiceLists] = useState([])

    useEffect(() => {
        fetch('https://nameless-shelf-48183.herokuapp.com/my-orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setServiceLists(data))
    }, [])

    const handleSelect = (e, i) => {
        console.log(e);
        console.log(this);
        console.log(Window.event);
        // setValue({
        //     dropdownSelect: e,
        // })
    }
    return (
        <div className="dash-panel-section d-flex flex-column py-4" style={{ height: "100%" }}>
            <div class="panel-title ">
                <h3>All Orders</h3>
                <p>Hello, {loggedInUser.name}</p>
            </div>
            <div class="dash-panel" style={{ height: '100%' }}>

                <Card className="m-5 dashboard-card p-4">
                    <Table borderless responsive className="">
                        <thead className="table-head">
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Project Details</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {serviceLists.length === 0 && <Spinner animation="grow" variant="success" />
                            }
                            {serviceLists.map(serviceList => <TableCell serviceList={serviceList} key={serviceList._id}></TableCell>)}
                        </tbody>
                    </Table>
                </Card>
            </div>
        </div>


    );
};

export default AllServices;