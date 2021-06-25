import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineBadgeCheck
} from 'react-icons/hi'

import * as FcIcon from 'react-icons/fc'
import * as FiIcon from 'react-icons/fi'

import {
  AiOutlineTrophy,
  AiOutlineClockCircle,
  AiOutlinePicture,
  AiOutlineClose,
  AiOutlineLoading,
  AiOutlineUserAdd,
  AiOutlinePlusSquare,
  AiOutlineSkin,
  AiOutlinePlus,
  AiOutlineTags
} from 'react-icons/ai'

import * as GiIcons from 'react-icons/gi'

export const colors = {
  black: '#262626',
  white: '#F7F7F2',
  red: '#F63A1D',
  orange: '#ff5f31',
  lightOrange: '#ff815d',
  lightDark: '#1D1E2C',
  altWhite: '#f5f5f5',
  lightGreen: '#B6EEA6',
  darkGray: '#E2E2E2',
  gray: '#ececec',
  green: '#C5D86D',
  blue: '#348AA7',
  darkBlue: '#525174'
}

export const fonts = {
  main: 'ABeeZee',
  primary: 'Asap',
  alternate: 'Maven Pro',
  ibmPlex: 'IBM Plex Mono',
  quickSand: 'Quicksand',
  rockNRoll: 'RocknRoll One'
}

export const icons = {
  user: <FiIcon.FiUser />,
  bin: <FiIcon.FiTrash2 />,
  email: <HiOutlineMail />,
  badge: <HiOutlineBadgeCheck />,
  victory: <AiOutlineTrophy />,
  time: <AiOutlineClockCircle />,
  image: <AiOutlinePicture />,
  login: <FiIcon.FiLogIn />,
  lock: <FiIcon.FiLock />,
  lockColored: <FcIcon.FcLock />,
  businessMan: <FcIcon.FcBusinessman />,
  close: <AiOutlineClose />,
  loading: <AiOutlineLoading />,
  winners: <AiOutlineTrophy />,
  subscribers: <AiOutlineUserAdd />,
  orders: <AiOutlineTags />,
  clothes: <AiOutlineSkin />,
  overview: <GiIcons.GiDeadEye />,
  add: <AiOutlinePlusSquare />,
  tick: <FiIcon.FiCheckSquare />,
  cancelSquare: <FiIcon.FiXSquare />,
  cancel: <FiIcon.FiX />
}
