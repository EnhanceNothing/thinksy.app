import Box from '@mui/material/Box';
import demoVideo from './images/demo6.mp4';


const Demo = () => {
    return (
        <Box position={'relative'}>
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