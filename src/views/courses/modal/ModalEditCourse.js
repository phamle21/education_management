import DropzonePreview from 'components/dropzone/DropzonePreview';
import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import { useIntl } from 'react-intl';

const ModalEditCourse = ({ data }) => {
    const { formatMessage: f } = useIntl();

    const [selectedImage, setSelectedImage] = useState();

    const [startDate, setStartDate] = useState(null);


    const getUploadParams = () => ({ url: 'https://httpbin.org/post' });

    const onChangeStatus = (fileWithMeta, status) => {
        setSelectedImage(fileWithMeta.file);
        console.log(selectedImage);
        // console.log(fileWithMeta);
        // console.log(status);
    };

    return (
        <>
            <Form>
                <Col md="12" className='mb-3'>
                    <Form.Label>Tên khóa học</Form.Label>
                    <Form.Control type="text" />
                </Col>
                <Col md="12" className='mb-3'>
                    <Form.Label>Giới thiệu</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Col>

                <Col md="12" className='mb-3'>
                    <DatePicker
                        className="form-control"
                        selected={startDate}
                        // onChange={(e) => setStartDate(e)}
                        placeholderText={f({ id: 'menu.course_start_day' })}
                    />
                </Col>

                <Col md="12" className='mb-3'>
                    <DatePicker
                        className="form-control"
                        selected={startDate}
                        // onChange={(e) => setStartDate(e)}
                        placeholderText={f({ id: 'menu.course_end_day' })}
                    />
                </Col>

                <Col md="12" className='mb-3'>
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
                </Col>

                <Col xs="12">
                    <Button variant="primary">Save</Button>
                </Col>

            </Form>
        </>
    )
}

export default ModalEditCourse;