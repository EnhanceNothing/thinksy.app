import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import addIdeaImg from './images/add-idea-mock.png';
import Card from '@mui/material/Card';
import { Link } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import {ReactComponent as UnderlineSVG} from './images/words-line.svg';
import demoVideo from './images/demo6.mp4';
import calendar from './images/calendar-icon.svg';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import mixpanel from 'mixpanel-browser';

mixpanel.init("eed12a268b55b342ce4b0044b9ae2814", { track_pageview: true, persistence: 'localStorage' });

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .trim()
    .email('Enter a valid email')
    .required('Email is required'),
});
const referrer = document.referrer !== '' ? document.referrer : 'Unknown';

const to = "calli@enhancenothing.com";
const subject = "Gimme Thinksy!";
const body = "Hey Calli, I'm interested in trying out Thinksy! Can we set up some time for a demo?";
const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const Hero = ({ themeMode = 'light' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {

      mixpanel.track('Mailing List Signup', {
        'Referrer': referrer,
        'Location': 'Hero'
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

  const handleDemoClick = () => {
    mixpanel.track('Clicked Schedule Demo Button', {
      'Referrer': referrer
    })
  };

  const handleGetThinksyClick = () => {
    mixpanel.track('Clicked Get Thinksy Button', {
      'Referrer': referrer
    })
  };

  const theme = useTheme();

  const GridItemVideoBlock = () => {
    return (
      <Box maxHeight={500} position={'relative'}>
        <Box
        component={'video'}
        maxHeight={500}
        height={'100%'}
        width={'100%'}
        src={demoVideo}
        alt="..."
        loading="lazy"
        boxShadow={4}
        borderRadius={1.5}
        sx={{
          objectFit: 'cover',
        }}
        controls
        autoPlay
        muted
        loop
      />
      </Box>
    );
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={7} paddingBottom={2}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{ fontWeight: 700 }}
            >
              Save {" "}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                hours
                <Box component={UnderlineSVG} sx={{ position: 'absolute', left: '-1px', bottom: '-10px', width: '100%',  zIndex: -1 }}/>
              </Box>{" "}
              compiling data for your next performance review
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="textSecondary">
            Thinksy is a Slack app that helps engineers and their managers automatically summarize their work across JIRA, GitHub and Google Calendar for a faster, painless performance review and promotion process.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
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
      </Grid>
      <Grid
        // item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={5}
        data-aos={isMd ? 'fade-left' : 'fade-up'}
      >

        <Box padding={{ xs: 1, md: 2, lg: 3 }}>
            <Box
              component={Card}
              boxShadow={{ xs: 1, sm: 3 }}
              borderRadius={5}
              height={'100%'}
              width={'100%'}
            >
              <Box
                component={CardContent}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                padding={{ xs: 2, sm: 4, md: 6 }}
                sx={{
                  '&:last-child': {
                    paddingBottom: { xs: 2, sm: 4, md: 6 },
                  },
                }}
              >
                  <Box
                    component={Typography}
                    variant={'h4'}
                    gutterBottom
                    fontWeight={500}
                    align={'center'}
                    color="text"
                  >
                    See for yourself
                  </Box>

                  <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '20px' }}>
                    <div>
                      <img src={calendar} alt="calendar icon" style={{ paddingRight: '10px' }} />
                    </div>
                    <div>
                      <Typography color="textSecondary">
                        Walk through a live demo <br /> with one of our co-founders
                      </Typography>
                    </div>
                  </div>

                  <Link href="https://thinksy.pipedrive.com/scheduler/kW5wODT2/thinksy-demo" target="_blank" underline="none">
                    <Box
                      component={Button}
                      variant="contained"
                      color={theme.palette.primary.dark}
                      size="large"
                      type="submit"
                      style={{ minWidth: '230px', backgroundColor: theme.palette.secondary.main }}
                      margin={1}
                      onClick={handleDemoClick}
                    >
                      Schedule a Thinksy demo
                    </Box>
                </Link>

                <Typography color="textSecondary">
                  or
                </Typography>

                <Link href={mailtoLink} target="_blank" underline="none">
                  <Box
                    component={Button}
                    variant="contained"
                    color={theme.palette.primary.dark}
                    size="large"
                    type="submit"
                    style={{ minWidth: '230px', backgroundColor: alpha(theme.palette.secondary.main, 0.7) }}
                    margin={1}
                    onClick={handleGetThinksyClick}
                  >
                    Get Thinksy today!
                  </Box>
                </Link>

              </Box>
            </Box>
          </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
