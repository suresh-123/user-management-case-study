import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

const StyledFooter = styled(Box)`
    background-color: #3f51b5;
    color: white;
    text-align: center;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Typography variant="body2">
                © 2024 User Management Portal. All rights reserved.
            </Typography>
        </StyledFooter>
    );
};

export default Footer;
