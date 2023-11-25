import React from 'react'
import { useParams } from 'react-router-dom';

function Subtopic() {
  const { subtopicName } = useParams();
  return (
    <div>{`Welcome to the ${subtopicName} subtopic page!`}</div>
  )
}

export default Subtopic





