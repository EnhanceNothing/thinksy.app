import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import aiImg from './images/ai.png';
import tagsImg from './images/tags.png';
import voteImg from './images/vote.png';
import summaryImg from './images/summary.png';
import { imageListItemBarClasses } from '@mui/material';

const Platforms = () => {
  const theme = useTheme();

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          No More Roadblocks
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          It's almost too easy
        </Box>
      </Box>
      <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
    <Grid container direction="column" style={{ height: '100%' }}>
      <Grid item style={{ height: '45%' }} paddingBottom={2}>
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
                flexDirection={'column'}
                display={'flex'}
                bgcolor={theme.palette.alternate.main}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  padding={4}
                  sx={{
                    backgroundColor: theme.palette.warning,
                  }}
                >
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'center'}
                  >
                    Summarize Automatically
                  </Box>
                  <Typography
                    align={'center'}
                    marginBottom={2}
                    gutterBottom
                    color="textSecondary"
                  >
                    Use AI to quickly get a summary of the quickiest wins you can get from your team's ideas.
                  </Typography>                
                  <Box
                    component={'img'}
                    maxWidth={'100%'}
                    marginBottom={2}
                    src={summaryImg}
                    sx={{
                        borderRadius: '10px',
                    }}
                  />
                </Box>
              </Box>
      </Grid>
      <Grid item style={{ height: '55%' }}  paddingBottom={2}>
      <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
                flexDirection={'column'}
                display={'flex'}
                bgcolor={theme.palette.alternate.main}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  padding={4}
                >
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'center'}
                  >
                    Upvote Your Favorite Ideas
                  </Box>
                  <Typography align={'center'} paddingBottom={2} color="textSecondary">
                    Figure out what ideas people want acted on first by looking at all the votes.
                  </Typography>                
                  <Box
                    component={'img'}
                    maxWidth={'100%'}
                    marginBottom={2}
                    src={voteImg}
                    sx={{
                        borderRadius: '10px',
                    }}                    
                  />
                </Box>
              </Box>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={12} md={6}>
    <Grid container direction="column" style={{ height: '100%' }}>
      <Grid item style={{ height: '70%' }} paddingBottom={2}>
      <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
                flexDirection={'column'}
                display={'flex'}
                bgcolor={theme.palette.alternate.main}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  padding={4}
                >
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'center'}
                  >
                    Organize by Tags
                  </Box>
                  <Typography align={'center'} color="textSecondary">
                    Quickly add tags to sort by your team's categories or features.
                  </Typography>                
                  <Box
                    component={'img'}
                    maxWidth={'100%'}
                    marginBottom={2}
                    src={tagsImg}
                  />
                </Box>
              </Box>
      </Grid>
      <Grid item style={{ height: '30%' }}  paddingBottom={2}>
        <Box
          component={Card}
          width={'100%'}
          height={'100%'}
          data-aos={'fade-up'}
          flexDirection={'column'}
          display={'flex'}
          bgcolor={theme.palette.alternate.main}
          position="relative" // allow absolute positioning of children
        >
          <Box sx={{fontSize: {md: '5em'}, transform: 'rotate(20deg)'}} position="absolute" variant={'h6'} bottom={20} right={80}>🥳</Box>
          <Box sx={{fontSize: {md: '5em'}, transform: 'rotate(10deg)'}} position="absolute" top={20} left={50}>🎉</Box>
          <Box sx={{fontSize: {md: '2em'}, transform: 'scaleX(-1)'}} position="absolute" top={30} right={50}>🎉</Box>
          <Box sx={{fontSize: {md: '2em'}, transform: 'scaleX(-1)'}} position="absolute" bottom={20} left={70}>🎉</Box>
          
          <Box
            component={CardContent}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            padding={4}
          >
            <Box
              component={Typography}
              variant={'h6'}
              gutterBottom
              fontWeight={500}
              align={'center'}
            >
              All right in Slack
            </Box>
            <Typography align={'center'} color="textSecondary">
              - Share with different channels <br />
              - Send to project management tools <br />
              - Create automatic design docs <br />
            </Typography>               
          </Box>
        </Box>

      </Grid>
    </Grid>
  </Grid>
</Grid>

      {/* <Grid container spacing={2} marginBottom={4}>
        {[
          {
            title: 'Summarize Automatically',
            subtitle:
              'Use AI to quickly get a summary of the quickiest wins you can get from your team\'s ideas.',
            icon:
              summaryImg,
          },
          {
            title: 'Organize by Tags',
            subtitle:
              'Quickly add tags to sort by your team\'s categories or features. ',
            icon:
              tagsImg,
          },
          {
            title: 'Upvote Your Favorite Ideas',
            subtitle:
              'Figure out what ideas people want acted on first by looking at all the votes.',
            icon: voteImg,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
                flexDirection={'column'}
                display={'flex'}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'center'}
                  >
                    {item.title}
                  </Box>
                  <Typography align={'center'} color="textSecondary">
                    {item.subtitle}
                  </Typography>                
                  <Box
                    component={'img'}
                    maxWidth={'100%'}
                    marginBottom={2}
                    src={item.icon}
                  />
                </Box>
              </Box>
          </Grid>
        ))}
      </Grid> */}
      {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          paddingTop={2}
          color={'secondary'}
          align={'center'}
        >
          Join our journey
        </Typography> */}
      {/* <Box marginBottom={4}>
          <Box
            component={Typography}
            fontWeight={700}
            variant={'h3'}
            align={'center'}
          >
            We build in public too
          </Box>

          <Box
                component={'iframe'}
                src="https://feed.mmntm.build/thinksy/embed?isAutoConfig=true"
                fullWidth
                height={450}
                frameBorder="0"
                scrolling="auto"
                marginWidth="0"
                marginHeight="0"
                style={{
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  overflow: 'hidden',
                  marginheight: 0,
                  marginWdith: 0,
                  width: '100%' // make sure the iframe takes up the full width of the Box component
                }}
          />
      </Box> */}
    </Box>
  );
};

export default Platforms;
