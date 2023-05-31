import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"; // dependency that decodes the JWT token into an object with all the user information
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";

function SignIn () {

    const [user, setUser] = useState({});

// this function takes a response as a parameter 
function handleCallbackRes(response) {
    console.log("Encoded JWT token: " + response.credential); // response.credential is a generated encoded JWT token used to sign in via Google
    const userObject = jwt_decode(response.credential); // storing decoded user information in the variable
    setUser(userObject); // updating the user state to our decoded credentials
    document.getElementById('sign-in-div').hidden = true; // grabbing a DOM element to toggle the visibility of our login button when a user is signed in
}

function handleSignout () {
    setUser({}) // updating the user to an empty obj to sign out
    document.getElementById('sign-in-div').hidden = false;
}

useEffect(() => {
    /* global google */   // this is to let react app know that we are grabbing the object from the script provided by Google from our index.html file in public directory
    // this function is in charge of grabbing our client_id from our google console that we created and copied as a first paramater
    // as the second parameter we have a call back function, that whenever someone logs in what functions is to be called.
    google.accounts.id.initialize({
        client_id: "632562416841-atb907h5v9gbect7lq5ql2t28f4nrogn.apps.googleusercontent.com",
        callback: handleCallbackRes
    });

    // predefined function by Google identity services that is grabbing the specific element in DOM
    // to render the sign in button
    google.accounts.id.renderButton(
        document.getElementById('sign-in-div'),
        // just changing the appearance of the sign in button
        { theme: "outline", size: "large"}
    );

    // google.accounts.id.prompt();
}, []);

    return(
            <>
                <div id="sign-in-div">
                    {
                        Object.keys(user).length !== 0 && // since our user credentials is an object, we use Object.keys(user)
                        // javascript static method that takes user as a paramater and checks if user has full user attributes (aka logged in) => then
                        // show our Sign Out button. Otherwise it will return false and will run the code below
                        <button onClick={handleSignout} className="light">Sign Out</button> // 
                    }
                    { user && 
                    <div  className="d-flex justify-content-end">
                        <img src={user.picture}></img>
                        <h3>{user.name}</h3>
                    </div>
                    }
                </div>
            </>
    )
};

export default SignIn;