import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const EditorBubble = () => {
  const theme = 'snow';
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
    active: {},
  };
  const formats = ['bold', 'italic', 'underline', 'strike'];
  const { quillRef, quill } = useQuill({ theme, modules, formats });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        // console.log(quill.getContents());
      });
    }
  }, [quill]);

  return <div ref={quillRef} className="sh-19 html-editor" />;
};

export default EditorBubble;
