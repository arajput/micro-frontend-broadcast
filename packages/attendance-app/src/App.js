import './App.css';
import Attendance from './components/Attendance';

function App() {
  return (
    <div>
      <h1>Attendance App</h1>
      <Attendance classData={{name:"C-II", total:50 }}></Attendance>
    </div>
  );
}

export default App;
