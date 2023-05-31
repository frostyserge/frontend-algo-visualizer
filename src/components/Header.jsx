import { Link, useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
// import AlgoVisualizer from './AlgoVisualizer.jsx';

function Header({ user, setUser }) {
    const navigate = useNavigate();
    function signOut() {
        setUser(null);
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
                            {/* <Link to="/signup">
                                <button>Sign Up</button>
                            </Link> */}
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
