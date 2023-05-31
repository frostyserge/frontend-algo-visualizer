import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function SignUp () {

const [user, setUser] = useState(null);
const navigate = useNavigate();

    return(
            <>
                <h1>SignUp Component</h1>
            </>
    )
}

export default SignUp;