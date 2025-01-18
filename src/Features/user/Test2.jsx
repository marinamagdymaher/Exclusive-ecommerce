import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { generateToken, decodeToken } from './jwt';

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState('');
  const [payload, setPayload] = useState(null);

  const handleGenerateToken = () => {
    const payload = { userId: 1, username: 'testUser2' }; // Replace with your payload
    const token = generateToken(payload);
    setToken(token);
    setPayload(null);
  };

  const handleDecodeToken = () => {
    try {
      const decodedPayload = decodeToken(token);
      setPayload(decodedPayload);
    } catch (error) {
      console.error('Invalid token', error);
    }
  };

  return (
    <>
      <div>
        <a href="⁦https://vite.dev⁩" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="⁦https://react.dev⁩" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleGenerateToken}>Generate JWT Token</button>
        <button onClick={handleDecodeToken} disabled={!token}>
          Decode JWT Token
        </button>
        {token && (
          <p>
            JWT Token: <code>{token}</code>
          </p>
        )}
        {payload && (
          <p>
            Decoded Payload: <code>{JSON.stringify(payload)}</code>
          </p>
        )}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;