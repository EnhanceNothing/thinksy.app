import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import thumbnail from './images/infomercial.jpeg'
import { alpha } from '@mui/material/styles';
import { Link } from '@mui/material';

import {
  Hero,
  Banner,
  Faq,
  Integrations,
  Headline,
  Platforms,
  Team,
  Pricing,
  ReviewSection,
  Demo,
  Manager
} from './components';
import { Man } from '@mui/icons-material';

import mixpanel from 'mixpanel-browser';

mixpanel.init("eed12a268b55b342ce4b0044b9ae2814", { track_pageview: true, persistence: 'localStorage' });

const Advertisement = ({ themeMode }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>

        <div id="#home">
          <Container position="relative" zIndex={2}>
            <Hero />
          </Container>
        </div>

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

      <Box bgcolor={theme.palette.background.paper} position={'relative'}>

        <div id="features">
          <Container position="relative" zIndex={2}>
            <Platforms />
          </Container>
        </div>

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

      <Box bgcolor={theme.palette.background.paper} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Demo />
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
            fill={theme.palette.alternate.main}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>

      <Container>
          <Integrations />
      </Container>


      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <ReviewSection />
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
            fill={theme.palette.alternate.main}
            points="0,273 1921,273 1921,0 "
          />

        </Box>

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
  fill={theme.palette.alternate.main}
  points="0,0 1921,0 1921,273 "
/>


        </Box>
      </Box>

      <Container>
          <Manager />
      </Container>

      <div id="faq">
        <Container>
            <Faq />
        </Container>
      </div>

      <Box bgcolor={theme.palette.alternate.main}>
          <div id="pricing">
            <Container>
              <Pricing />
            </Container>
          </div>
      </Box>

      <Container>
        <Headline />
      </Container>

      <div id="about">
        <Container paddingTop={'0 !important'}>
          <Team />
        </Container>
      </div>
    </Box>
  );
};

Advertisement.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Advertisement;
