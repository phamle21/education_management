import NotificationIcon from 'components/notification/NotificationIconSuccess';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Moment from 'moment';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useIntl } from 'react-intl';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiBase from '../../../app/axios/apiBase';

const ModalAddLecturer = ({show, onHide}) => {
    const { formatMessage: f } = useIntl();

    const [lecturerName, setLecturerName] = useState(null);

    const [lectureGender, setLecturerGender] = useState([]);

    const [lectureAddress, setLectureAddress] = useState();

    const [lecturePhone, setLecturePhone] = useState();

    const [lectureDOB, setLecturerDOB] = useState(null);

    const [lectureEmail, setLEcturerEmail] = useState();

    const genderOptions = [
        {
          label: 1,
          value: f({ id: 'menu.gender_male' }),
        },
        {
            label: 1,
            value: f({ id: 'menu.gender_female' }),
        },
    ]

    const notify = () => toast(
        <NotificationIcon icon='check' title='Success' content='Add Lecturer Succesfully!' />,
    );

    const handleSave = () => {
        const formData = new FormData();

        formData.append('name', lecturerName);
        formData.append('role_id', 1);
        formData.append('address', lectureAddress);
        formData.append('phone', lecturePhone);
        formData.append('gender', lectureGender.value);
        formData.append('birthday', Moment(lectureDOB).format("DD/MM/YYYY"));
        formData.append('email', lectureEmail);

        apiBase.post("/users", formData)
            .catch(err => console.log(err))
            .then(res => {
                if (res.data != null) {
                    onHide();
                    notify();
                }
            })
    }


    return (
        <>
            <Modal className="modal-close-out" show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{f({ id: 'menu.lecturer_title_add' })}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
                        <Form>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="user" />
                                <Form.Control
                                    autoFocus
                                    placeholder={f({ id: 'menu.lecturer_name' })}
                                    onChange={(e) => setLecturerName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="gender" />
                                <Select
                                    classNamePrefix="react-select"
                                    options={genderOptions}
                                    value={lectureGender}
                                    onChange={setLecturerGender}
                                    placeholder={f({ id: 'menu.lecturer_gender' })}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="building" />
                                <Form.Control
                                    placeholder={f({ id: 'menu.lecturer_address' })}
                                    onChange={(e) => setLectureAddress(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="phone" />
                                <Form.Control
                                    placeholder={f({ id: 'menu.lecturer_phone' })}
                                    onChange={(e) => setLecturePhone(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="calendar" />
                                <DatePicker
                                    className="form-control"
                                    selected={lectureDOB}
                                    onChange={(e) => setLecturerDOB(e)}
                                    placeholderText={f({ id: 'menu.lecturer_dob' })}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="email" />
                                <Form.Control
                                    type='email'
                                    placeholder={f({ id: 'menu.lecturer_email' })}
                                    onChange={((e) => setLEcturerEmail(e.target.value))}
                                />
                            </div>
                        </Form>
                    </OverlayScrollbarsComponent>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        {f({ id: 'menu.close' })}
                    </Button>
                    <Button onClick={() => handleSave()}>{f({ id: 'menu.save' })}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddLecturer;