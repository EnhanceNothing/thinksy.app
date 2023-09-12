import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import demoVideo from './images/demo7.mp4';
import {ReactComponent as UnderlineSVG} from './images/words-line.svg';


const Demo = () => {
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

        </Box>
    );
};

export default Demo;