/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Container from 'common/Container';
import PromoSummary from './images/demo4-1.png';
import ReviewSummary from './images/demo5.png';
import { Grid } from '@mui/material';

const ReviewSection = () => {
  const theme = useTheme();

  return (
    <Box
      borderRadius={1.5}
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.alternate.main,
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${theme.palette.primary.light} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Container
        position="relative"
        zIndex={2}
        paddingX={{ xs: 2, sm: 6, md: 12 }}
      >
        <Box data-aos={'fade-up'}>

          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}
          >
            The new essential tool for engineers
          </Typography>



          <Typography variant={'h3'} gutterBottom align={'center'}>
            <Box fontWeight={700} component={'span'}>
            Daily Standups
            </Box>
          </Typography>
          <Box
            component={Typography}
            variant={'h6'}
            fontWeight={400}
            align={'center'}
            gutterBottom
          >
          Thinksy makes daily stand-ups a breeze by <strong>automatically compiling</strong> your progress and contributions.
          No more scrambling to recall what you've accomplished since yesterday or worrying that you missed something.
          With Thinksy, <strong>share key updates effortlessly</strong> and efficiently so you can spend less time repeating yourself
          and more time moving forward.
          </Box>


          <Typography variant={'h3'} paddingTop={5} gutterBottom align={'center'}>
            <Box fontWeight={700} component={'span'}>
            Self-review
            </Box>
          </Typography>
          <Typography variant={'h6'} gutterBottom align={'center'}>
            <Box fontWeight={400} component={'span'}  color="textSecondary">
            Take the <strong>manual work</strong> out of data collection & save hours on your next review cycle <br /><br />
            </Box>
          </Typography>


          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                component={Typography}
                variant={'h6'}
                paddingTop={5}
                fontWeight={400}
                align={'left'}
                gutterBottom
              >
                Thinksy <strong>instantly summarizes</strong> what you’ve been working on throughout the past review cycle, providing a concise outline of your <strong>projects</strong>,
                key <strong>contributions</strong>, participation, <strong>achievements</strong>, the number and type of meetings attended, and can even <strong>identify strengths &
                weaknesses</strong> demonstrated throughout the period.
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                      component={'img'}
                      maxWidth={'100%'}
                      marginBottom={2}
                      src={ReviewSummary}
              />
            </Grid>

          </Grid>




          <Typography variant={'h3'} paddingTop={5} gutterBottom align={'center'}>
            <Box fontWeight={700} component={'span'}>
            Promotion Packets
            </Box>
          </Typography>
          <Typography variant={'h6'} gutterBottom align={'center'}>
            <Box fontWeight={400} component={'span'} color="textSecondary">
            Let Thinksy <strong>collect & organize</strong> examples of your work so you can get to the next level <br /><br />
            </Box>
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                      component={'img'}
                      maxWidth={'100%'}
                      marginBottom={2}
                      src={PromoSummary}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component={Typography}
                variant={'h6'}
                fontWeight={400}
                align={'center'}
                gutterBottom
              >
                <strong>Save hours</strong> going back through your Jira, Github, Slack and other apps to find examples of your work.
                Just ask Thinksy to look for <strong>skills demonstrated</strong>, release posts, complicated PRs and more -- all while <strong>hyperlinking all that work</strong> right into your review.
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewSection;
