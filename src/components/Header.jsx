import './Header.css'
import Nav from './Nav';

function Header() {
  return (
    <main style={{ padding: "20px" }}>
      <div className="banner">
        <h1>Ventas por Doquier</h1>
        <p>Bienvenidos a nuestra página de ventas</p>
      </div>
      <Nav />
      
    </main>
  );
}
export default Header;