import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/pages/Layout';
import Task from './components/tasks/Task';
import ListTask from './components/tasks/ListTask';
import UpdateTask from './components/tasks/UpdateTask';
import CreateTask from './components/tasks/CreateTask';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ListTask />} exact />
          <Route path="add-task" element={<CreateTask />} exact/>
          <Route path="task-detail/:id" element={<Task />} exact />
          <Route path="task-detail/:id/update" element={<UpdateTask />} exact/>
          <Route path='login' element={<Login/>} exact/>
          <Route path='signup' element={<Signup/>} exact/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
