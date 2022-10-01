import Dropdown from 'react-bootstrap/Dropdown';
import Avt from '../../assets/avt_default.png';
import Logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo px-4">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="action">
          <img src={Avt} alt="Avatar" className='avt'></img>
          <Dropdown>
            <Dropdown.Toggle className='user-name' variant="success" id="dropdown-basic">
              Admin
            </Dropdown.Toggle>

            <Dropdown.Menu className='action-menu'>
              <Dropdown.Item href="#/action-1" className="action-value">Thông tin</Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="action-value">Đăng xuất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}