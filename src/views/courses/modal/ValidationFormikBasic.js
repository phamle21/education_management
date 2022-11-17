import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useFormik } from 'formik';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { API_URL } from '../../../constants';

const ValidationFormikBasic = ({ contentEdit, setSemiFullExample }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Tiêu đề không được trống'),
    content: Yup.string().required('Nội dung không được trống'),
  });
  const initialValues = { title: contentEdit.title, content: contentEdit.content };

  const onSubmit = (values) => {
    // setSemiFullExample(false)
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("files", file);
            fetch(`${API_URL}/api/upload-image-ckeditor`, {
              method: "post",
              body: {
                upload: file
              }
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(res)
                resolve({
                  default: res.filename
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      }
    };
  }
  
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <Row className="mb-3 g-3">
        <Col md="12">
          <Form.Group className="form-group position-relative tooltip-end-top">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" onChange={handleChange} value={values.title} />
            {errors.title && touched.title && <div className="d-block invalid-tooltip">{errors.title}</div>}
          </Form.Group>
        </Col>
        <Col md="12">
          <Form.Group className="form-group position-relative tooltip-end-top">
            <Form.Label>Content</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              config={{
                extraPlugins: [uploadPlugin]
              }}
              data={values.content}
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                // console.log('Editor is ready to use!', editor.config);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                // console.log({ event, editor, data });
                values.content = data
              }}
              onBlur={(event, editor) => {
                // console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                // console.log('Focus.', editor);
              }}
            />
            {errors.content && touched.content ? <div className="d-block invalid-tooltip">{errors.content}</div> : null}

          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end">
        <Button className="w-auto mx-2" variant="secondary" type="button" onClick={() => setSemiFullExample(false)}>Cancel</Button>
        <Button className="w-auto mx-2" type="submit">Save</Button>
      </Row>
    </form>
  );
};

export default ValidationFormikBasic;
