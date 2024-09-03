import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className='container'>
      <div className='kalkulator'>
        <form action=''>
          <div className='display'>
            <input type='text' value={value}/>
          </div>
          <div>
            <input type='button' value="AC" className='color1' onClick={(e) => setValue('')}/>
            <input type='button' value="DE" className='color1' onClick={(e) => setValue(value.slice(0, -1))}/>
            <input type='button' value="." className='color1' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="/" className='color2' onClick={(e) => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' value="7" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="8" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="9" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="*" className='color2' onClick={(e) => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' value="4" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="5" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="6" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="+" className='color2' onClick={(e) => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' value="1" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="2" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="3" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="-" className='color2' onClick={(e) => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' value="00" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="0" className='color' onClick={(e) => setValue(value + e.target.value)}/>
            <input type='button' value="=" className='equal' onClick={(e) => setValue(eval(value))}/>
            <input type='button' value="%" className='color2' onClick={(e) => setValue(value + e.target.value)}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
