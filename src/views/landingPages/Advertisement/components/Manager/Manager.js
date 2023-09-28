import React from 'react';
import Card from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Piggy from './images/piggy.png';
import Feather from './images/feather.png';
import Hourglass from './images/hourglass.png';
import Graph from './images/graph.png';


const Platforms = () => {
  const theme = useTheme();
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
          Need your manager's approval?
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Here's a few reasons they'll love Thinksy too
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >

        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Budget friendly',
            subtitle:
              'Thinksy can save you hours, and hours saved is money saved. How much is your time worth?',
            icon: Piggy,
          },
          {
            title: 'Lightweight',
            subtitle:
              'No overhead required. As a Slack add on, you can start using Thinksy in minutes and cancel at any time.',
            icon: Feather,
          },
          {
            title: 'Scalable',
            subtitle:
              'Add additional users on a per-seat basis with no long term contracts and easy month-to-month billing',
            icon: Graph,
          },
          {
            title: 'Efficient',
            subtitle:
              'Automate the data collection process so you can spend time on what can\'t be automated, you.',
            icon: Hourglass,
          },
        ].map((item, i) => (
          <Grid
            item
            xs={12}
            md={3}
            key={i}
            padding={2}
          >
            <Box
              width={1}
              height={'100%'}
              data-aos={'fade-up'}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={'img'}
                  width={90}
                  height={90}
                  marginBottom={2}
                  src={item.icon}
                />
                <Typography
                  variant={'h6'}
                  gutterBottom
                  fontWeight={500}
                  align={'center'}
                >
                  {item.title}
                </Typography>

                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Platforms;
