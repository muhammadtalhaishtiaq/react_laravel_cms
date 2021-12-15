import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
// import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="info">
        <div className="container">
          <NavbarBrand href="/">My Best Try</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
