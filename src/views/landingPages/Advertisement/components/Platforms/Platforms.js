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
      <Grid container spacing={2} marginBottom={4}>
        {[
          {
            title: 'Summarize Automatically',
            subtitle:
              'Use AI to quickly get a summary of the quickiest wins you can get from your team\'s ideas.',
            icon:
              aiImg,
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
          <Grid item xs={12} md={4} key={i}>
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
                    component={'img'}
                    maxWidth={400}
                    marginBottom={2}
                    src={item.icon}
                  />
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
                </Box>
              </Box>
          </Grid>
        ))}
      </Grid>
      <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Join our journey
        </Typography>      
      <Box marginBottom={4}>
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
      </Box>      
    </Box>
  );
};

export default Platforms;
