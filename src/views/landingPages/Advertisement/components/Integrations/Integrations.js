import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import GithubLogo from './images/github.svg';
import AtlassianLogo from './images/atlassian.svg';
import GCalLogo from './images/googlecalendar.png';
import SlackLogo from './images/slack.svg';
import JiraLogo from './images/jira.svg';
import AsanaLogo from './images/asana.svg';


const Platforms = () => {
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
          color={'secondary'}
          align={'center'}
        >
          Integrations
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          We search where you're already working
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >

        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Slack',
            subtitle:
              'Select the channels where you work the most and Thinksy will read through your messages and message you were tagged in.',
            icon: SlackLogo,
            active: true,
          },
          {
            title: 'GitHub',
            subtitle:
              'Thinksy searches Pull Requests, commits, and PR Reviews to find the work you\'ve done and the support you\'ve provided your teammates',
            icon: GithubLogo,
            active: true,
          },
          {
            title: 'Asana',
            subtitle:
            'Keep track of all the tasks you\'ve worked on and the bugs you\'ve crushed to show progress on your teams goals.',
            icon: AsanaLogo,
            active: false,
          },
          {
            title: 'Jira',
            subtitle:
              'Keep track of all the tickets you\'ve worked on and the bugs you\'ve crushed to show progress on your teams OKRs.',
            icon: JiraLogo,
            active: false,
          },
          {
            title: 'Google Calendar',
            subtitle:
              'See how much time you\'ve spent in meetings so you don\'t miss important highlights like mentorship and leading conversations.',
            icon: GCalLogo,
            active: false,
          },
        ].map((item, i) => (
          <Grid
            item
            xs={12}
            md={2.4}
            key={i}
            padding={2}
            sx={{
                backgroundColor: item.active
                ? 'inherit'
                : alpha(theme.palette.secondary.main, 0.1)
              }}
          >
            <Box
              width={1}
              height={'100%'}
              data-aos={'fade-up'}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={'img'}
                  width={90}
                  height={90}
                  marginBottom={2}
                  src={item.icon}
                />
                <Typography
                  variant={'h6'}
                  gutterBottom
                  fontWeight={500}
                  align={'center'}
                >
                  {item.title}
                </Typography>

                {!item.active && (
                  <Typography
                    variant={'h7'}
                    gutterBottom
                    fontWeight={500}
                    align={'center'}
                    sx={{ fontStyle: 'italic' }}
                  >
                    (coming soon)
                  </Typography>
                )}

                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Platforms;
