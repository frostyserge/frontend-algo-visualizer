import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer () {
    return(
        <footer>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted fixed-bottom'>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <Link to="/about" className="text-reset">
              <h6 className='text-uppercase fw-bold mb-4'>
                About
              </h6>
                </Link>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <a href='https://github.com/frostyserge/frontend-algo-visualizer/tree/main' className='me-4 text-reset'>
              <h6 className='text-uppercase fw-bold mb-4 text'>Git Hub Repo <MDBIcon fab icon="github" />
              </h6>
          </a>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a className='text-reset fw-bold' href='#'>
        © 2023 Algos
        </a>
      </div>
    </MDBFooter>
        </footer>
    )
}

export default Footer;