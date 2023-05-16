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
import demoVideo from './images/demo-5.webm';
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
        const response = await axios.post(
          'https://api.airtable.com/v0/appvKEFZdedhZN1cg/Thinksy.app%20Waitlist%20SIgnups',
          {
            fields: {
              "Email": values.email,
              "Tag": [
                "Warm lead"
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
      <Box maxHeight={300} position={'relative'}>
        {/* <Box
          component={'img'}
          maxHeight={300}
          height={'100%'}
          width={'100%'}
          src={'https://assets.maccarianagency.com/backgrounds/img2.jpg'}
          alt="..."
          loading="lazy"
          boxShadow={4}
          borderRadius={1.5}
          sx={{
            objectFit: 'cover',
          }}
        /> */}

        <Box
        component={'video'}
        maxHeight={300}
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
        muted  
        loop      
        playsInline        
      />        
      
        {/* <Box
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          color={theme.palette.primary.main}
          zIndex={2}
          sx={{
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
        >
          <svg
            width={80}
            height={80}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </Box> */}
      </Box>
    );
  };  

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{ fontWeight: 700 }}
            >
              Don’t lose another good idea
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="textSecondary">
              Thinksy saves & organizes your ideas directly in Slack so you don't have to
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
                  width={'35%'}
                  height={54}
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
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos={isMd ? 'fade-left' : 'fade-up'}
      >

      <GridItemVideoBlock />
        {/* <Box
          component={'img'}
          height={'100%'}
          width={'100%'}
          src={addIdeaImg}
          alt="..."
          loading="lazy"
          boxShadow={3}
          borderRadius={4}
          maxWidth={800}
        /> */}
      </Grid>
    </Grid>
  );
};

export default Hero;
