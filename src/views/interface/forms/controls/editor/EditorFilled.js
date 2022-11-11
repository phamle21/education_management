import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const EditorFilled = () => {
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
  const placeholder = 'Editor';
  const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        // console.log(quill.getContents());
      });
    }
  }, [quill]);

  return (
    <div className="filled custom-control-container editor-container">
      <div ref={quillRef} className="sh-9 html-editor" />
      <CsLineIcons icon="notebook-1" />
    </div>
  );
};

export default EditorFilled;
