import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Red-Blue Button', () => {
  it('should have correct initial color', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /blue/i })
    expect(button).toHaveStyle('background-color: red')
  })

  it('should have the correct initial text', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /blue/i })
    expect(button).toHaveTextContent('Change to Blue')
  })

  it('should turn blue when clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /blue/i })
    fireEvent.click(button)
    expect(button).toHaveStyle('background-color: blue')
  })

  it('should changed the text when clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /blue/i })
    fireEvent.click(button)
    expect(button).toHaveTextContent('Change to Red')
  })
})



// Button Controller Checkbox
describe('Button Controller Checkbox', () => {
  it('should be unchecked initially', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Change the button state' })
    expect(checkbox).not.toBeChecked()
  })
  it('should enable the button initially', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Change/i })
    expect(button).toBeEnabled()
  })
  it('should disabled the button when clicked', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Change the button state' })
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    const button = screen.getByRole('button', { name: /Change/i })
    expect(button).toBeDisabled()
  })

  it('should button color gray when checkbox clicked', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Change the button state' })
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    const button = screen.getByRole('button', { name: /Change/i })
    expect(button).toHaveStyle('background-color: gray')
  })
})