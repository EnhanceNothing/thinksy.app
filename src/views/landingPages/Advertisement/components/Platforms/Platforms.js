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
import demo1 from './images/demo1.png';
import demo2 from './images/demo2.png';
import demo3 from './images/demo3.png';
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
        {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          No More Roadblocks
        </Typography> */}
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Forgot to keep a running list of your accomplishments over the past 6 months?
            <Box component="span" color={theme.palette.secondary.main} sx={{ position: 'relative', display: 'inline-block' }}>
              Thinksy can help
            </Box>{" "}
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Connect the apps you want to use',
            subtitle:
              'Plug in your calendar, Jira, GitHub and more to Thinksy without leaving Slack.',
            icon: demo3,
          },
          {
            title: 'Define the parameters',
            subtitle:
              'Add Slack channels and a time frame to the scope.',
            icon: demo1,
          },
          {
            title: 'Get a summary of your work, instantly',
            subtitle:
              'See projects, key contributions, strengths & skills, areas of improvement and more.',
            icon: demo2,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'a'}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
                borderRadius={3}
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
                    maxWidth={'100%'}
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
                <Box flexGrow={1} />

              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default Platforms;
