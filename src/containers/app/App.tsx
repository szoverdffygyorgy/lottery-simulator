import { useCallback, useState } from 'react';
import LotterySpeed from '../lottery-speed/lottery-speed';
import { Wrapper } from './App.styles';

function App() {
  const [drawSpeed, setDrawSpeed] = useState(500);

  const onSliderValueChange = useCallback((newValue: number) => {
    console.log({ newValue });
    setDrawSpeed(newValue);
  }, []);

  return (
    <Wrapper>
      <LotterySpeed speed={drawSpeed} onSpeedChange={onSliderValueChange} />
    </Wrapper>
  );

  /* const [count, setCount] = useState(0);

   return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={async () => {
            console.log(await fetchRandomNumbers());
          }}
        >
          Click me
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  ); */
}

export default App;
