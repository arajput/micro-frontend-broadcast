import React from "react";
import "./App.css";

// const Attendance = React.lazy(() => import('AttendanceApp/Attendance'));
// const MyClasses = React.lazy(() => import('ClassesApp/MyClasses'));
const FossologyRemote = React.lazy(() => import("fossology/App"));

function App() {
  const bc = new BroadcastChannel("app_channel");

  return (
    <div>
      <h1>From HOST</h1>
      <React.Suspense fallback="Loading Button">
        {/* <MyClasses name="C123456"/> */}

        <FossologyRemote />
      </React.Suspense>
    </div>
  );
}

export default App;
