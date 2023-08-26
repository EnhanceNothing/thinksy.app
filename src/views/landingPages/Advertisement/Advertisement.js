import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import demoVideo from './images/demo6.mp4';

import {
  Hero,
  Benefits,
  Headline,
  Platforms,
  Team,
  Pricing,
  ReviewSection,
} from './components';

const Advertisement = ({ themeMode }) => {
  const theme = useTheme();
  const scaledStyles = {
    fontSize: '90%', // Adjust font size to 90% of the original
    padding: theme.spacing(0.8), // Adjust padding to 10% less
    // ... Other style adjustments for components
  };

  const GridItemVideoBlock = () => {
    return (
      <Box position={'relative'}>
        <Box
        component={'video'}
        marginTop={'2%'}
        height={'100%'}
        width={'100%'}
        src={demoVideo}
        alt="..."
        loading="lazy"
        boxShadow={4}
        borderRadius={1.5}
        sx={{
          objectFit: 'cover',
        }}
        controls
        muted
        loop
      />
      </Box>
    );
  };


  return (
    <Box style={scaledStyles}>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
          <GridItemVideoBlock />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>


      <Container>
        <Platforms />
      </Container>

      <Container>
        <ReviewSection />
      </Container>

      <Box bgcolor={theme.palette.alternate.main}>
          <Container>
            <Pricing />
          </Container>
      </Box>

      <Container>
        <Headline />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Team />
      </Container>
    </Box>
  );
};

Advertisement.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Advertisement;
