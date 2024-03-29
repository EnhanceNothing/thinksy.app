import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import edenImg from './images/eden.jpg';
import calliImg from './images/calli.jpg';
import {ReactComponent as UnderlineSVG} from './images/words-line.svg';
import {ReactComponent as highlightOne} from './images/highlight-1.svg';
import {ReactComponent as highlightTwo} from './images/highlight-2.svg';
import axios from 'axios'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import mixpanel from 'mixpanel-browser';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .trim()
    .email('Enter a valid email')
    .required('Email is required'),
});

const referrer = document.referrer !== '' ? document.referrer : 'Unknown';
const Team = () => {
  const theme = useTheme();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {

      mixpanel.track('Mailing List Signup', {
        'Referrer': referrer,
        'Location': 'Footer'
      })

      try {
        const response = await axios.post(
          'https://api.airtable.com/v0/appvKEFZdedhZN1cg/Thinksy.app%20Waitlist%20SIgnups',
          {
            fields: {
              "Email": values.email,
              "Referrer": referrer,
              "Tag": [
                "Warm lead",
              ]
            },
          },
          {
            // yeah i know this is a bad idea
            // was too lazy to switch out of github pages
            // dont judge me
            headers: {
              'Authorization': `Bearer patE9zJ6XHefEUOxW.d21636b22bc6801c38c552d7c8f5c156ddff0594d1fa563cf71066fb1e0120ab`,
              'Content-Type': 'application/json',
            },
          },
        );

        resetForm();
        setIsSubmitted(true);
        // setTimeout(() => setIsSubmitted(false), 3000); // remove the success message after 3 seconds        
      } catch (error) {
        console.error('Error adding record to Airtable:', error);
      }

      setSubmitting(false);
    },
  });  
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
            about: 'Calli has spent her career as a Finance Manager working with game studios, startups and small businesses keeping money operations efficient and organized.\nShe is definitely NOT type-A',
            email: 'calli@thinksy.app'
          },
          {
            name: 'Eden',
            title: 'Co-founder & CTO',
            avatar: edenImg,
            twitter: 'https://twitter.com/EntreEden',
            github: 'https://github.com/edeng',
            linkedin: 'https://www.linkedin.com/in/edenghirmai/',
            producthunt: 'https://www.producthunt.com/@entreeden',
            email: 'eden@thinksy.app',
            about: 'Eden is a Staff Engineer at Slack and an Ex-Google engineer.\nHe\'s currently building software and a chicken coop for his backyard.',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={12} md={6} key={i} sx={{
            marginLeft: i === 0 ? 'auto' : undefined,
            marginRight: i === 1 ? 'auto' : undefined,
          }}>
            <Box
              component={Card}
              borderRadius={3}
              boxShadow={2}
              bgcolor={theme.palette.alternate.main}
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
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box
                    component={Avatar}
                    src={item.avatar}
                    height={128}
                    width={128}
                  />
                  <Box marginTop={4}>
                    <ListItemText
                      primary={item.name}
                      secondary={item.title}
                      align="center"
                    />
                    <Typography variant={'subtitle2'} color={'textSecondary'}  sx={{ width: { xs: '100%', md: '80%' }, margin:'auto' }} align="center">
                      {item.about}
                    </Typography>
                    <Box marginTop={4} display="flex" justifyContent="center">
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
                            marginRight: 1,
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
                            marginRight: 1,
                            color: colors.blueGrey[200],
                          }}
                        >
                          <LinkedinIcon />
                        </IconButton>
                      )}
                      {item.email && (
                        <a href={`mailto:${item.email}`}>
                          <IconButton
                            size={'small'}
                            sx={{
                              color: colors.blueGrey[200],
                            }}
                          >
                            <EmailIcon />
                          </IconButton>
                        </a>
                      )}
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>

        ))}
      </Grid>

      <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
            marginTop={5}
          >
            <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
          >
            {isSubmitted && (
                <Box marginBottom={2}>
                  <Typography variant="body2" color="success.main">
                    <CheckCircleIcon /> Successfully subscribed!
                  </Typography>
                </Box>
              )}            
            <Box
              component={'form'}
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
              sx={{
                '& .MuiInputBase-input.MuiOutlinedInput-input': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <Box
                  flex={'1 1 auto'}
                  component={TextField}
                  label="Enter your email"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  height={54}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}                  
                />
                <Box
                  component={Button}
                  variant="contained"
                  color="primary"
                  // size="large"
                  height={54}
                  width={{ xs: '100%', sm: '100%', md: '35%' }}
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                  disabled={formik.isSubmitting}
                  type="submit"
                >
                  Join the mailing list
                </Box>
              </Box>
            </Box>
          </Box>            
          </Box>
    
    </Box>
  );
};

export default Team;
