import {Container, Nav, Navbar} from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
import { BsBagCheck, BsChevronDown } from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" className={`${styles.header_main} py-3`}>
            <Container>
                <Navbar.Brand href="#home" className='p-0'>
                  <img src="images/logo.svg" width='80px' alt="Logo" />
                </Navbar.Brand>
                <Nav className="ms-auto w-100">
                  <div className="m-auto w-50 position-relative">
                    <input type="search" className="form-control" />
                    <button className={`${styles.searchIcons} border-0 h-100 position-absolute top-0`}><BiSearchAlt /></button>
                  </div>
                    <Nav.Link className="text-white" href="#features">Categories <span className={styles.arrowheader}><BsChevronDown /></span></Nav.Link>
                    <Nav.Link className="text-white" href="#pricing">Brands <span className={styles.arrowheader}><BsChevronDown /></span></Nav.Link>
                    <Nav.Link className="text-white" href="#pricing">Sign In/ Sign Up</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className="text-white" href="#pricing"><FaRegHeart /> </Nav.Link>
                    <Nav.Link className="text-white" href="#pricing"><BsBagCheck /></Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    </>
  )
}
