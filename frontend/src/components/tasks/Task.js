import axios from 'axios'
import React, { useEffect, useReducer} from 'react'
import { Link, useParams } from 'react-router-dom'
import { ACTION_TYPES } from '../../actions/taskActions'
import {taskDetailReducer} from '../../reducers/taskReducer'
import {TASK_DETAIL_STATE} from '../../state/loadingState'
import { api } from '../../api/api'
import Spinners from '../pages/Spinners'
import { Messages } from '../pages/Messages'

function Task() {
  const [state, dispatch] = useReducer(taskDetailReducer, TASK_DETAIL_STATE)
  const { id } = useParams()
  useEffect(function () {
    dispatch({type:  ACTION_TYPES.TASK_DETAIL_REQUEST})
    function getTask() {
      axios.get(api.tasks.retrieve(id))
        .then(task => {
          dispatch({type: ACTION_TYPES.TASK_DETAIL_SUCCESS, payload: task.data})
        })
        .catch((error) => {
          dispatch({
            type:  ACTION_TYPES.TASK_DETAIL_FAIL,
            error: error.message,
              })
              console.log(error.message)
        })
    }
    getTask()
    return () => null
  }, [id])
  return (
    <>
    <div className='home'>
    <Link to='/'>&larr; Back</Link>
    </div>
   <div className='post'>
    {state.loading ? <Spinners /> : state.error ? <Messages variant='danger'>Oops! something went wrong!</Messages> : (
      <>
      {state.task && (
        <div className='post--detail'>
        <h5 className='post--detail--text'>
          {state.task.name}
        </h5>
        <p className='post--detail--description'>
          {state.task.description}
          <br/>
          <br/>
          <h3 className='post--detail--tags'>Job Requiremnts</h3>
          {state.task.requirements && state.task.requirements.map(tag => {
            return (
              <h6 className='post--detail--requirements'>
            {tag.name}
          </h6>
            )
          })}
          <hr/>
          <strong>Posted on {new Date(state.task.date_created).toDateString()}</strong>
        </p>
      </div>
      )}
      </>
    )}
   </div>
    </>
  )
}

export default Task