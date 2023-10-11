import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h5'}
          align={'left'}
        >
          {title}
        </Box>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            paddingY={1}
            elevation={0}
            sx={{
              '&:first-of-type': {
                borderTopLeftRadius: theme.spacing(1),
                borderTopRightRadius: theme.spacing(1),
              },
              '&:not(:first-of-type):before': {
                opacity: '1 !important',
                display: 'block !important',
              },
              '&.Mui-expanded': {
                margin: 0,
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
              padding={`${theme.spacing(0)} !important`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">
                {item.subtitle.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
           </AccordionDetails>

          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Sign up & Subscription'}
          items={[
            {
              title: 'What happens after I sign up for Thinksy?',
              subtitle:
                "The Thinksy free version is available immediately. For paid versions, after signing up for Thinksy you will receive a confirmation email with a link to schedule a quick 15 minute on-boarding call with one of our co-founders. During the on-boarding call we will share screens and walk you through the steps to add Thinksy to your Slack workspace, integrate your apps, and test your first Thinksy summary. You'll also gain access to the exclusive Thinksy support channel for on-going feedback loop.",
            },
            {
              title: 'Can I cancel anytime?',
              subtitle:
                "Yes, you can cancel anytime, there is no long term obligation. Thinksy is billed month to month so if you choose to cancel, your Thinksy account will be deactivated on the last day before your next billing period."
            },
            {
              title: 'What is your money back guarantee?',
              subtitle:
                "If you are not satisfied with Thinksy, we will refund you for the amount you paid for Thinksy up to three (3) months. To help us learn & grow as a company we will request an exit interview so we can continually improve."
            },
            {
              title: 'What do I get with the Thinksy free version?',
              subtitle:
                "The Thinksy free version offers the following features:\n• One integration\n• Up to two weeks review period\n• Generate up to 10 reviews\n• No expiration date\n• 10% off your first three months of a Thinksy paid subscription"
            },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Use & Features'}
          items={[
            {
              title: 'How do I use Thinksy?',
              subtitle:
                "After adding Thinksy to your Slack workspace, navigate to the Thinksy app on the lefthand sidebar\n\nType your command in the chatbox, \"Message Thinksy\"\nThere are two commands:\n\n`/thinksy settings`\nConnect your apps using OAuth\n\n`/thinksy review`\nSelect the date range, there is a 2 week limit on the free version\nSelect public Slack channels, optional\n\nClick \"Generate Review\"",
            },
            {
              title: 'What is the Thinksy support channel?',
              subtitle:
                'The Thinksy support channel is an exclusive Slack Connect channel for users to access immediate support, give feedback, chat with other Thinksy users and more. It is available on any paid version of Thinksy.',
            },
            {
              title: 'Can I change the results I get from Thinksy?',
              subtitle:
                'At this time, custom prompts are only available to Enterprise customers. For Free, Standard and Premium plans, the results generated by Thinksy will not change unless the input data is updated.',
            },
            {
              title: 'How do I review a coworker?',
              subtitle:
                'To run reports on coworkers and other users, upgrade to Premium.',
            },
            {
              title: 'When will you add more integrations?',
              subtitle:
                'While there is no set schedule for new features or new integrations we are continually iterating and improving Thinksy and notify those on our mailing list of the latest updates as soon as they\'re available.',
            },
          ]}
        />
      </Box>
      <Box>
        <FaqGroupItem
          title={'Security'}
          items={[
            {
              title: 'How do I know my data is secure with Thinksy?',
              subtitle:
                'We take the security of your data very seriously.  Please email our CTO for details on how we keep your data safe eden@thinksy.app',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;
