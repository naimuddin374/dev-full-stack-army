import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState(null)

    useEffect(() => {
        axios.get('/api/v1/users')
            .then(data => {
                setUsers(data.data)
            })
            .catch(error => setError(error.message))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return {
        loading, error, users
    }
}
export default useUsers;