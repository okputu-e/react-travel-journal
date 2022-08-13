import logoImg from "../images/earth.png";

function Nav(props) {
  return (
    <nav className="nav">
      <img src={logoImg} alt="" />
      <h1>my travel journal.</h1>
    </nav>
  );
}

export default Nav;
