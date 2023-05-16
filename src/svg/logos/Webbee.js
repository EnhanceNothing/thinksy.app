import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { ReactComponent as IconSvg } from './icon-text-2.svg';

const Webbee = ({ width = 45, height = 70 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  const colorPrimaryDark = theme.palette.primary.main;
  return (
    <IconSvg
    width={width}
    height={height}
    fill="none"
    colorPrimaryMain={colorPrimaryMain}
    colorPrimaryDark={colorPrimaryDark}
    />
  );
};

Webbee.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Webbee;
