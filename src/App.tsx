import React, { useState, ChangeEvent, useRef, FormEvent } from 'react';
import './App.css';

function App() {
  const [controlVal, setControlVal] = useState<string>('controlVal')


  function controlChange(event: ChangeEvent<HTMLInputElement>) {
    setControlVal(event.target.value)
  }

  let inputEl = useRef<any>(null)

  const handleClick = () => {
    console.log( inputEl.current.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <div className="App">
      <form name="control-form">
        controlVal:{controlVal}
        <input type="text" value={controlVal} onChange={controlChange}/>
      </form>
      <form name="uncontrol-form" onSubmit={handleSubmit}>
        {/* uncontrolVal:{inputEl.current.value} */}
        <input type="text"  ref={inputEl}/>
        <button onClick={handleClick}>点击登入</button>
      </form>
    </div>
  );
}

export default App;
