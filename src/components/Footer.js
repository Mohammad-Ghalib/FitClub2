import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="40px">
      <img src={Logo} alt="logo" style={{  }} />
    </Stack>
    <Typography variant="body2" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="0px" textAlign="center" pt="0px" pb="40px">@FitClub</Typography>
  </Box>
);

export default Footer;
