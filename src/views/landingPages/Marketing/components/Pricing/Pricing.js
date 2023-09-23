import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const SlackButton = () => (
  <a href="https://slack.com/oauth/v2/authorize?scope=&amp;user_scope=&amp;redirect_uri=https%3A%2F%2F624xubbu4piovegru452zrewii0rlgyj.lambda-url.us-east-1.on.aws&amp;client_id=4355617109585.5305911893702" style={{alignItems:'center',color:'#fff',backgroundColor:'#4A154B',border:'0',borderRadius:'4px',display:'inline-flex',fontFamily:'Lato, sans-serif',fontSize:'16px',fontWeight:'600',height:'48px',justifyContent:'center',textDecoration:'none',width:'236px',marginTop:'5px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" style={{height:'20px',width:'20px',marginRight:'12px'}} viewBox="0 0 122.8 122.8">
      <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path>
      <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path>
      <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path>
      <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path>
    </svg>
    Try Thinksy today!
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
          Flexible and transparent pricing
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Whatever your status, our offers evolve according to your needs.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Starter',
            price: '$22',
            features: ['1 User', '1 App', 'Integrations'],
            isHighlighted: false,
          },
          {
            title: 'Pro',
            price: '$44',
            features: [
              'All in Starter plan',
              'Google Ads',
              'SSO via Google',
              'API access',
            ],
            isHighlighted: true,
          },
          {
            title: 'Enterprise',
            price: '$77',
            features: [
              'All features',
              'Email support',
              'Google Ads',
              'SSO via Google',
              'API access',
              'Facebook Ads',
            ],
            isHighlighted: false,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={Card}
              height={'100%'}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={item.isHighlighted ? 4 : 0}
            >
              <Box component={CardContent} padding={4}>
                <Box
                  marginBottom={4}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Typography variant={'h4'}>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'baseline'}>
                    <Typography variant={'h4'} color={'primary'}>
                      <Box component={'span'} fontWeight={600}>
                        {item.price}
                      </Box>
                    </Typography>
                    <Typography variant={'subtitle2'} color={'textSecondary'}>
                      /mo
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Box
                        component={ListItem}
                        disableGutters
                        width={'auto'}
                        padding={0}
                      >
                        <Box
                          component={ListItemAvatar}
                          minWidth={'auto !important'}
                          marginRight={2}
                        >
                          <Box
                            component={Avatar}
                            bgcolor={theme.palette.secondary.main}
                            width={20}
                            height={20}
                          >
                            <svg
                              width={12}
                              height={12}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Box>
                        </Box>
                        <ListItemText primary={feature} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box flexGrow={1} />
              <Box
                component={CardActions}
                justifyContent={'flex-start'}
                padding={4}
              >
                <Button size={'large'} variant={'contained'}>
                  Learn More
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
