import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from 'common/Container';
import { Gallery, Headline, Numbers, Story, Team } from './components';

const About = () => {
  return (
    <Box>
      <Container>
        <Headline />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Team />
      </Container>
    </Box>
  );
};

export default About;
