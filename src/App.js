import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Create from "./components/Create";
// import Updete from "./components/Updete";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import PopUp from "./components/PopUp";

function App() {
  return (
    
    <div>
        <Router>
        <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="#link"><Link to="/Profile">Data</Link></Nav.Link>
          <Nav.Link href="#link"><Link to="/Create">Create</Link></Nav.Link>
          {/* <Nav.Link href="#link"><Link to="/Updete">Updete</Link></Nav.Link> */}

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul> */}
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/Create">
          <Create/>
        </Route>
        {/* <Route path="/Updete/:id" render={
          props=>{
            <Updete {...props}/>
          }
        }>
          <Updete/>
        </Route> */}
      </Router>
      {/* <PopUp /> */}
    </div>
  );
}

export default App;
