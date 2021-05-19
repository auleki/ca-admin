import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { fonts, colors } from './constants'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

export const AltPageWrap = styled.div(
  ({ bg }) => css`
    height: 100%;
    background: ${colors.darkGray};
    padding: 3em 3em 0;
    /* overflow: auto; */
    overflow-y: scroll;
    position: relative;
    top: 0;
    /* margin-bottom: 5em; */

    .cardRow {
      display: flex;
      justify-content: space-between;
    }

    .shiftDown {
      margin: 4em 0 1em;
    }

    @media (min-width: 320px) and (max-width: 820px) {
      .cardRow {
        /* width: 80vh;
        height: 100%; */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
      }
    }
  `
)

export const PageWrap = styled.div(
  ({ bg }) => css`
    background: ${bg ? 'url(bg)' : colors.white};
    height: 100vh;
    font-family: ${fonts.main};
    overflow-y: scroll;
    z-index: 50;
    padding: 0 3em 1em;

    .flex {
      display: flex;
      justify-content: space-between;

      .button_icon:nth-child(2) {
        margin-left: 0.5em;
      }
    }

    .uploadArea .upload {
      position: absolute;
      right: 5em;
      top: 2em;
    }

    @media (max-width: 450px) {
      padding: 0 1em 1em;
    }
  `
)

export const AppWrap = styled.div(
  ({ color }) => css`
    /* display: flex; */
    justify-content: space-evenly;
    /* grid-template-columns: 250px 3.5fr; */
    background: ${colors.black};
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
  `
)

export const Nav = styled.div`
  /* background: #fff; */
  /* background: #1a1a1a; */
  /* height: 100px; */
  height: 50px;
  display: flex;
  /* position: fixed; */
  left: 0;
  width: 100px;
  justify-content: flex-start;
  padding-top: 2em;
  align-items: center;
`

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  color: ${colors.white};
  justify-content: flex-start;
  align-items: center;
`

export const SpanText = styled.span(
  ({ size, color, badge }) => css`
    font-size: 0.8em;
  `
)

export const BadgeText = styled.span(
  ({ size, color, padding, paid, textColor }) => css`
    padding: 0.5em 0.5em;
    border-radius: 0.2em;
    font-size: ${size || 0.7}em;
    background: ${paid ? colors.orange : color ? color : colors.lightDark};
    font-weight: 600;
    color: ${textColor || colors.white};
  `
)
export const SideBarNav = styled.div(
  ({ sidebar }) => css`
    background: #1a1a1a;
    width: 250px;
    color: #fff;
    position: relative;
    z-index: 1000;
    transition: 350ms ease-in;

    .sidenav {
      /* width: 350px; */
      background: #011627;
      position: absolute;
      height: 95vh;
      padding: 0;
      left: -100%;
      letter-spacing: 0.1em;
      font-weight: 600;
      font-family: $secondary;
      z-index: 50;
      transition: 200ms ease-in;

      &.active {
        left: 0;
      }
    }
  `
)

export const SideNavStyle = styled.div(
  ({ compact, active }) => css`
    width: 240px;
    /* height: 86vh; */
    height: 100vh;
    color: ${colors.altWhite};
    position: absolute;
    background: ${colors.black};
    top: 0;
    z-index: 400;
    transition: 300ms ease-in;
    left: ${active ? '0' : '-100%'};

    .sidenav {
      background: ${colors.red};
      padding: 0;
      letter-spacing: 0.1em;
      font-weight: 600;
      font-family: $secondary;
      z-index: 50;
      transition: 200ms ease-in;

      &.active {
        left: 0;
      }
    }

    .navigation {
      list-style-type: none;
      overflow-x: hidden;
      font-family: ${fonts.primary};

      a {
        text-decoration: none;
        display: flex;
        align-items: center;

        color: ${colors.white};

        &:hover {
          a {
            color: ${colors.white};
          }
        }
      }

      li {
        padding: 1em 1em;
        width: 100%;
        display: flex;
        gap: 0.5em;
        align-items: center;
        font-size: 1.1em;
        border-top-left-radius: 0.5em;
        border-bottom-left-radius: 0.5em;

        span {
          transition: 150ms ease-in;
        }

        &:hover {
          color: ${colors.altWhite};
          background: ${colors.red};

          span {
            padding: 0 0.8em;
          }
        }
      }
    }
  `
)

export const SidebarWrap = styled.div`
  width: 100%;
  /* padding-top: 5%; */
  /* z-index: 100; */
