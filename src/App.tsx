import React, { 
  // useEffect,
  useState , useMemo} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [num, setNum] = useState(0)



  // const [dbNum, setDbNum] = useState(num*2)
  // 虽然这样写也能模拟 vue 的 computed，但更好的做法是用 useMemo。useEffect 更接近 vue 中的 watch
  // useEffect( () => {    
  //   setDbNum(num*2)
  // }, [num])

  const memoizedValue = useMemo(() => num*2 , [num]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="number" value={num} onChange={e => setNum(+e.currentTarget.value)}/>
        {num} *2 = {memoizedValue}
        {/* {num*2} */}
      </header>
    </div>
  );
}

export default App;
