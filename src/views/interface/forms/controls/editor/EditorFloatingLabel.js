import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css';

const EditorFloatingLabel = () => {
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
      quill.on('editor-change', () => {
        console.log(quill.container);
        if (quill.getLength() > 1) {
          quill.container.classList.add('full');
        } else {
          quill.container.classList.remove('full');
        }
      });
    }
  }, [quill]);

  return (
    <div className="form-floating">
      <div ref={quillRef} className="sh-12 html-editor" />
      <label>Editor</label>
    </div>
  );
};

export default EditorFloatingLabel;
