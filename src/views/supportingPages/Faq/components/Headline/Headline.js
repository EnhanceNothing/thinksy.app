import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      {/* <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        F.A.Q.
      </Typography> */}
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" align={'center'} color={'textSecondary'}>
        For any inquiries or feedback, we’re here to help. If you can’t find the answer to your <br /> questions, please contact us directly and we’ll respond within 24 hours.
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
