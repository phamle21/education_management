import Logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <div className="navbar px-4">
      <img src={Logo} alt="Logo" />
    </div>
  );
}