import React from 'react';
import logo from './logo.svg';
import './App.css';
const Attendance = React.lazy(() => import('AttendanceApp/Attendance'));

function App() {
  let data = {name:"Class I", status:"Pending", present:0, absent:0,  total: 30}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <React.Suspense fallback="Loading Button">
          <Attendance classData={data} name={data.name} ></Attendance>
        </React.Suspense>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
