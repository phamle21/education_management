import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function LecturerManage() {
  return (
    <>
      <div className="section-manager">
        <div className="heading-manager d-flex flex-row">
          <h1 className="heading-title">Quản Lý Giảng Viên</h1>
          <Button className='heading-btn' variant="outline-success">+ Thêm</Button>
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
            <tr>
              <td className='table-value'>1</td>
              <td className='table-value'>Do Thi Hong An</td>
              <td className='table-value'>0387473591</td>
              <td className='table-value'>Nu</td>
              <td className='table-value'>29/02/2000</td>
              <td className='table-value'>Can Tho</td>
              <td className='table-value'>dth.an292@gmail.com</td>
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
              <td className='table-value'>@twitter</td>
              <td className='table-value'>@twitter</td>
              <td className='table-action d-flex flex-row'>
                <Button variant="outline-warning table-btn">Sửa</Button>
                <Button variant="outline-danger table-btn">Xóa</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}
