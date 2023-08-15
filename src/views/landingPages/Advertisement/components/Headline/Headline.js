import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      padding={4}
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '100%', // To cover the whole box
          zIndex: 1,
          top: 0,
          left: 0,
          height: '100%',
          backgroundColor: theme.palette.secondary.main, // Use the secondary color
          opacity: 0.2,
          borderRadius: '10px',
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          About us
        </Typography>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Performance tools made for <br />
            software engineers
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" align={'center'} color={'textSecondary'} sx={{ width: { xs: '100%', md: '65%' }, margin:'auto' }}>
            We’re on a mission to make performance reviews and promotion packets a delightful, not dreadful experience.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Headline;