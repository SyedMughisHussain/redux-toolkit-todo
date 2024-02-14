import React from 'react'
import { useSelector } from 'react-redux'

const ShowTodo = () => {
    const data = useSelector((state) => state.todos.todos);
    console.log(data);
  return (
    <>
    {
        data.map((item, index) => {
            return <div key={index}>
                <h1>{item.text}</h1>
            </div>
        } )
    }
    </>
  )
}

export default ShowTodo