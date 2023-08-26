import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import addIdeaImg from './images/add-idea-mock.png';
import {ReactComponent as UnderlineSVG} from './images/words-line.svg';
import demoVideo from './images/demo6.mp4';
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .trim()
    .email('Enter a valid email')
    .required('Email is required'),
});

const Hero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const referrer = document.referrer !== '' ? document.referrer : 'Unknown';
        console.log(referrer);
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

        console.log(response.data);
        resetForm();
        setIsSubmitted(true);
        // setTimeout(() => setIsSubmitted(false), 3000); // remove the success message after 3 seconds        
      } catch (error) {
        console.error('Error adding record to Airtable:', error);
      }

      setSubmitting(false);
    },
  });

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
      <Grid item xs={12} md={12}>
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
                  Get early access
                </Box>                
              </Box>
            </Box>
          </Box>            
          </Box>
        </Box>
      </Grid>
      {/* <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={12}
        data-aos={isMd ? 'fade-left' : 'fade-up'}
      >

      <GridItemVideoBlock />
      </Grid> */}
    </Grid>
  );
};

export default Hero;
