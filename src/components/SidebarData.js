import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
  {
    title: 'Overview',
    path: '/',
    icon: <GiIcons.GiDeadEye />,
    iconOpen: <RiIcons.RiArrowDownSFill />,
    iconClosed: <RiIcons.RiArrowUpSFill />
  },
  {
    title: 'Clothing',
    path: '/clothing',
    icon: <GiIcons.GiAmpleDress />,
    iconOpen: <RiIcons.RiArrowDownSFill />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Clothes',
        path: '/clothing/clothes',
        icon: <AiIcons.AiOutlineSkin />
      },
      {
        title: 'Orders',
        path: '/clothing/orders',
        icon: <AiIcons.AiOutlineTags />
      }
    ]
  },
  {
    title: 'Users',
    path: '/users',
    icon: <AiIcons.AiOutlineUser />,
    iconOpen: <RiIcons.RiArrowDownSFill />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Subscribers',
        path: '/users/subscribers',
        icon: <AiIcons.AiOutlineUserAdd />
      }
      // difference is over here all blocked accounts and their source is showed
    ]
  },
  {
    title: 'Quiz',
    path: '/quiz',
    icon: <AiIcons.AiOutlineQuestion />,
    iconOpen: <RiIcons.RiArrowDownSFill />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Winners',
        path: '/quiz/winners',
        icon: <AiIcons.AiOutlineTrophy />
      }
      // specific cause players can be blocked for any reason
    ]
  }
  // {
  //   title: 'History',
  //   path: '/history',
  //   icon: <AiIcons.AiOutlineHistory />,
  //   iconOpen: <RiIcons.RiArrowDownSFill />,
  //   iconClosed: <RiIcons.RiArrowUpSFill />
  // },

  // {
  //   title: 'Settings',
  //   path: '/settings',
  //   icon: <AiIcons.AiFillControl />,
  //   iconOpen: <RiIcons.RiArrowDownSFill />,
  //   iconClosed: <RiIcons.RiArrowUpSFill />
  // }
]