`

export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3em;
  /* height: 30px; */
  padding: 20px;
  text-decoration: none;

  &:hover {
    background: #1f1f1f;
    border-left: 2px solid #f36b2b;
    cursor: pointer;
  }
`

export const SidebarLabel = styled.span(
  ({ color }) => css`
    margin-left: 1em;
  `
)

export const DropDownLink = styled(Link)`
  background: #1f1f1f;
  display: flex;
  /* justify-content: center; */
  padding-left: 2em;
  text-decoration: none;
  transition: 300ms ease-in;
  color: #ddd;
  align-items: center;
  border-right: 0.4em solid transparent;
  border-radius: 2px;
  height: 60px;

  &:hover {
    /* background: #181818; */
    border-right: 0.2em solid ${colors.lightOrange};
    color: ${colors.lightGreen};
    cursor: pointer;
  }
`

export const TableStyle = styled.table(
  ({ bgColor }) => css`
    border-collapse: collapse;
    width: 100%;

    th,
    tr {
      border-radius: 1px;
    }

    tr {
      transition: 100ms ease-out;
      color: ${colors.lightDark};
      z-index: 50;
      background-color: ${colors.gray};
      border-bottom: 2px solid ${colors.darkGray};
    }

    tr:nth-child(even) {
      color: ${colors.black};
      border-bottom: 2px solid ${colors.darkGray};

      &:hover {
        color: ${colors.altWhite};
        /* background: ${colors.lightOrange}; */
        /* border-bottom: 2px solid transparent}; */
      }
    }

    tr:hover {
      color: ${colors.gray};
      background: ${colors.orange};
    }

    thead tr {
      text-align: center;
      width: 100%;
    }

    thead th {
      background: ${colors.black};
      align-items: center;
      color: ${colors.altWhite};
      /* display: flex;   */

      span {
        color: ${colors.altWhite};
        font-size: 1.3em;
        position: relative;
        top: .2em;
      }
    }

    th {
      padding: 18px 0;
      text-align: center;
      background-color: ${colors.altWhite};
      color: ${colors.black};
      text-transform: uppercase;
      padding: 15px;
    }

    tbody td {
      padding: 1em 0.5em;
      text-align: center;
      /* border: 1px solid ${colors.lightOrange}; */
    }
    

    /* thead tr {
      display: flex;
      justify-content: space-between;
      width: 100%;
    } */

    span {
      margin-left: 0.5em;
      position: relative;
      top: 1px;
      font-size: 0.8em;
    }
  `
)

export const Row = styled.div(
  ({
    size,
    color,
    justifyContent,
    alignItems,
    marginY,
    marginX,
    gap,
    padding
  }) => css`
    display: flex;
    gap: ${gap || 0};
    margin: ${marginY || 0}em ${marginX || 0}em;
    align-items: ${alignItems || 'inherit'};
    justify-content: ${justifyContent || 'inherit'};

    .actions {
      display: flex;
      gap: 10px;
    }
  `
)

export const IconButton = styled.button(
  ({ bgColor, outlined }) => css`
    /* height: 3em; */
    width: 100%;
    padding: .5em;
    /* border-radius: 2px; */
    background: ${outlined ? 'transparent' : colors.orange};
    border: 4px solid ${outlined ? colors.orange : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    font-size: 1.2em;
    color: ${outlined ? colors.black : colors.white};
    transition: 200ms ease-in;

    /* span {
      color: ${colors.black};
    } */

    svg {
        transition: 200ms ease-in;
      }
    
    &:hover {
      background: ${outlined ? 'transparent' : colors.altWhite};
      cursor: pointer;
      color: ${outlined ? colors.orange : colors.orange};
      /* transform: translateY(.1em); */
      /* border: 4px solid ${outlined ? colors.black : colors.orange}; */

      &:disabled {
        background: ${outlined ? colors.gray : colors.gray};
        color: ${colors.black};
        /* border: 4px solid ${colors.gray}; */
      }

      svg {
        transform: scale(1.2);
      }

      span {
        /* color: ${outlined ? colors.black : colors.orange}; */
      }
    }

    &:disabled {
      background: ${colors.gray};
      color: ${colors.black};
      cursor: not-allowed;
      border: 4px solid ${colors.gray};
    }
  `
)

