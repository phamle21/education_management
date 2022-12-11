import apiBase from 'app/axios/apiBase';
import React from 'react';
import { Button, Col, Form, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import classNames from 'classnames';
import { InputMaskTuition } from '../InputMaskTuition';

const ModalStudentInfo = ({ data, setModalInfo }) => {
    const params = useParams();

    const [studyInfo, setStudyInfo] = React.useState({});

    const [formData, setFormData] = React.useState({
        mark: '',
        tuitionPaid: 0
    })

    const [finishedDate, setFinishedDate] = React.useState(null)

    const [tuitionShow, setTuitionShow] = React.useState();

    React.useEffect(() => {
        apiBase.get('/studies', {
            params: {
                user_id: data.id,
                course_id: params.id,
            }
        }).then(res => {
            setStudyInfo(res.data.data)

            setTuitionShow(JSON.parse(JSON.stringify(res.data.data.tuition_paid.toLocaleString())))

            setFormData((prevState) => {
                return {
                    ...prevState,
                    mark: res.data.data.mark
                };
            });
            setFormData((prevState) => {
                return {
                    ...prevState,
                    tuitionPaid: res.data.data.tuition_paid
                };
            });
        }).catch(err => {
            Swal.fire(
                'ERROR',
                'Đã xảy ra sự cố',
                'error'
            )
            console.log(err)
            setModalInfo(false)
        })

    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleSubmit = () => {
        apiBase.post('/studies/update', {
            course_id: params.id,
            user_id: data.id,
            mark: formData.mark,
            tuition_paid: formData.tuitionPaid,
            finished: finishedDate,
        }).then(res => {
            Swal.fire({
                position: 'top-end',
                title: '',
                html: "Đã cập nhật thông tin cho học viên",
                icon: 'success',
                showConfirmButton: false,
                timer: 3000
            })
            setModalInfo(false)
        }).catch(err => {
            Swal.fire(
                'ERROR',
                'Đã xảy ra sự cố',
                'error'
            )
            console.log(err)
        })
    }

    return (
        <>
            {
                studyInfo && JSON.stringify(studyInfo) !== "{}"
                    ?
                    <Form>
                        <h1 className="text-center">{studyInfo && studyInfo.finished === "Unfinished" ? null : 'Đã hoàn thành khóa học'}</h1>
                        <Col md="12" className='mb-3'>
                            <Form.Label>Họ và tên: </Form.Label>
                            <Form.Control type="text" readOnly value={data && data.name} />
                        </Col>
                        <Col xs="12" className='mb-3'>
                            <Form.Label>Điểm: </Form.Label>
                            <Form.Control type="text" name="mark" value={formData && formData.mark} onChange={handleChange} />
                        </Col>
                        <Col xs="12" className='mb-3'>
                            <Form.Label>Học phí đã đóng: {formData && tuitionShow}/{studyInfo && studyInfo.tuition.toLocaleString()} VNĐ</Form.Label>
                            <InputMaskTuition type="number" maxTuition={studyInfo && Number(studyInfo.tuition)} name="tuitionPaid" formData={formData && formData} handleChange={handleChange} />
                        </Col>
                        <Col xs="12" className='mb-4 mt-2'>
                            <Form.Label>Hoàn thành khóa học: <b>{studyInfo && studyInfo.finished !== "Unfinished" ? studyInfo.finished : 'Chưa hoàn thành'}</b> </Form.Label>
                            {
                                studyInfo &&
                                studyInfo.finished === "Unfinished" &&
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control"
                                    placeholderText="Ngày hoàn thành khóa"
                                    selected={finishedDate}
                                    onChange={(e) => setFinishedDate(e)}
                                />
                            }
                        </Col>
                        <Col xs="12">
                            <Button variant="primary" onClick={handleSubmit}>Save</Button>
                        </Col>
                    </Form>
                    :
                    <section className="scroll-section" id="cardOverlaySpinner">
                        <Card
                            body
                            className={classNames('mb-5', {
                                'overlay-spinner': true,
                            })}
                        />
                    </section>
            }
        </>
    )
}

export default ModalStudentInfo;