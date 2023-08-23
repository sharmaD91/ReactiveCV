import { renderToStaticMarkup } from "react-dom/server";
import { useContext } from "react";

import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import LanguageSwitch, {EnglishSVG, GermanSVG} from "./SymbolsSVG";
import { ThemeContext } from '../../contexts/theme'



const svgStringEnglish = encodeURIComponent(renderToStaticMarkup(<EnglishSVG />));
const svgStringGerman = encodeURIComponent(renderToStaticMarkup(<GermanSVG />));


 const MaterialUISwitch = styled(Switch)(({ theme }) => ({

    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
            backgroundImage: `url("data:image/svg+xml,${svgStringEnglish}")`
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme === 'dark' ? '#BDDDBD' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme === 'dark' ? '#90a0d9;' : '#555555',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("data:image/svg+xml,${svgStringGerman}")`
    },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

export default MaterialUISwitch