export const ClothingCard = styled.div(
  ({ size, color }) => css`
    
    /* background: ${colors.green}; */
    margin: 2em 0 10em;
    /* margin-bottom: 4em; */
    font-family: ${fonts.quickSand};
    .clothing {
      /* display: flex; */
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1em;
      row-gap: 4em;
      /* flex-wrap: wrap; */
      justify-content: space-evenly;
      margin-bottom: 3em;
    }

    .error-section {
      margin-top: 1em;
      color: red;
      padding: .5em 0;
      text-transform: uppercase;
      font-size: .9em;
      font-weight: 600;
      /* background: ${colors.black}; */
    }

    @media (min-width:550px) and (max-width: 1000px) {
      .clothing {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
      }
    }
    
    /* 22233805584
    08129833414  */
    
    @media (min-width: 600px) and (max-width: 790px) {
      .clothing {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;
      }
    }
    

    @media (min-width: 320px) and (max-width: 600px) {
      .clothing {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1em;
      }
    }
    
  `
)

export const StyleClothCard = styled.div(
  ({ color, size }) => css`
    padding: 1em 1em;
    text-align: center;
    transition: 300ms ease-out;
    color: ${colors.darkBlue};
    height: 100%;
    background: ${colors.gray};
    border-radius: 0.3em;

    .image {
      /* background: ${colors.lightOrange}; */
      background: transparent;
      padding: 1.5em;
      border-radius: 3px;
      img {
        height: 10em;
        width: 10em;
        object-fit: cover;
      }
    }

    .priceSection {
      button {
        margin: 0 auto;
      }
    }
    
    .price {
      background: ${colors.altWhite};
      color: ${colors.black};
      padding: 0.5em 0;
      border-radius: 3px;
      letter-spacing: 0.1em;
      font-family: ${fonts.ibmPlex};
    }

    .name {
      font-family: ${fonts.quickSand};
      font-size: 1.2em;
      font-weight: 600;
    }

    img {
      height: auto;
      width: 5em;
    }

    .cardSwitch {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2em 0;

      span {
        font-size: 0.8em;
        font-weight: 700;
        letter-spacing: .05em;
      }
    }

    .MuiFormControlLabel-root {
      margin: 0;
    }

    &:hover {
      background: ${colors.altWhite};
      color: ${colors.darkBlue};
      -webkit-box-shadow: -3px 3px 5px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: -3px 3px 5px 0px rgba(186, 186, 186, 1);
      box-shadow: -3px 3px 5px 0px rgba(186, 186, 186, 1);

      .image {
        /* background: ${colors.lightOrange}; */
      }

      input {
        background: ${colors.gray};
      }
    }
  `
)

const Spin = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`

// export const IconButton = styled.button(
//   ({ color }) => css`
//     border: 0;
//     outline: 0;
//     padding: 1em 1.5em;
//     font-family: ${fonts.quickSand};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: ${colors.white};
//     transition: 200ms ease-in-out;
//     border-bottom: 0.2em solid transparent;

//     &:hover,
//     &:focus {
//       svg {
//         transform: scale(1.6) ${noRotate ? '' : 'rotate(-90deg)'};
//       }
//     }
//   `
// )

export const Button = styled.button(
  ({ color, size, noRotate, loading }) => css`
    border: 0;
    outline: 0;
    padding: 1em 1.5em;
    font-family: ${fonts.quickSand};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 0.2em;
    background: ${colors.orange};
    letter-spacing: 0.05em;
    font-weight: 600;
    color: ${colors.white};
    text-transform: uppercase;
    transition: 200ms ease-in-out;
    border-bottom: 0.2em solid transparent;

    span {
      transition: 200ms ease-out;
      font-weight: 600;
    }

    .upload {
      position: absolute;
      /* color: ${colors.blue}; */
    }
    
    .button_icon {
      /* font-size: 1em; */
      display: flex;
      align-items: center;
      /* animation: ${loading ? Spin : ''} 800ms infinite; */
      animation: ${
        loading
          ? css`
              ${Spin} 800ms infinite
            `
          : 'none'
      }
    }

    svg {
      transition: 200ms ease-out;
      font-size: 1.3em;
    }

    &:hover,
    &:focus {
      background: ${colors.altWhite};
      color: ${colors.orange};
      cursor: pointer;
      border-bottom: 0.2em solid ${colors.red};
      /* border-radius: 0; */

      span {
        transform: translateX(-0.4em);
        color: ${colors.black};
      }

      svg {
        transform: scale(1.6) ${noRotate ? '' : 'rotate(-90deg)'};
      }
    }

    &:active {
      transform: translateY(.5em);
    }
  `
)

export const IOS_SWITCH = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none'
      }
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff'
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  )
})

