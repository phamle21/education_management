import NotificationIcon from 'components/notification/NotificationIconSuccess';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { detailCourseState, studentListState } from 'recoil_store';

const ModalListStudents = ({ setModalCheckPresence }) => {

    const [listStudents, setListStudents] = useRecoilState(studentListState);

    const [listShowSelect, setListShowSelect] = useState([]);

    const [checkboxList, setCheckboxList] = useState([]);

    const params = useParams();

    const [course, setCourse] = useRecoilState(detailCourseState);

    useEffect(() => {
        // if (listStudents.length < 1)
        //     apiBase.get("/users", {
        //         params: {
        //             type: 'Student',
        //         }
        //     })
        //         .catch(err => console.log(err))
        //         .then(res => {
        //             setListStudents(res.data.items);
        //         })
    }, []);

    const funcSetListShowSelect = () => {
        // const listTemp = [];

        // listStudents.forEach(item => {
        //     let check = true;
        //     course.student_of_course.forEach(exists => {
        //         if (item.id === exists.id) {
        //             check = false;
        //         }
        //     })

        //     if (check) {
        //         listTemp.push(item);
        //     }
        // })

        // setListShowSelect(listTemp);
    }

    useEffect(() => {
        funcSetListShowSelect()
    }, []);



    const handleCheckbox = e => {
        if (e.target.checked) {
            setCheckboxList([...checkboxList, e.target.value])
        } else {
            const temp = checkboxList.filter(check => check !== e.target.value)
            setCheckboxList(temp)
        }
    }

    const notify = () => toast(
        <NotificationIcon icon='check' title='Success' content='Add List Students Succesfully!' />,
    );

    const handleSubmitStudy = (e) => {
        e.preventDefault();

        // apiBase.post('/studies', {
        //     user_id: checkboxList,
        //     course_id: params.id,
        // }).then(res => {
        //     setCourse(res.data.data)
        //     setModalAddStudents(false)
        //     funcSetListShowSelect()
        //     notify()
        // }).catch(err => console.log(err));
    }

    return (
        <>
            <form onSubmit={handleSubmitStudy}>
                <Row>
                    <Col lg="12" className="mb-5">
                        <Card body>
                            <Row className="g-2">
                                {
                                    listShowSelect && listShowSelect.map((student, i) => (
                                        <Col xs="3" key={i}>
                                            <label className="form-check custom-card w-100 position-relative p-10 m-10">
                                                <input type="checkbox" name='user_id[]' value={student.id} className="form-check-input position-absolute e-2 t-2 z-index-1" onChange={handleCheckbox} />
                                                <span className="card form-check-label w-100 custom-border">
                                                    <span className="card-body text-center">
                                                        <CsLineIcons icon="banana" className="cs-icon icon text-primary" />
                                                        <span className="heading mt-3 text-body text-primary d-block">{student.name}</span>
                                                        <span className="text-medium fw-medium text-muted d-block">{student.phone}</span>
                                                        <span className="text-medium fw-medium text-muted d-block">{student.email}</span>
                                                    </span>
                                                </span>
                                            </label>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-end">
                    <Button className="w-auto mx-2" variant="secondary" type="button" onClick={() => setModalCheckPresence(false)}>Cancel</Button>
                    <Button className="w-auto mx-2" type="submit">Save</Button>
                </Row>
            </form>
        </>
    )
}

export default ModalListStudents;