import NotificationIcon from 'components/notification/NotificationIconSuccess';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Moment from 'moment';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useIntl } from 'react-intl';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { lecturerListState, selectLecturerState, selectTopicState, topicListState } from 'recoil_store';
import apiBase from '../../../app/axios/apiBase';

const ModalAddCourse = ({ show, onHide, }) => {
    const { formatMessage: f } = useIntl();

    const [listLecturers, setListLecturers] = useRecoilState(lecturerListState);

    const [selectLecturer, setSelectLecturer] = useRecoilState(selectLecturerState);

    const [lecturerOptions, setLecturerOptions] = useState([]);

    const [topicList, setTopicList] = useRecoilState(topicListState);

    const [topicOptions, setTopicOptions] = useState([]);

    const [selectTopic, setSelectTopic] = useRecoilState(selectTopicState);

    const [courseName, setCourseName] = useState(null);

    const [shortDes, setShortDes] = useState(null);

    const [selectedImage, setSelectedImage] = useState();

    const [startDate, setStartDate] = useState(null);

    const [endDate, setEndDate] = useState(null);

    const [numQuan, setNumQuan] = useState(0);

    const [courseFees, setCourseFees] = useState(0);

    const [courseObj, setCourseObj] = useState('');


    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    useEffect(() => {
        if (listLecturers.length < 1)
            apiBase.get("/users", {
                params: {
                    type: 'Teacher',
                }
            })
                .catch(err => console.log(err))
                .then(res => {
                    setListLecturers(res.data.items);

                    const arrTemp = [];
                    res.data.items.forEach(record => {
                        const option = {
                            value: record.id,
                            label: record.name,
                        }
                        arrTemp.push(option);
                    })
                    setLecturerOptions(arrTemp);
                })
    }, []);

    useEffect(() => {
        if (topicList.length < 1)
            apiBase.get("/topics")
                .catch(err => console.log(err))
                .then(res => {
                    if (res.data.status === 'success') {
                        setTopicList(res.data.data);

                        const arrTemp = [];
                        res.data.data.forEach(record => {
                            const option = {
                                value: record.id,
                                label: record.name,
                            }
                            arrTemp.push(option);
                        })
                        setTopicOptions(arrTemp);
                    }
                })
    }, []);

    const notify = () => toast(
        <NotificationIcon icon='check' title='Success' content='Add Course Succesfully!' />,
    );

    const handleSave = () => {
        const formData = new FormData();

        formData.append('name', courseName);
        formData.append('description', shortDes);
        formData.append('image', selectedImage);
        formData.append('user_id', selectLecturer.value);
        formData.append('topic_id', selectTopic.value);
        formData.append('start', Moment(startDate).format("YYYY-MM-DD HH:mm:ss"));
        formData.append('end', Moment(endDate).format("YYYY-MM-DD HH:mm:ss"));
        formData.append('quantity', numQuan);
        formData.append('tuition', courseFees);
        formData.append('content', courseObj);

        apiBase.post("/courses", formData)
            .catch(err => console.log(err))
            .then(res => {
                if (res.data != null) {
                    // setFormInput({});
                    setSelectedImage();
                    onHide();
                    notify();
                }
            })
    }

    return (
        <>
            <Modal className="modal-close-out" show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{f({ id: 'menu.course_title_add' })}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
                        <Form>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="online-class" />
                                <Form.Control
                                    autoFocus
                                    placeholder={f({ id: 'menu.course_name' })}
                                    onChange={(e) => setCourseName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="content" />
                                <Form.Control
                                    // value={shortDes}
                                    placeholder={f({ id: 'menu.course_short_description' })}
                                    onChange={(e) => setShortDes(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="image" />
                                <Form.Control
                                    type='file'
                                    placeholder={f({ id: 'menu.course_image' })}
                                    onChange={imageChange}
                                />
                            </div>

                            {selectedImage && (
                                <div className="mb-4 filled">
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Thumb"
                                        width={300}
                                    />
                                    {/* <button onClick={removeSelectedImage}>
                                    Remove This Image
                                </button> */}
                                </div>
                            )}

                            <div className="mb-4 filled">
                                <CsLineIcons icon="lecture" />
                                <Select
                                    classNamePrefix="react-select"
                                    options={lecturerOptions}
                                    value={selectLecturer}
                                    onChange={setSelectLecturer}
                                    placeholder={f({ id: 'menu.course_teacher_name' })}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="list" />
                                <Select
                                    classNamePrefix="react-select"
                                    options={topicOptions}
                                    value={selectTopic}
                                    onChange={setSelectTopic}
                                    placeholder={f({ id: 'menu.topics' })}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="calendar" />
                                <DatePicker
                                    className="form-control"
                                    selected={startDate}
                                    onChange={(e) => setStartDate(e)}
                                    placeholderText={f({ id: 'menu.course_start_day' })}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="calendar" />
                                <DatePicker
                                    className="form-control"
                                    selected={endDate}
                                    onChange={(e) => setEndDate(e)}
                                    placeholderText={f({ id: 'menu.course_end_day' })}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="user" />
                                <Form.Control
                                    type='number'
                                    placeholder={f({ id: 'menu.course_quantity' })}
                                    onChange={((e) => setNumQuan(e.target.value))}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="money" />
                                <Form.Control
                                    type='number'
                                    placeholder={f({ id: 'menu.course_fees' })}
                                    onChange={(e) => setCourseFees(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 filled">
                                <CsLineIcons icon="notebook-1" />
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder={f({ id: 'menu.course_objectives' })}
                                    onChange={(e) => setCourseObj(e.target.value)}
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

export default ModalAddCourse;