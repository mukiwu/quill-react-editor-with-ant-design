import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function App() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full h-full">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  )
}

export default App
