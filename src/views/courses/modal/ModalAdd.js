import DropzonePreview from 'components/dropzone/DropzonePreview';
import NotificationIcon from 'components/notification/NotificationIconSuccess';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import { useIntl } from 'react-intl';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { courseListShowState, courseListState, lecturerListState, selectLecturerState, selectTopicState, topicListState } from 'recoil_store';
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

    const [fileContent, setFileContent] = useState();

    const [fileSchedules, setFileSchedules] = useState();

    const [courseList, setCourseList] = useRecoilState(courseListState);

    const [courseListShow, setCourseListShow] = useRecoilState(courseListShowState);

    const getUploadParams = () => ({ url: 'https://httpbin.org/post' });

    const onChangeStatus = (fileWithMeta, status) => {
        setSelectedImage(fileWithMeta.file);
    };

    const onChangeFile = (fileWithMeta, status) => {
        setFileContent(fileWithMeta.file);
    };


    const onChangeScheduleFile = (fileWithMeta, status) => {
        setFileSchedules(fileWithMeta.file);
    };


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
        if (topicList.length < 1) {
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
        } else {
            const arrTemp = [];
            topicList.forEach(record => {
                const option = {
                    value: record.id,
                    label: record.name,
                }
                arrTemp.push(option);
            })
            setTopicOptions(arrTemp);
        }
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
        // formData.append('content', courseObj);
        formData.append('content_file', fileContent);
        formData.append('schedule_file', fileSchedules);


        apiBase.post("/courses", formData)
            .catch(err => console.log(err))
            .then(res => {
                // if (res.data != null) {
                // setFormInput({});

                setCourseList(res.data.data)
                setCourseListShow(res.data.data)

                setSelectedImage();
                onHide();
                notify();
                // }
            })
    }

    return (
        <>
            <Form>
                <Row className="g-3 mb-7">
                    <Col lg="6">
                        <div className="mb-4 filled">
                            <CsLineIcons icon="online-class" />
                            <Form.Control
                                autoFocus
                                placeholder={f({ id: 'menu.course_name' })}
                                onChange={(e) => setCourseName(e.target.value)}
                            />
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="mb-4 filled">
                            <CsLineIcons icon="user" />
                            <Form.Control
                                type='number'
                                placeholder={f({ id: 'menu.course_quantity' })}
                                onChange={((e) => setNumQuan(e.target.value))}
                            />
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="mb-4 filled">
                            <CsLineIcons icon="content" />
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder={f({ id: 'menu.course_short_description' })}
                                onChange={(e) => setShortDes(e.target.value)}
                            />
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="mb-4 filled">
                            <Dropzone
                                getUploadParams={getUploadParams}
                                PreviewComponent={DropzonePreview}
                                submitButtonContent={null}
                                accept="image/*"
                                submitButtonDisabled
                                SubmitButtonComponent={null}
                                inputWithFilesContent={null}
                                onChangeStatus={onChangeStatus}
                                classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
                                inputContent="Drop Image"
                            />
                        </div>
                    </Col>

                    <Col lg="6">
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
                    </Col>

                    <Col lg="6">
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
                    </Col>

                    <Col lg="6">
                        <div className="mb-4 filled">
                            <CsLineIcons icon="calendar" />
                            <DatePicker
                                className="form-control"
                                selected={startDate}
                                onChange={(e) => setStartDate(e)}
                                placeholderText={f({ id: 'menu.course_start_day' })}
                            />
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="mb-4 filled">
                            <CsLineIcons icon="calendar" />
                            <DatePicker
                                className="form-control"
                                selected={endDate}
                                onChange={(e) => setEndDate(e)}
                                placeholderText={f({ id: 'menu.course_end_day' })}
                            />
                        </div>
                    </Col>

                    {/* <Col lg="6">
                                    <div className="mb-4 filled">
                                        <CsLineIcons icon="notebook-1" />
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder={f({ id: 'menu.course_objectives' })}
                                            onChange={(e) => setCourseObj(e.target.value)}
                                        />
                                    </div>
                                </Col> */}

                    <Col lg="6">
                        <div className="mb-4 filled">
                            <Dropzone
                                getUploadParams={getUploadParams}
                                PreviewComponent={DropzonePreview}
                                submitButtonContent={null}
                                submitButtonDisabled
                                SubmitButtonComponent={null}
                                inputWithFilesContent={null}
                                onChangeStatus={onChangeScheduleFile}
                                classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
                                inputContent={f({ id: 'menu.drop_schedule' })}
                            />
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className=" filled">
                            <Dropzone
                                getUploadParams={getUploadParams}
                                PreviewComponent={DropzonePreview}
                                submitButtonContent={null}
                                submitButtonDisabled
                                SubmitButtonComponent={null}
                                inputWithFilesContent={null}
                                onChangeStatus={onChangeFile}
                                classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
                                inputContent={f({ id: 'menu.drop_excel' })}
                            />
                        </div>
                    </Col>


                    <Col lg="6">
                        <div className="mb-4 filled">
                            <CsLineIcons icon="money" />
                            <Form.Control
                                type='number'
                                placeholder={f({ id: 'menu.course_fees' })}
                                onChange={(e) => setCourseFees(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>



                {/* <div className="mb-4 filled">
                                <CsLineIcons icon="image" />
                                <Form.Control
                                    type='file'
                                    placeholder={f({ id: 'menu.course_image' })}
                                    onChange={imageChange}
                                />
                            </div> */}
                {/* 
                            {selectedImage && (
                                <div className="mb-4 filled">
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Thumb"
                                        width={300}
                                    />
                                </div>
                            )} */}

                {/* <div className="d-flex justify-content-end align-items-center mg-4">
                                <Button variant="secondary" onClick={onHide}>
                                    {f({ id: 'menu.close' })}
                                </Button>
                                <Button onClick={() => handleSave()}>{f({ id: 'menu.save' })}</Button>
                            </div> */}

                <Row className="d-flex justify-content-end">
                    <Button className="w-auto mx-2" variant="secondary" onClick={onHide}>
                        {f({ id: 'menu.close' })}
                    </Button>
                    <Button className="w-auto mx-2" onClick={() => handleSave()}>{f({ id: 'menu.save' })}</Button>
                </Row>

            </Form>
        </>
    )
}

export default ModalAddCourse;