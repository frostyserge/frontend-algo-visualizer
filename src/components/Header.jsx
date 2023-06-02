import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse
} from 'mdb-react-ui-kit';
import SignIn from './SignIn';

function Header() {
    const [showBasic, setShowBasic] = useState(false);
    const navigate = useNavigate();

    return (
        <header>
            <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer fluid>
                    <MDBNavbarBrand>
                        <Link to="/" className="text-reset">
                            Home
                        </Link>
                    </MDBNavbarBrand>
                    <Link to="/algos" className="text-reset">
                        Algorithms
                    </Link>
                    <MDBNavbarToggler
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                            <MDBNavbarItem>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                            <SignIn />
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <nav className="nav"></nav>
        </header>
    );
}

export default Header;
