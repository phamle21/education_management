import Moment from 'moment';
import React, { useEffect, useState } from 'react';
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
  const [listCourses, setListCourses] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  useEffect(() => {
    apiBase.get("/courses")
      .catch(err => console.log(err))
      .then(res => {
        console.log(res.data.data);
        setListCourses([...res.data.data]);
        console.log(listCourses);
      })
  }, []);


  const notify = () => toast.success(
    "Xóa môn học thành công!",
    { position: toast.POSITION.BOTTOM_RIGHT },
    { autoClose: 5000 },
  );

  return (
    <>
      <div className="section-manager">
        <div className="heading-manager d-flex flex-row">
          <h1 className="heading-title">Quản Lý Khóa Học</h1>
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
              <th className='table-heading'>Tên khóa học</th>
              <th className='table-heading'>Giảng viên</th>
              <th className='table-heading'>Thời gian bắt đầu</th>
              <th className='table-heading'>Thời gian kết thúc</th>
              <th className='table-heading table-action'>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {
              listCourses && listCourses.map((course, i) => (
                <tr key={i}>
                  <td className='table-value'>{i}</td>
                  <td className='table-value'>{course.name}</td>
                  <td className='table-value'>{course.teacher_name}</td>
                  <td className='table-value'>{Moment(course.start).format("MMM Do YYYY")}</td>
                  <td className='table-value'>{Moment(course.start).format("MMM Do YYYY")}</td>
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
              ))
            }
          </tbody>
        </Table>
      </div>

      <ModalAdd show={show} onHide={handleClose} />

      <ModalEdit show={editShow} onHide={handleEditClose} data={''} />

      <ToastContainer />
    </>
  )
}