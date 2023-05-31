import { Link, useNavigate } from 'react-router-dom';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";


function Header({ user, setUser }) {
    const navigate = useNavigate();
    setUser(null);
    function signOut() {
        navigate('/');
    }

    

    return (
        <header>
            <nav className="nav">
                <Link to="/">
                    <span id="nav-title">Algo Visualizer</span>
                </Link>
                <Link to="/algovis">
                    <button>Algorithms</button>
                </Link>
                <div className='user-nav'>
                    {user ? (
                        <button onCLick={signOut}>Sign Out</button>
                    ) : (
                        <>
                            <Link to="/signin">
                                <div id="sign-in-div">
                                    <button>Sign In</button>
                                </div>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
