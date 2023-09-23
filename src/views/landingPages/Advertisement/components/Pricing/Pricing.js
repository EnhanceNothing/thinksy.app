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

  var to = "calli@thinksy.app";
  var subject = "Gimme Thinksy " + tier + "!";
  var body = "Hey Calli, I'm interested in trying out Thinksy! Can we set up some time for a demo?";

  // Create the mailto link
  var mailtoLink = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Open the user's default email client
  window.open(mailtoLink);
}


const SlackButton = () => (
  <a href="https://slack.com/oauth/v2/authorize?scope=channels%3Ahistory%2Cchannels%3Aread%2Cchat%3Awrite%2Ccommands%2Cim%3Awrite%2Creactions%3Aread%2Cusers%3Aread%2Cusers%3Aread.email&amp;user_scope=&amp;redirect_uri=https%3A%2F%2F624xubbu4piovegru452zrewii0rlgyj.lambda-url.us-east-1.on.aws&amp;client_id=4355617109585.5305911893702" style={{alignItems:'center',color:'#fff',backgroundColor:'#4A154B',border:'0',borderRadius:'4px',display:'inline-flex',fontFamily:'Lato, sans-serif',fontSize:'14px',fontWeight:'600',height:'44px',justifyContent:'center',textDecoration:'none',width:'150px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" style={{height:'16px',width:'16px',marginRight:'12px'}} viewBox="0 0 122.8 122.8">
      <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path>
      <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path>
      <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path>
      <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path>
    </svg>
    Try free
  </a>
);

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
            title: 'Free',
            price: '0',
            features: [
              {
                title: '1 integration',
                isIncluded: true,
              },
              {
                title: 'Up to 3 seats',
                isIncluded: true,
              },
              {
                title: '10 total generated reviews',
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
            btnText: 'Get Free',
          },
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
                title: 'Unlimited reviews',
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
                title: 'Unlimited reviews',
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
          /* {
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
                title: 'Unlimited reviews',
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
          }, */
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
                      {i === 3 ? '' : '$'}
                    </Box>
                  </Typography>
                  <Typography variant={'h4'}  color={'primary'} gutterBottom>
                    <Box component={'span'} fontWeight={600}>
                      {i === 3 ? 'Contact Us' : item.price}
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
                { i === 0 ?
                  <SlackButton />
                  :
                  <Button
                    size={'large'}
                    variant={item.isHighlighted ? 'contained' : 'outlined'}
                    onClick={() => sendEmail(item.title)}
                  >
                    {item.btnText}
                  </Button>
                }
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
