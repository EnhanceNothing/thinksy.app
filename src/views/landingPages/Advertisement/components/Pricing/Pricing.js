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

const Pricing = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
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
          Pricing
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Early Access
        </Box>
      </Box>
      <Grid container spacing={isMd ? 0 : 2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box component={CardContent} padding={{ sm: 4 }}>
              <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
                <ToggleButtonGroup
                  value='{pricingOption}'
                  exclusive
                  onChange={handleClick}
                >
                  <ToggleButton
                    value="annual"
                    size={'small'}
                    sx={{
                      backgroundColor:
                        pricingOption === 'annual'
                          ? `${theme.palette.primary.light} !important`
                          : 'transparent',
                      border: `1px solid ${theme.palette.primary.main}`,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 'medium',
                        color:
                          pricingOption === 'annual'
                            ? theme.palette.common.white
                            : 'primary',
                      }}
                    >
                      1-5 users
                    </Typography>
                  </ToggleButton>
                  <ToggleButton
                    value="monthly"
                    size={'small'}
                    sx={{
                      backgroundColor:
                        pricingOption === 'monthly'
                          ? `${theme.palette.primary.light} !important`
                          : 'transparent',
                      border: `1px solid ${theme.palette.primary.main}`,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 'medium',
                        color:
                          pricingOption !== 'annual'
                            ? theme.palette.common.white
                            : 'primary',
                      }}
                    >
                      6+ users
                    </Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box marginBottom={4}>
                <Typography
                  fontWeight={600}
                  variant={'h2'}
                  align={'center'}
                  gutterBottom
                >
                  ${pricingOption === 'annual' ? '15' : '6'}
                  <Typography
                    fontWeight={600}
                    component="span"
                    variant="body2"
                    display="inline"
                    style={{ fontSize: '0.5em' }}
                  >
                    /{pricingOption === 'annual' ? 'mo' : 'user'}
                  </Typography>
                </Typography>
                <Typography color="text.secondary" align={'center'}>
                  Pricing exclusive to our early access signups.
                </Typography>
              </Box>
              <Grid container spacing={1}>
                {[
                  'Unlimited tags',
                  'Unlimited ideas',
                  'Email support',
                  'Slack Connect support',
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
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
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* <Divider />
            <Box component={CardActions} justifyContent={'center'}>
              <Button size={'large'}>Learn More</Button>
            </Box> */}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
