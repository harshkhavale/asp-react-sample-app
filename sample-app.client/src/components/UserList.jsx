import React, { useState, useEffect } from 'react';
import { getUsers, createUser } from '../UserService';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const users = await getUsers();
        setUsers(users);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email };
        await createUser(newUser);
        setName('');
        setEmail('');
        fetchUsers();
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">User List</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group mb-3">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Name"
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Email"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
            <ul className="list-group">
                {Array.isArray(users) && users.map(user => (
                    <li key={user.id} className="list-group-item">{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
