import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import addIdeaImg from './images/add-idea-tall.png';


const Hero = () => {
  const theme = useTheme();

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
              Idea management made easy
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="textSecondary">
              A smarter way to manage your ideas: Save time and effort with our intuitive idea management platform.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Box marginBottom={2}>
              <Typography variant="body1" component="p">
                Be the first to know when we launch - sign up now.
              </Typography>
            </Box>
              <Box
                component={'iframe'}
                src="https://webforms.pipedrive.com/f/5Xasadul4Hm9ROGvAYSqZ7DyDcgD2I7bqEZ4kA1A9mmtQOJ71Ogoz8jke0rVWVaXIv"
                fullWidth
                height={450}
                frameBorder="0"
                scrolling="auto"
                marginWidth="0"
                marginHeight="0"
                style={{ border: 'none', padding: 0, margin: 0, overflow: 'hidden', marginheight: 0, marginWdith: 0 }}
              />              
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
        <Box
          component={'img'}
          height={'100%'}
          width={'100%'}
          src={addIdeaImg}
          alt="..."
          loading="lazy"
          boxShadow={3}
          borderRadius={4}
          maxWidth={600}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