const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Box = styled.div(
  ({ hide }) => css`
    display: ${hide ? 'block' : 'none'};
    animation: ${FadeIn} 800ms;
    height: 100vh;
    z-index: 400;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: ${colors.altWhite};

    .close {
      color: ${colors.red};
      position: absolute;
      right: 2em;
      top: 2em;
      height: 1em;
      border-radius: 50%;
      padding: 0.5em;
      width: 1em;
      transition: 200ms ease-in-out;

      &:hover {
        background: ${colors.orange};
        cursor: pointer;
        color: ${colors.altWhite};
      }
    }
  `
)

export const FormStyle = styled.form(
  ({ color, size, full }) => css`
    display: flex;
    flex-direction: column;
    width: ${full ? '100%' : '35%'};
    margin: 0 auto;
    margin-top: 10%;
    /* background: ${colors.black}; */

    /* .errorMsg {
      color: ${colors.altWhite};
      padding: .5em 0;
      margin-bottom: 1em;
      border-radius: 1em;
      background: ${colors.red};
      text-align: center
    } */

    .formHeader {
      font-family: ${fonts.ibmPlex};
      font-size: 1.3em;
      color: ${colors.orange};
    }

    .formGroup {
      display: flex;
      flex-direction: column;
      margin-bottom: 1em;
      
      label {
        padding: 1em 0;
        display: flex;
        align-items: center;
        gap: .5em;
        svg {
          padding: .5em .5em;
          background: ${colors.gray};
          border-radius: 100px;
        }
      }

      input, select {
        outline: 0;
        border: 0;
        padding: 1em 1em;
        border-radius: .2em;
        background: ${colors.gray};
      }

      select {
        padding: 1em .5;
      }
    }

    @media (min-width:320px) and (max-width: 720px) {
      width: 90%;
    }
    
  `
)

const SlideIn = keyframes`
  0% {
    transform: translateX(15%);
  }

  60% {
    transform: translateX(0);
  }

  80% {
    transform: translateX(-5%);
  }

  100% {
    transform: translateX(0);
  }

`

export const ErrorStyle = styled.div(
  ({ color }) => css`
    background: ${colors.red};
    color: ${colors.altWhite};
    padding: 0.5em 1em;
    position: relative;
    animation: 100ms ${SlideIn} ease-in;
    margin-bottom: 1em;
    border-radius: 1em;

    .icon {
      position: absolute;
      color: ${colors.black};
      height: 1.4em;
      width: 1.4em;
      right: 0.3em;
      top: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      cursor: pointer;
      transition: color 150ms ease-in, background 300ms ease-in;
      &:hover {
        color: ${colors.white};
        background: ${colors.black};
      }
    }
  `
)

const shockBounce = keyframes`
	0% {
		transform: translateY(-.2em);
	}

	60% {
		transform: translateY(.2em);
	}

	100% {
		transform: translateY(0em);
	}
`

export const MiniCard = styled.div(
  ({ bgColor, pColor }) => css`
    height: 100%;
    width: 10em;
    padding: 1em;
    font-size: 1.3em;
    font-family: ${fonts.quickSand};
    text-align: center;
    /* border-radius: 1em; */
    color: ${colors.altWhite};
    border: 0.15em solid transparent;
    transition: transform 100ms ease-in, box-shadow 200ms ease-in,
      background 300ms ease-in;
    border-bottom: 0.15em solid ${colors.green};
    background: linear-gradient(to right, #33333385, #33333370),
      url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1621061901/asteroids_bwlczi.jpg');
    box-shadow: 5px 1px 5px 0px rgba(131, 131, 131, 0.75);
    -webkit-box-shadow: 5px 1px 5px 0px rgba(131, 131, 131, 0.75);
    -moz-box-shadow: 5px 1px 5px 0px rgba(131, 131, 131, 0.75);
    background-size: cover;

    p {
      background: ${pColor || colors.black};
      color: ${colors.white};
      height: 2em;
      width: 2em;
      border-radius: 0.1em;
      align-items: center;
      justify-content: center;
      display: inline-flex;
    }

    &:hover {
      /* transform: translateY(0.15em); */
      border: 0.15em solid ${colors.lightGreen};
      z-index: 10;
    }

    @media (min-width: 550px) and (max-width: 890px) {
      width: 60vh;
    }

    @media (min-width: 320px) and (max-width: 550px) {
      width: 100%;
    }
  `
)

export const InputGroup = styled.div(
  ({ size }) => css`
    display: flex;

    input {
      padding: 0.2em 0 0 1em;
      background: ${colors.white};
      font-family: ${fonts.ibmPlex};
      letter-spacing: 1px;
      outline: 0;
      border: 0;
    }
  `
)
