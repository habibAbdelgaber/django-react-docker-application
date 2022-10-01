import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../api/api'

function UpdateTask() {
  const [task, setTask] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [tasked, setTasked] = useState(false)
  const handleClick = () => setTasked(!tasked)
  const { id } = useParams()


  const navigate = useNavigate()

  
  useEffect(function () {
    function getTask() {
      axios.get(api.tasks.retrieve(id))
        .then(res => {
          console.log(res.data)
          setTask(res.data)
          // navigate('/')
        })
        .catch(error => console.log(error.message))
    }
    getTask()
  }, [id])

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name: name,
      description: description,
      tasked: tasked

    }
    // e.preventDefault()
    axios.put(api.tasks.update(id), data, {
      'Content-type': 'Application/json'
    })
      .then(() => navigate('/'))
    .catch(error => console.log(error.message))
  }
  return (
    <Row className='my-3 justify-content-center align-items-center' style={{ minHeight: '50vh' }}>
      <Col md={6}>
        {task && (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} className='form-control'/>
            <br/>
            <textarea type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' />
            <br/>
            <p>
              <span className=''>finish:</span>
              <span className='ms-2 my-3'>
              <input type='checkbox' checked={tasked} onClick={handleClick} name='tasked' onChange={(e) => setTasked(e.target.value)} className='pt-2' />
              </span>
            </p>
            {/* <br/> */}
          <button type='submit' className='btn btn-primary form-control'>update  task</button>
        </form>
        )}
      </Col>
    </Row>
  )
}

export default UpdateTask;