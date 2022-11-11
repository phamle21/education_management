import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useQuill } from 'react-quilljs';
import Active from 'components/quill/Active';
import 'quill/dist/quill.bubble.css';
import ReactTags from 'react-tag-autocomplete';

const ComposeMail = ({ show, onHide, submitMail }) => {
  const [to, setTo] = useState([]);

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
    <Modal show={show} onHide={onHide} size="semi-full" centered animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>New Email</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <div className="mb-3 filled w-100 d-flex flex-column">
          <CsLineIcons icon="email" />
          <ReactTags tags={to} allowNew onDelete={onToDelete} onAddition={onToAddition} placeholderText="to@gmail.com" />
        </div>
        <div className="mb-3 filled w-100 d-flex flex-column">
          <CsLineIcons icon="bookmark" /> <input className="form-control" placeholder="Subject" />
        </div>
        <div className="mb-3 filled custom-control-container editor-container d-flex flex-column flex-grow-1 mb-0">
          <div ref={quillRef} className="h-100 html-editor" />
          <CsLineIcons icon="file-text" />
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button
          variant="outline-primary"
          className="btn-icon btn-icon-end"
          onClick={() => {
            onHide();
            submitMail();
          }}
        >
          <span>Send</span> <CsLineIcons icon="send" />
        </Button>
        <Button variant="outline-primary" className="btn-icon btn-icon-only me-1">
          <CsLineIcons icon="attachment" />
        </Button>
        <Button variant="outline-primary" className="btn-icon btn-icon-only me-1 float-end" onClick={onHide}>
          <CsLineIcons icon="bin" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ComposeMail;
