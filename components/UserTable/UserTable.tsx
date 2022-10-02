import React, { useEffect, useState } from 'react'
import DataTable from '../DataTable/DataTable';

const columns = [
    { field: 'id', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 200 },
];

const userTableStyles = {
    height: '650px',
    color:"#fff",
};

const UserTable = ({ onError }:any) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setUsers(json)})
            .catch(() => onError())
    }, []);

    return (
        <DataTable
            rows={users}
            columns={columns}
            loading={!users.length}
            sx={userTableStyles}
        />
    );
};

export default UserTable