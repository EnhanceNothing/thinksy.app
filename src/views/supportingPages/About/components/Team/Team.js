import React from 'react';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import edenImg from './images/eden.jpg';
import calliImg from './images/calli.jpg';

const Team = () => {
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
          color={'textSecondary'}
          align={'center'}
        >
          Our team
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[    
          {
            name: 'Calli',
            title: 'Co-founder & CEO',
            avatar: calliImg,
            linkedin: 'https://www.linkedin.com/in/calli-fuchigami-582a9456/',
            twitter :'https://twitter.com/callifuch',
            producthunt: 'https://www.producthunt.com/@calli_fuchigami',
            about: 'Calli has spent her career as a Finance Manager working with game studios, startups and small businesses keeping money operations efficient and organized. She is definitely NOT type-A',
          },
          {
            name: 'Eden',
            title: 'Co-founder & CTO',
            avatar: edenImg,
            twitter: 'https://twitter.com/EntreEden',
            github: 'https://github.com/edeng',
            linkedin: 'https://www.linkedin.com/in/edenghirmai/',
            producthunt: 'https://www.producthunt.com/@entreeden',
            about: 'Eden is a Staff Engineer at Slack and an Ex-Google engineer. He\'s currently building software and a chicken coop for his backyard.',
          },        
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} sx={{
            marginLeft: i === 0 ? 'auto' : undefined,
            marginRight: i === 1 ? 'auto' : undefined,
          }}>

            <Box
              component={Card}
              borderRadius={3}
              boxShadow={2}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <CardContent>
                <Box
                  component={Avatar}
                  src={item.avatar}
                  height={80}
                  width={80}
                />
                <Box marginTop={4}>
                  <ListItemText primary={item.name} secondary={item.title} />
                  <Typography variant={'subtitle2'} color={'textSecondary'}>
                    {item.about}
                  </Typography>
                  <Box marginTop={4}>
                  {item.github && (
                      <IconButton
                        onClick={() => window.open(item.github)}
                        size={'small'}
                        sx={{
                          marginRight: 1,
                          color: colors.blueGrey[200],
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    )}
                    {item.twitter && (
                      <IconButton
                        onClick={() => window.open(item.twitter)}
                        size={'small'}
                        sx={{
                          color: colors.blueGrey[200],
                        }}
                      >
                        <TwitterIcon />
                      </IconButton>
                    )}
                    {item.linkedin && (
                      <IconButton
                        onClick={() => window.open(item.linkedin)}
                        size={'small'}
                        sx={{
                          color: colors.blueGrey[200],
                        }}
                      >
                        <LinkedinIcon />
                      </IconButton>
                    )}                    
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
