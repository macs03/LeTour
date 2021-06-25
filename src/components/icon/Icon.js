/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  AiOutlineLoading3Quarters,
  AiOutlineCheckCircle,
  AiOutlinePlusCircle
} from 'react-icons/ai';
import PropTypes from 'prop-types';
import { ImPause, ImPlay2 } from 'react-icons/im';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { RiDashboard3Line, RiUser3Line } from 'react-icons/ri';
import { IoMdFitness, IoIosRemoveCircleOutline } from 'react-icons/io';

import { ICON_PROPS } from '../../contants';

const icons = {
  loading: AiOutlineLoading3Quarters,
  check: AiOutlineCheckCircle,
  play: ImPlay2,
  pause: ImPause,
  dashboard: RiDashboard3Line,
  fitness: IoMdFitness,
  user: RiUser3Line,
  remove: IoIosRemoveCircleOutline,
  plus: AiOutlinePlusCircle,
  menu: HiOutlineMenuAlt3
};

function Icon({ type }) {
  const IconComponent = icons[type];

  return (
    <IconComponent
      className={type === 'loading' && 'animate-spin'}
      {...ICON_PROPS}
    />
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default Icon;
