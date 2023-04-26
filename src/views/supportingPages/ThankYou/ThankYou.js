import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from 'common/Container';
import CyclingIllustration from 'svg/illustrations/Cycling';
import YayFrog from './images/yay-frog-blep.gif';

const ThankYou = () => {
  return (
    <Box
      minHeight={'calc(100vh - 64px - 183px)'}
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item container justifyContent={'center'} xs={12}>
            <Box height={'100%'} width={'100%'} maxWidth={500} style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={YayFrog} alt="Yay frog" style={{ margin: 'auto' }} />
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
          >
            <Box>
              <Typography
                variant="h4"
                component={'h4'}
                align={'center'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                YEEEEEHAW!
              </Typography>
              <Typography component="p" color="textSecondary" align={'center'}>
                Thanks for signing up!
                <br />
                We'll let you know as soon as Thinsky is launched :)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThankYou;
