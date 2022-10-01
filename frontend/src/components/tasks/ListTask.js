import Table from 'react-bootstrap/Table';
import { Row, Col } from 'react-bootstrap'
import { useContext, useEffect, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { api } from '../../api/api';
import { taskReducer } from '../../reducers/taskReducer';
import Spinners from '../pages/Spinners';
import { ACTION_TYPES } from '../../actions/taskActions';
import { AuthCentext } from '../../context/AuthContext';
import { Messages } from '../pages/Messages';
import { TASK_LIST_STATE } from '../../state/loadingState';


function ListTask() {
   const { user } = useContext(AuthCentext)
   const [state, dispatch] = useReducer(taskReducer, TASK_LIST_STATE)
   // console.log(state)
   const navigate = useNavigate()


   useEffect(() => {
      dispatch({ type: ACTION_TYPES.TASK_LIST_REQUEST })
      function getTasks() {
         axios.get(api.tasks.tasks)
            .then(task => {
               dispatch({ type: ACTION_TYPES.TASK_LIST_SUCCESS, payload: task.data })
               console.log(task.data)
            })
            .catch(() => dispatch({ type: ACTION_TYPES.TASK_LIST_FAIL }))
      }
      getTasks()
      return () => null;
   }, [])
   return (
      <div className='list-container'>
         <div className='list-container--posts'>posts</div>
         {state.loading ? <Spinners /> : state.error ? <Messages variant='danger'>{state.error}</Messages> : (
            <div className='list-container--tasks'>
               {state.tasks && state.tasks.map((task) => {
                  return (
                     <div key={task.id}>
                        <h6 className='list-container--tasks--task-text'>
                           <Link to={`task-detail/${task.id}`} className='list-container--tasks--task-text--link'>
                              {task.name}
                           </Link>
                           {task.requirements}
                        </h6>
                        {!task.requirements ? 'task has no requirements' : (
                           <ul className='tags'>
                              <h5>Requiremnts</h5>
                              {task.requirements && [task.requirements].split(',').map((requirement, index) => {
                                 return (

                                    <li key={requirement.id}>
                                    {/* <li key={requirement.id}> */}
                                       {/* {requirement} */}
                                       {index + 1} {requirement}
                                    </li>
                                 )
                              })}
                           <p>{new Date(task.date_created).toDateString()}</p>
                           </ul>
                        )}
                        {/* <p>{task.description}</p> */}
                        <hr />
                     </div>
                  )
               })}
            </div>
         )}
      </div>
   );
}

export default ListTask;