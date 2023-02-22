import { render, screen } from "@testing-library/react";
import { computeSomethingExpensive } from "../../utils/utils";
import ExpensiveComponent from "./ExpensiveComponent";


jest.mock('../../utils/utils')

test('Expensive Component should display the result of the computeSomethingExpensive', () => {

    const expectedResult = 100;
    
    computeSomethingExpensive.mockReturnValueOnce(expectedResult);

    render(<ExpensiveComponent />)

    const element = screen.getByTestId('expensive-node');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(expectedResult)

})