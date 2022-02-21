import postal from "postal";
import { useEffect } from "react";
import "./App.css";
import Attendance from "./components/Attendance";

function App() {
  const appEventsChannel = postal.channel("app_events");

  useEffect(() => {
    // listen to sign requests
    const subscription = appEventsChannel.subscribe(
      "ATTENDANCE",
      function (url, envelope) {
        console.log(envelope);
      }
    );
    return () => {
      subscription.unsubscribe();
    }
  });
  return (
    <div>
      <h1>Attendance App</h1>
      <Attendance classData={{ name: "C-II", total: 50 }}></Attendance>
    </div>
  );
}

export default App;
