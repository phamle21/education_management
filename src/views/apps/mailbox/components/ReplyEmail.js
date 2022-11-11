import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useQuill } from 'react-quilljs';
import Active from 'components/quill/Active';
import 'quill/dist/quill.bubble.css';
import ReactTags from 'react-tag-autocomplete';

const ReplyEmail = ({ onDelete, onSubmit }) => {
  const [to, setTo] = useState([{ id: 1, name: 'ollihawkins@msn.com' }]);

  const onToDelete = (i) => {
    const newTo = [...to];
    newTo.splice(i, 1);
    setTo(newTo);
  };

  const onToAddition = (tag) => {
    setTo(() => {
      return [...to, tag];
    });
  };

  // Editor
  const theme = 'bubble';
  const modules = {
    toolbar: [['bold', 'italic', 'underline', 'strike'], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ list: 'ordered' }, { list: 'bullet' }], [{ align: [] }]],
    active: {},
  };
  const { quill, quillRef, Quill } = useQuill({ theme, modules, placeholder: 'Message' });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        // console.log(quill.getContents());
      });
    }
  }, [quill]);

  if (Quill && !quill) {
    Quill.debug('error');
    Quill.register('modules/active', Active);
  }

  return (
    <Card body id="replyEmailForm">
      <div className="mb-3 filled w-100">
        <CsLineIcons icon="email" />
        <ReactTags tags={to} allowNew onDelete={onToDelete} onAddition={onToAddition} placeholderText="Add new email" />
      </div>
      <div className="mb-3 filled custom-control-container editor-container">
        <div ref={quillRef} className="sh-15 html-editor" />
        <CsLineIcons icon="file-text" />
      </div>
      <Button variant="outline-primary" className="btn-icon btn-icon-end me-1" onClick={onSubmit}>
        <span>Send</span> <CsLineIcons icon="send" />
      </Button>
      <Button variant="outline-primary" className="btn-icon btn-icon-only me-1" onClick={onSubmit}>
        <CsLineIcons icon="attachment" />
      </Button>
      <Button variant="outline-primary" type="button" className="btn-icon btn-icon-only me-1 float-end" onClick={onDelete}>
        <CsLineIcons icon="bin" />
      </Button>
    </Card>
  );
};
export default ReplyEmail;
