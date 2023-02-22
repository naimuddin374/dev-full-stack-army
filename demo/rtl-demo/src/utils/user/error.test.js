import axios from "axios";
import { myFunction } from "./error";

jest.mock('axios')


describe('API Error', () => {
    it('should return 400 error', async () => {
        axios.get.mockRejectedValueOnce({ status: 400 })

        const data = await myFunction(1)
        expect(data).toEqual('Error')
    })
})