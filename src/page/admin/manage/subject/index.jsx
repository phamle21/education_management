import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiBase from '../../../../app/axios/apiBase';
import ModalAdd from './components/modalAdd';
import ModalEdit from './components/modalEdit';


export default function SubjectManage() {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  useState(() => {
    apiBase.get("/courses").then(res => console.log(res.data));
  }, [])

  const notify = () => toast.success(
    "Xóa môn học thành công!",
    { position: toast.POSITION.BOTTOM_RIGHT },
    { autoClose: 5000 },
  );

  return (
    <>
      <div className="section-manager">
        <div className="heading-manager d-flex flex-row">
          <h1 className="heading-title">Quản Lý Môn Học</h1>
          <Button
            className='heading-btn'
            variant="outline-success"
            onClick={handleShow}
          >
            + Thêm
          </Button>
        </div>
        <Table striped bordered hover className='table-manager'>
          <thead>
            <tr>
              <th className='table-heading'>#</th>
              <th className='table-heading'>Môn học</th>
              <th className='table-heading'>Giảng viên</th>
              <th className='table-heading'>Thời gian bắt đầu</th>
              <th className='table-heading'>Thời gian kết thúc</th>
              <th className='table-heading table-action'>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='table-value'>1</td>
              <td className='table-value'>Larry the Bird</td>
              <td className='table-value'>Jenifer Pham</td>
              <td className='table-value'>20/12/2020</td>
              <td className='table-value'>20/04/2021</td>
              <td className='table-action d-flex flex-row'>
                <Button
                  variant="outline-warning table-btn"
                  onClick={handleEditShow}
                >
                  Sửa
                </Button>
                <Button
                  variant="outline-danger table-btn"
                  onClick={notify}
                >
                  Xóa
                </Button>
              </td>
            </tr>
            <tr>
              <td className='table-value'>2</td>
              <td className='table-value'>Larry the Bird</td>
              <td className='table-value'>Amy Do</td>
              <td className='table-value'>12/01/2022</td>
              <td className='table-value'>12/05/2022</td>
              <td className='table-action d-flex flex-row'>
                <Button
                  variant="outline-warning table-btn"
                  onClick={handleEditShow}
                >
                  Sửa
                </Button>
                <Button
                  variant="outline-danger table-btn"
                  onClick={notify}
                >
                  Xóa
                </Button>
              </td>
            </tr>
            <tr>
              <td className='table-value'>3</td>
              <td className='table-value'>UX/UI</td>
              <td className='table-value'>Simon Nguyen</td>
              <td className='table-value'>20/01/2022</td>
              <td className='table-value'>20/06/2022</td>
              <td className='table-action d-flex flex-row'>
                <Button
                  className='table-btn'
                  variant="outline-warning"
                  onClick={handleEditShow}
                >
                  Sửa
                </Button>
                <Button
                  className='table-btn'
                  variant="outline-danger"
                  onClick={notify}
                >
                  Xóa
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <ModalAdd show={show} onHide={handleClose} />

      <ModalEdit show={editShow} onHide={handleEditClose} data={''} />

      <ToastContainer />
    </>
  )
}