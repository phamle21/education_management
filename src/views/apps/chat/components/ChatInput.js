import React, { useRef, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useSelector, useDispatch } from 'react-redux';
import { addAttachmentsToChat, addTextToChat } from '../chatSlice';

const ChatInput = () => {
  const refFileUpload = useRef(null);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { selectedChat } = useSelector((state) => state.chat);

  const onAttachButtonClick = () => {
    if (refFileUpload) {
      refFileUpload.current.dispatchEvent(new MouseEvent('click'));
    }
  };
  const addAttachment = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        dispatch(addAttachmentsToChat({ chat: selectedChat, attachments: [loadEvent.target.result] }));
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const addText = () => {
    if (text !== '' && text.length > 0) {
      dispatch(addTextToChat({ chat: selectedChat, text }));
      setText('');
    }
  };

  const newTextOnKeyDown = (event) => {
    if (event.key.toLowerCase() === 'enter' && !event.shiftKey) {
      event.preventDefault();
      addText();
    }
  };

  const newTextOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <Card>
      <Card.Body className="p-0 d-flex flex-row align-items-center px-3 py-3">
        <Form.Control
          as="textarea"
          className="me-3 border-0 ps-2 py-2"
          rows="1"
          placeholder="Message"
          value={text}
          onChange={newTextOnChange}
          onKeyDown={newTextOnKeyDown}
        />
        <div className="d-flex flex-row">
          <Form.Control type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={addAttachment} />
          <Button variant="outline-primary" className="btn-icon btn-icon-only mb-1 rounded-xl" onClick={onAttachButtonClick}>
            <CsLineIcons icon="attachment" />
          </Button>
          <Button variant="primary" className="btn-icon btn-icon-only mb-1 rounded-xl ms-1" onClick={addText}>
            <CsLineIcons icon="chevron-right" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default ChatInput;
