import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import apiBase from '../../../../app/axios/apiBase';
import ModalCustom from './components/Modal';

export default function SubjectManage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useState(() => {
    apiBase.get("/courses").then(res => console.log(res.data));
  }, [])

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
              <td className='table-value'>3</td>
              <td className='table-value'>Larry the Bird</td>
              <td className='table-value'>@twitter</td>
              <td className='table-value'>@twitter</td>
              <td className='table-value'>@twitter</td>
              <td className='table-action d-flex flex-row'>
                <Button variant="outline-warning table-btn">Sửa</Button>
                <Button variant="outline-danger table-btn">Xóa</Button>
              </td>
            </tr>
            <tr>
              <td className='table-value'>3</td>
              <td className='table-value'>Larry the Bird</td>
              <td className='table-value'>@twitter</td>
              <td className='table-value'>@twitter</td>
              <td className='table-value'>@twitter</td>
              <td className='table-action d-flex flex-row'>
                <Button variant="outline-warning table-btn">Sửa</Button>
                <Button variant="outline-danger table-btn">Xóa</Button>
              </td>
            </tr>
            <tr>
              <td className='table-value'>3</td>
              <td className='table-value'>Larry the Bird</td>
              <td className='table-value'>@twitter</td>
              <td className='table-value'>@twitter</td>
              <td className='table-value'>@twitter</td>
              <td className='table-action d-flex flex-row'>
                <Button
                  className='table-btn'
                  variant="outline-warning"
                >
                  Sửa
                </Button>
                <Button
                  className='table-btn'
                  variant="outline-danger"
                >
                  Xóa
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <ModalCustom show={show} onHide={handleClose} />
    </>
  )
}