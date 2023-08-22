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
          Join our journey
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Become an Early Adopter
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Pricing exclusive to our early access signups.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Basic',
            price: '6',
            features: [
              {
                title: 'Unlimited reports',
                isIncluded: true,
              },
              {
                title: 'Unlimited integrations',
                isIncluded: true,
              },
              {
                title: 'Up to 4 seats',
                isIncluded: true,
              },
              {
                title: 'Priority Support',
                isIncluded: false,
              },
              {
                title: 'Custom admin controls',
                isIncluded: false,
              },
              {
                title: 'Custom report prompts',
                isIncluded: false,
              },
            ],
            isHighlighted: true,
            btnText: 'Get pro',
          },
          {
            title: 'Premium',
            price: '12',
            features: [
              {
                title: 'Unlimited reports',
                isIncluded: true,
              },
              {
                title: 'Unlimited integrations',
                isIncluded: true,
              },
              {
                title: 'Up to 30 seats',
                isIncluded: true,
              },
              {
                title: 'Priority Support',
                isIncluded: true,
              },
              {
                title: 'Custom admin controls',
                isIncluded: false,
              },
              {
                title: 'Custom report prompts',
                isIncluded: false,
              },
            ],
            isHighlighted: true,
            btnText: 'Contact us',
          },
          {
            title: 'Enterprise',
            price: '24',
            features: [
              {
                title: 'Unlimited reports',
                isIncluded: true,
              },
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
                title: 'Custom admin controls',
                isIncluded: true,
              },
              {
                title: 'Custom report prompts',
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
                      <Box
                        component={'span'}
                        fontWeight={600}
                        marginRight={1 / 2}
                      >
                        $
                      </Box>
                    </Typography>
                    <Typography variant={'h2'} color={'primary'} gutterBottom>
                      <Box component={'span'} fontWeight={600}>
                        {item.price}
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
              {/* <Box
                component={CardActions}
                justifyContent={'center'}
                padding={4}
              >
                <Button
                  size={'large'}
                  variant={item.isHighlighted ? 'contained' : 'outlined'}
                >
                  {item.btnText}
                </Button>
              </Box> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
