import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import EditorToolbar, { modules, formats } from './components/EditorToolbar'
import 'react-quill/dist/quill.snow.css'
import { Tag } from 'antd'

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
      <div className="m-4 text-sm"><Tag color="magenta">Author</Tag>MUKI wu</div>
      <div className="m-4 text-sm"><Tag color="magenta">Blog</Tag><a href="https://muki.tw/tech/react/quill-react-ant-design/" target="_blank" rel="noreferrer">https://muki.tw/tech/react/quill-react-ant-design/</a></div>
      <div className="m-4 text-sm"><Tag color="magenta">Github</Tag><a href="https://github.com/mukiwu/quill-react-editor-with-ant-design" target="_blank" rel="noreferrer">https://github.com/mukiwu/quill-react-editor-with-ant-design</a></div>
    </div>
  )
}

export default App
