import NotificationIcon from 'components/notification/NotificationIconSuccess';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { topicListState } from 'recoil_store';
import apiBase from '../../../app/axios/apiBase';

const ModalEditTopic = ({show, onHide, data}) => {
    const { formatMessage: f } = useIntl();

    const [topicName, setTopicName] = useState(data && data.name);

    const [topicList, setTopicList] = useRecoilState(topicListState);

    const notify = () => toast(
        <NotificationIcon icon='check' title='Success' content='Update Topic Succesfully!' />,
    );

    const handleEditSave = () => {
        apiBase.patch(`topics/${data.id}`, {
            name: topicName,
        })
        .catch(err => console.log(err))
        .then(res => {
            if (res.data) {
                setTopicList(res.data.data);
                onHide();
                notify();
            }
        })
    }

    const handleDelete = () => {
        apiBase.delete(`topics/${data.id}`)
        .catch(err => console.log(err))
        .then(res => {
            if (res.data) {
                setTopicList(res.data.data);
                onHide();
                notify();
            }
        })
    }

    return (
        <>
        <Modal className="modal-close-out" show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{f({ id: 'menu.topic_title_edit' })}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="mb-4 filled">
                        <CsLineIcons icon="user" />
                        <Form.Control
                            defaultValue={data && data.name}
                            autoFocus
                            placeholder={f({ id: 'menu.topic_name' })}
                            onChange={(e) => setTopicName(e.target.value)}
                        />
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    {f({ id: 'menu.close' })}
                </Button>
                <Button onClick={() => handleDelete()}>{f({ id: 'menu.delete' })}</Button>
                <Button onClick={() => handleEditSave()}>{f({ id: 'menu.save' })}</Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default ModalEditTopic;