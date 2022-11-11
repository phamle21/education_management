import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css';

const EditorTopLabel = () => {
  const theme = 'bubble';
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
  const { quill, quillRef } = useQuill({ theme, modules, formats });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        // console.log(quill.getContents());
      });
    }
  }, [quill]);

  return (
    <div className="top-label custom-control-container editor-container">
      <div ref={quillRef} className="sh-12 html-editor" />
      <span>EDITOR</span>
    </div>
  );
};

export default EditorTopLabel;
