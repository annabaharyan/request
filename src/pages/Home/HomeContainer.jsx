import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Columns from './Columns';

const HomeContainer = () => {
    return (
        <>
            <CssBaseline />
             <Container maxWidth="xl">
                 <Columns />
             </Container>
        </>
    );
}

export default HomeContainer;

