import { render, screen } from "@testing-library/react"
import List from "./List"

describe('List component with data props', () => {
    it('should test list header', () => {
        render(<List />)

        const header = screen.getByTestId('list-header')
        expect(header).toBeInTheDocument()
        expect(header).toHaveTextContent('List Items')
    })


    it('should test empty data props', () => {
        render(<List />)

        screen.getByTestId('list-container')

        const listItems = screen.queryAllByTestId('list-item');
        expect(listItems).toHaveLength(0)
    })


    it('should test correct with items', () => {
        const data = ['One', 'Two', 'Three']

        render(<List data={data} />)

        const listItems = screen.getAllByTestId('list-item')
        expect(listItems).toHaveLength(3)

        listItems.forEach((item, index) => {
            expect(item.textContent).toBe(data[index])
        })
    })
})