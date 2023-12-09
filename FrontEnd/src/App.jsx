import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes]=useState([]);

  useEffect(()=>{
    axios.get('api/jokes')
    .then((Response)=>{
      setJokes(Response.data)
    })

    .catch((error)=>{
      console.log(error.error)
    })

  })
  return (
    <>
      <h1>This is Sai Harsha -----!</h1>
      <p>Jokes are : {jokes.length}</p>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <p>{joke.Name}</p>
            <p>{joke.Course}</p>
          </div>
        ))

      }
    </>
  )
}

export default App
