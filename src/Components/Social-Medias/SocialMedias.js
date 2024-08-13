import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function SocialMedias() {
    return (
        <>
            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998', height: '40px' }} href='#'>
                <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac', height: '40px' }} href='#'>
                <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f', height: '40px' }} href='#'>
                <MDBIcon fab icon='youtube' />
            </MDBBtn>
        </>
    );
}
