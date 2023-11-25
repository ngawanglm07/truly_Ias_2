import React from 'react'

function Topic() {
  return (
    <div>    
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to="/topics/react">React</Link>
      </li>
      <li>
        <Link to="/topics/javascript">JavaScript</Link>
      </li>
      {/* Add more subtopics as needed */}
    </ul></div>
  )
}

export default Topic