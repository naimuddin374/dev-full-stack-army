import { useState } from 'react'


function App() {
  const [color, setColor] = useState('red')
  const [checked, setChecked] = useState(false)

  const btnText = color === 'red' ? 'Blue' : 'Red'

  const handleClick = () => {
    setColor(color === 'red' ? 'blue' : 'red')
  }

  const handleCheckbox = (e) => {
    setChecked(e.target.checked)
  }


  return (
    <div className="App">
      <button style={{ backgroundColor: checked ? 'gray' : color }} onClick={handleClick} disabled={checked}>Change to {btnText}</button>
      <div>
        <input type='checkbox' id='checkbox' checked={checked} onChange={handleCheckbox} />
        <label htmlFor='checkbox'>Change the button state</label>
      </div>
    </div>
  );
}

export default App;
