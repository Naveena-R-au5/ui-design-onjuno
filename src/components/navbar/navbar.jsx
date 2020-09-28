import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../../img/logo.png'
import style from './navbar.module.css'

const Navbars=()=>{
    return(
        <Navbar bg="light" expand="lg" className={style.nav} fixed="top">
  <Navbar.Brand className={style.heading} href="#home"><img src={logo} className={style.logo} alt='pic'></img>ONJUNO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className={style.home} >Home</Nav.Link>
      <NavDropdown className={style.homes} title="Company" id="basic-nav-dropdown">
        <NavDropdown.Item >About</NavDropdown.Item>
        <NavDropdown.Item >Newsroom</NavDropdown.Item>
        <NavDropdown.Item >Careers</NavDropdown.Item>
        <NavDropdown.Divider />
        
      </NavDropdown>
      <NavDropdown className={style.homes} title="Learn" id="basic-nav-dropdown">
        <NavDropdown.Item>Blog</NavDropdown.Item>
        <NavDropdown.Item >Guide</NavDropdown.Item>
        <NavDropdown.Item >Help</NavDropdown.Item>
        <NavDropdown.Divider />
        
      </NavDropdown>
      <NavDropdown className={style.homes} title="Legal" id="basic-nav-dropdown">
        <NavDropdown.Item>Privacy policy</NavDropdown.Item>
        <NavDropdown.Item >Terms of use</NavDropdown.Item>
        <NavDropdown.Item >Trademarks</NavDropdown.Item>
        <NavDropdown.Divider />
        
      </NavDropdown>
    </Nav>
    <Form inline className={style.form}>
      <Button variant="outline-success" className={style.login}>Login</Button>
      <Button variant="outline-success" className={style.signup}>Signup</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Navbars;