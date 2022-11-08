import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const verticallyCenteredModal = () => {
    const [verticallyCenteredExample, setVerticallyCenteredExample] = useState(false);

    return (
        <>
            <Modal className="modal-close-out" show={verticallyCenteredExample} onHide={() => setVerticallyCenteredExample(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="mb-3 filled">
                            <CsLineIcons icon="user" />
                            <Form.Control type="email" placeholder="Email" />
                        </div>
                        <div className="mb-3 filled">
                            <CsLineIcons icon="lock-on" />
                            <Form.Control type="password" placeholder="Password" />
                        </div>
                        <div className="mb-3 filled">
                            <CsLineIcons icon="tag" />
                            <ReactTags tags={tags} allowNew onDelete={onTagDelete} onAddition={onTagAddition} placeholderText="Tags" />
                        </div>
                        <div className="mb-3 filled">
                            <CsLineIcons icon="calendar" />
                            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Date" />
                        </div>
                        <div className="mb-3 filled">
                            <CsLineIcons icon="loaf" />
                            <Select classNamePrefix="react-select" options={options} value={selectValue} onChange={setSelectValue} placeholder="Select" />
                        </div>
                        <div className="mb-3 filled">
                            <CsLineIcons icon="notebook-1" />
                            <Form.Control as="textarea" rows={3} placeholder="Address" />
                        </div>
                        <Button variant="primary">Submit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setVerticallyCenteredExample(false)}>
                        Close
                    </Button>
                    <Button onClick={() => setVerticallyCenteredExample(false)}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default verticallyCenteredModal;