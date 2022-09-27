import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import apiBase from '../../../../app/axios/apiBase';
import ModalAdd from './components/modalAdd/index.jsx';
import ModalEdit from './components/modalEdit/index.jsx';

export default function LecturerManage() {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [listLecturer, setListLecturer] = useState([]);
  const [lecturer, setLecturer] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = (data) => {
    setEditShow(true);
    setLecturer(data);
  };

  useEffect(() => {
    apiBase.get("/users", {
      params: {
        type: 'Teacher',
      }
    }).catch((err) => console.log(err))
      .then(res => {
        console.log(res.data.data);
        setListLecturer([...res.data.data]);
        console.log(listLecturer);
      });
  }, []);

  return (
    <>
      <div className="section-manager">
        <div className="heading-manager d-flex flex-row">
          <h1 className="heading-title">Quản Lý Giảng Viên</h1>
          <Button
            className='heading-btn'
            variant="outline-success"
            onClick={handleShow}
          >
            + Thêm</Button>
        </div>
        <Table striped bordered hover className='table-manager'>
          <thead>
            <tr>
              <th className='table-heading'>#</th>
              <th className='table-heading'>Họ tên giảng viên</th>
              <th className='table-heading'>Số điện thoại</th>
              <th className='table-heading'>Giới tính</th>
              <th className='table-heading'>Ngày sinh</th>
              <th className='table-heading'>Địa chỉ</th>
              <th className='table-heading'>Email</th>
              <th className='table-heading table-action'>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {listLecturer && listLecturer.map((lecturer, i) => (
              <tr key={i}>
                <td className='table-value'>{i}</td>
                <td className='table-value'>{lecturer.name}</td>
                <td className='table-value'>{lecturer.phone}</td>
                <td className='table-value'>{lecturer.gender}</td>
                <td className='table-value'>{lecturer.birthday}</td>
                <td className='table-value'>{lecturer.address}</td>
                <td className='table-value'>{lecturer.email}</td>
                <td className='table-action d-flex flex-row'>
                  <Button
                    variant="outline-warning table-btn"
                    onClick={() => handleEditShow(lecturer)}
                  >
                    Sửa
                  </Button>
                  <Button variant="outline-danger table-btn">Xóa</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <ModalAdd show={show} onHide={handleClose} />
      <ModalEdit show={editShow} onHide={handleEditClose} data={lecturer} />
    </>
  )
}
