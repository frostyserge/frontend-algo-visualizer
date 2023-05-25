import { Link, useNavigate } from 'react-router-dom';
import AlgoVisualizer from './AlgoVisualizer.jsx';

function Header({ user, setUser }) {
    const navigate = useNavigate();
    function signOut() {
        setUser(null);
        navigate('/');
    }

    return (
        <header>
            <nav className="nav">
                <span id="nav-title">Algo Visualizer</span>
                <Link to="/algovis">
                    <button>Algorithms</button>
                </Link>
                <div className='user-nav'>
                    {user ? (
                        <button onCLick={signOut}>Sign Out</button>
                    ) : (
                        <>
                            <Link to="/signup">
                                <button>Sign Up</button>
                            </Link>
                            <Link to="/signin">
                                <button>Sign In</button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
