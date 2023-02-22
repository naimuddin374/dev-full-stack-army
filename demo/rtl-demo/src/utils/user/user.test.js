import axios from "axios";
import { getUserData } from "./user";

jest.mock('axios')


test('getUserData should return the user data', async () => {
    const user = { id: 1, name: 'Naim Uddin' }
    axios.get.mockResolvedValueOnce({ data: user })

    const userData = await getUserData(1)
    expect(userData).toEqual(user)
})