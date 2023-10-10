import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import demoVideo from './images/demo8.mp4';
import {ReactComponent as UnderlineSVG} from './images/words-line.svg';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import mixpanel from 'mixpanel-browser';

mixpanel.init("eed12a268b55b342ce4b0044b9ae2814", { track_pageview: true, persistence: 'localStorage' });


const Demo = () => {
    const theme = useTheme();

    const handleDemoClick = () => {
        mixpanel.track('Clicked Schedule Demo Button', {
            'Referrer': document.referrer !== '' ? document.referrer : 'Unknown'
        })
    };

    return (
        <Box position={'relative'}>
            <Box marginBottom={2} position="relative">
                <Typography
                    variant="h3"
                    align={'center'}
                    color="textPrimary"
                    sx={{ fontWeight: 700 }}
                >
                    No more manually tracking <br />your {" "}
                    <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                        accomplishments
                        <Box component={UnderlineSVG} sx={{ position: 'absolute', left: '-1px', bottom: '-10px', width: '100%', zIndex: -1 }}/>
                    </Box>{" "}
                </Typography>
            </Box>


            <Box marginTop={5} position="relative">
                <Typography
                    variant="h6"
                    align={'center'}
                    color="textSecondary"
                    sx={{ fontWeight: 700 }}
                >
                    Explore the ways Thinksy can save hours of your time.
                </Typography>
            </Box>

            <Box
            component={'video'}
            marginTop={'2%'}
            marginLeft={'10%'}
            marginRight={'10%'}
            height={'80%'}
            width={'80%'}
            // poster={thumbnail}
            src={demoVideo}
            alt="..."
            loading="lazy"
            boxShadow={4}
            borderRadius={1.5}
            sx={{
            objectFit: 'cover',
            }}
            controls
            // muted
            // loop
        />

        {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0 0 0' }}>
            <div style={{ paddingRight: '20px' }}>
                <Typography color="textSecondary" align='center'>
                Want to see more? Walk through a live <br /> demo with one of our co-founders
                </Typography>
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
        </div> */}

        <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop={2}>
            <Grid item>
            <Box
                component={Typography}
                align={'center'}
                color="textSecondary"
            >
                Want to see more? Walk through a live <br /> demo with one of our co-founders
            </Box>
            </Grid>
            <Grid item>
            <Link href="https://thinksy.pipedrive.com/scheduler/kW5wODT2/thinksy-demo" target="_blank" underline="none">
                <Box
                component={Button}
                variant="contained"
                color={theme.palette.primary.dark}
                size="large"
                type="submit"
                style={{ minWidth: '230px', backgroundColor: theme.palette.secondary.main }}
                // margin={1}
                onClick={handleDemoClick}
                >
                Schedule a Thinksy demo
                </Box>
            </Link>
            </Grid>
        </Grid>

        </Box>
    );
};

export default Demo;