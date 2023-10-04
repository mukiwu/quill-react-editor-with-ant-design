import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import EditorToolbar, { modules, formats } from './components/EditorToolbar'
import 'react-quill/dist/quill.snow.css'

function App() {
  const [value, setValue] = useState('')
  // const modules = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline', 'strike'],
  //     [{ header: 1 }, { header: 2 }],
  //     [{ 'size': ['small', false, 'large', 'huge'] }]
  //   ]
  // }

  return (
    <div className="w-full">
      <EditorToolbar />
      <ReactQuill theme="snow" value={value} modules={modules} formats={formats} onChange={setValue} />
    </div>
  )
}

export default App
