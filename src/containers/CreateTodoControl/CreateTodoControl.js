import React, { useState } from 'react';

const CreateTodoControl = () => {
  const [title, setTitle] = useState('title');
  const [description, setDescription] = useState('description');
  const [complete, setComplete] = useState(false);
  

  const handleChange = ({ target }) => {
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'description') setDescription(target.value);
    if(target.name === 'complete') setComplete(target.value);
  }
  return (
    <>

    </>
  )
}