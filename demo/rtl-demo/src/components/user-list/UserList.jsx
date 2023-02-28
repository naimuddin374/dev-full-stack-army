import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('/api/users')
            .then(data => setUsers(data.data))
            .catch(err => setError(err.message))
    }, [])

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <div>
        <h3 data-testid='list-header'>List Items</h3>
        <table role='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}
export default UserList;