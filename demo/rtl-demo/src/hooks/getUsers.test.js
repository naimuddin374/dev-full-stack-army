import { renderHook, waitFor } from "@testing-library/react"
import useUsers from "./getUsers"
import axios from 'axios'

jest.mock('axios')

describe('useUsers', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should fetch users when the hook is called', async () => {
        const expectedUsers = [
            { id: 1, name: 'Md Naim' },
            { id: 2, name: 'Rakib' },
            { id: 3, name: 'Arif' },
        ];

        axios.get.mockResolvedValueOnce({ data: expectedUsers });


        const { result } = renderHook(() => useUsers())

        expect(result.current.users).toBeNull()
        expect(result.current.error).toBeNull()
        expect(result.current.loading).toBe(true)


        await waitFor(() => expect(result.current.loading).toBe(false))
        expect(result.current.users).toEqual(expectedUsers)
        expect(result.current.error).toBeNull()
    })

    it('should sent an error message when the request fails', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValueOnce({ message: errorMessage })

        const { result } = renderHook(() => useUsers())

        expect(result.current.loading).toBe(true)
        expect(result.current.error).toBeNull()
        expect(result.current.users).toBeNull()

        await waitFor(() => expect(result.current.loading).toBe(false))
        expect(result.current.users).toBeNull()
        expect(result.current.error).toEqual(errorMessage)
    })
})