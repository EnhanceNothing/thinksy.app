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

const to = "calli@thinksy.app";
const subject = "Gimme Thinksy!";
const body = "Hey Calli, I'm interested in trying out Thinksy! Can we set up some time for a demo?";
const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const SlackButton = () => (
  <a href="https://624xubbu4piovegru452zrewii0rlgyj.lambda-url.us-east-1.on.aws/" style={{alignItems:'center',color:'#fff',backgroundColor:'#4A154B',border:'0',borderRadius:'4px',display:'inline-flex',fontFamily:'Lato, sans-serif',fontSize:'16px',fontWeight:'600',height:'48px',justifyContent:'center',textDecoration:'none',width:'236px', marginTop:'5px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" style={{height:'20px',width:'20px',marginRight:'12px'}} viewBox="0 0 122.8 122.8">
      <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path>
      <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path>
      <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path>
      <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path>
    </svg>
    Try Thinksy for free!
  </a>
);

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
              variant="h3"
              color="textPrimary"
              sx={{ fontWeight: 700 }}
            >
              Save {" "}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                hours
                <Box component={UnderlineSVG} sx={{ position: 'absolute', left: '-1px', bottom: '-10px', width: '100%',  zIndex: -1 }}/>
              </Box>{" "}
              summarizing your work
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="textSecondary">
            Say goodbye to manual write ups. Let Thinksy compile a concise list of what you’ve worked on for your next daily standup, weekly update, or performance review.
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
                    {/* <div>
                      <img src={calendar} alt="calendar icon" style={{ paddingRight: '10px' }} />
                    </div> */}
                    <div>
                      <Typography color="textSecondary" align='center'>
                      Discover effortless work <br /> summaries today
                      </Typography>
                    </div>
                  </div>

                  {/* <Link href="https://thinksy.pipedrive.com/scheduler/kW5wODT2/thinksy-demo" target="_blank" underline="none">
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
                </Typography> */}

                <SlackButton />


                <Typography color="textSecondary" marginTop={'20px'}>
                  No payment required
                </Typography>

              </Box>
            </Box>
          </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
