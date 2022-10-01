import {
    MDBBtn, MDBCard,
    MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
function Login() {
    return (
        <MDBContainer fluid >

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                            <h2 className="fw-bold mb-2 text-uppercase text-white">Login</h2>
                            <p className="text-white-50 mb-5">Please enter your login and password!</p>

                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                labelClass='text-white'
                                label='Email address'
                                id='formControlLg'
                                type='email'
                                size="lg"
                            />
                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                labelClass='text-white'
                                label='Password'
                                id='formControlLg'
                                type='password'
                                size="lg"
                            />

                            <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                            <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                Login
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Login;