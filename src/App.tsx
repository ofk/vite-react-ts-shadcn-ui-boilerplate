import { useState } from 'react';

import reactLogo from '@/assets/react.svg';

// eslint-disable-next-line import/no-absolute-path
import viteLogo from '/vite.svg';

export function App(): React.ReactElement {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="hover:drop-shadow-vite-logo inline-block h-24 p-6 transition"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="hover:drop-shadow-react-logo animate-spin-react-logo inline-block h-24 p-6 transition"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold">Vite + React</h1>
      <div className="p-8">
        <button
          type="button"
          className="cursor-pointer rounded-lg border border-solid border-transparent bg-muted px-5 py-2.5 font-medium transition duration-200 hover:border-indigo-500"
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
        >
          count is {count}
        </button>
        <p className="my-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="my-4 text-muted-foreground">Click on the Vite and React logos to learn more</p>
    </>
  );
}
