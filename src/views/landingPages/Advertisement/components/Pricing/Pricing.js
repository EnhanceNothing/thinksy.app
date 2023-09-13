import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import mixpanel from 'mixpanel-browser';

mixpanel.init("eed12a268b55b342ce4b0044b9ae2814", { track_pageview: true, persistence: 'localStorage' });

const referrer = document.referrer !== '' ? document.referrer : 'Unknown';

function sendEmail(tier) {
  // Replace the placeholders with your actual email, subject, and body

  mixpanel.track('Clicked Get Thinksy Button', {
    'Referrer': referrer,
    'Tier': tier
  })

  var to = "calli@enhancenothing.com";
  var subject = "Gimme Thinksy " + tier + "!";
  var body = "Hey Calli, I'm interested in trying out Thinksy! Can we set up some time for a demo?";

  // Create the mailto link
  var mailtoLink = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Open the user's default email client
  window.open(mailtoLink);
}

const Pricing = () => {
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
          Pricing
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Plans for every engineer
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          All Thinksy plans are backed by a 30-day money back guarantee.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Standard',
            price: '50',
            features: [
              {
                title: '3 integrations',
                isIncluded: true,
              },
              {
                title: 'Up to 25 seats',
                isIncluded: true,
              },
              {
                title: 'Priority Support',
                isIncluded: false,
              },
              {
                title: 'Ability to run reports on other users',
                isIncluded: false,
              },
              {
                title: 'Slack Connect Channel w/ Founders',
                isIncluded: false,
              },
              {
                title: 'Custom admin controls',
                isIncluded: false,
              },
              {
                title: 'Analytics Dashboard',
                isIncluded: false,
              },
            ],
            isHighlighted: false,
            btnText: 'Get Standard',
          },
          {
            title: 'Premium',
            price: '80',
            features: [
              {
                title: '10 integrations',
                isIncluded: true,
              },
              {
                title: 'Up to 100 seats',
                isIncluded: true,
              },
              {
                title: 'Priority Support',
                isIncluded: true,
              },
              {
                title: 'Ability to run reports on other users',
                isIncluded: true,
              },
              {
                title: 'Slack Connect Channel w/ Founders',
                isIncluded: true,
              },
              {
                title: 'Custom admin controls',
                isIncluded: false,
              },
              {
                title: 'Analytics Dashboard',
                isIncluded: false,
              },
            ],
            isHighlighted: true,
            btnText: 'Get Premium',
          },
          {
            title: 'Enterprise',
            price: '24',
            features: [

              {
                title: 'Unlimited integrations',
                isIncluded: true,
              },
              {
                title: 'Unlimited seats',
                isIncluded: true,
              },
              {
                title: 'Priority Support',
                isIncluded: true,
              },
              {
                title: 'Ability to run reports on other users',
                isIncluded: true,
              },
              {
                title: 'Slack Connect Channel w/ Founders',
                isIncluded: true,
              },
              {
                title: 'Custom admin controls',
                isIncluded: true,
              },
              {
                title: 'Analytics Dashboard',
                isIncluded: true,
              },
            ],
            isHighlighted: false,
            btnText: 'Contact us',
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i} data-aos={'fade-up'}>
            <Box
              component={Card}
              height={'100%'}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={0}
              border={`1px solid ${theme.palette.divider}`}
              borderRadius={4}
            >
              <Box component={CardContent} padding={4}>
                <Box
                  marginBottom={4}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'flex-start'}>
                  <Typography variant={'h4'} color={'primary'}>
                    <Box component={'span'} fontWeight={600} marginRight={1 / 2}>
                      {i === 2 ? '' : '$'}
                    </Box>
                  </Typography>
                  <Typography variant={'h3'}  color={'primary'} gutterBottom>
                    <Box component={'span'} fontWeight={600}>
                      {i === 2 ? 'Contact Us' : item.price}
                    </Box>
                  </Typography>
                  </Box>
                  <Typography variant={'subtitle2'} color={'textSecondary'}>
                  Per user, per month
                  </Typography>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Typography
                        component={'p'}
                        align={'center'}
                        style={{
                          textDecoration: !feature.isIncluded
                            ? 'line-through'
                            : 'none',
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box flexGrow={1} />
              <Box
                component={CardActions}
                justifyContent={'center'}
                padding={4}
              >
                <Button
                  size={'large'}
                  variant={item.isHighlighted ? 'contained' : 'outlined'}
                  onClick={() => sendEmail(item.title)}
                >
                  {item.btnText}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
