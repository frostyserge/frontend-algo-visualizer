import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse } from 'mdb-react-ui-kit';
import SignIn from './SignIn';


function Header({ user, setUser }) {

    const [showBasic, setShowBasic] = useState(false);

    const navigate = useNavigate();
    setUser(null);
    function signOut() {
        navigate('/');
    }

    

    return (
        <header>
            <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>
        <Link to="/">
            Algos
                </Link>
        </MDBNavbarBrand>
                <Link to="/algos">
                    <button>Algorithms</button>
                </Link>
                <div className='user-nav'>
                    {user ? (
                        <button onCLick={signOut}>Sign Out</button>
                    ) : (
                        <>
                        </>
                    )}
                </div>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
            </MDBNavbarItem>
          </MDBNavbarNav>
                                <div id="sign-in-div">
                                    <SignIn />
                                </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
            <nav className="nav">
            </nav>
        </header>
    );
}

export default Header;
