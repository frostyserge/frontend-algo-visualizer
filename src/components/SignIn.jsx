import { useEffect } from "react";

function SignIn () {

function handleCallbackRes(response) {
    console.log("Encoded JWT token: " + response.credential)
}

useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
        client_id: "632562416841-atb907h5v9gbect7lq5ql2t28f4nrogn.apps.googleusercontent.com",
        callback: handleCallbackRes
    });

    google.accounts.id.renderButton(
        document.getElementById('sign-in-div'),
        { theme: "outline", size: "large"}
    );
}, []);

    return(
            <>
                <div>

                </div>
            </>
    )
};

export default SignIn;