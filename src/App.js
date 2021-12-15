import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="info">
        <div className="container">
          <NavbarBrand href="/">My Best Try</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
