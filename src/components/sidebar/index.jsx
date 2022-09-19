import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column">
      <Link className="link_sidebar" to='/'>Trang chủ</Link>
      <Link className="link_sidebar" to='/subjects'>Quản lý môn học</Link>
      <Link className="link_sidebar" to='/lecturers'>Quản lý giảng viên</Link>
      <Link className="link_sidebar" to='/students'>Học viên</Link>
    </div>
  );
}
