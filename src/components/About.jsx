import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function About() {
    return (
        <>
            <h1>Technology used</h1>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
                <MDBListGroupItem
                    noBorders
                    color="dark"
                    className="px-3 mb-2 rounded-3"
                >
                    Front End: React.js
                </MDBListGroupItem>
                <MDBListGroupItem
                    noBorders
                    color="primary"
                    className="px-3 mb-2 rounded-3"
                >
                    Authentication: Google Identity Services - Google OAuth
                </MDBListGroupItem>
                <MDBListGroupItem
                    noBorders
                    color="secondary"
                    className="px-3 mb-2 rounded-3"
                >
                    Style: CSS, MDB Bootstrap for React
                </MDBListGroupItem>
                <MDBListGroupItem
                    noBorders
                    color="success"
                    className="px-3 mb-2 rounded-3"
                >
                    Routing through components: React Router
                </MDBListGroupItem>
            </MDBListGroup>
        </>
    );
}

export default About;
