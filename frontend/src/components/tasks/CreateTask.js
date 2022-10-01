import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../api/api'

function CreateTask() {
  // const [task, setTask] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [requirements, setRequirements] = useState('')
  const [tasked, setTasked] = useState(false)
  const handleClick = () => setTasked(!tasked)

  console.log('crete new task')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name: name,
      description: description,
      requirements: requirements,
      tasked: tasked

    }
    // e.preventDefault()
    axios.post(api.tasks.create, data, {
      'Content-type': 'Application/json'
    })
      .then(() => navigate('/'))
      .catch(error => console.log(error.message))
  }
  return (
    <div className='create-task'>
        <form onSubmit={handleSubmit} className='create-task--task-form'>
          <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} className='create-task--task-form--task-inputs' placeholder='Task Name..' />
          <textarea type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} className='create-task--task-form--task-inputs create-task--task-form--textarea' placeholder='Task Description..'/>
          <textarea type='text' name='requirements' value={requirements} onChange={(e) => setRequirements(e.target.value)} className='create-task--task-form--task-inputs create-task--task-form--textarea' placeholder='Task Requirments with comma separated..'/>
          <p className='create-task--task-form--task-input'>
            <p>Task finished?</p>
          <input type='checkbox' checked={tasked} onClick={handleClick} name='tasked' onChange={(e) => setTasked(e.target.value)} className='create-task--task-form--task-input--checkbox' />
          </p>
          <button type='submit' className='create-task--task-form--task-btn'>Create  task</button>
        </form>
    </div>
  )
}

export default CreateTask;
