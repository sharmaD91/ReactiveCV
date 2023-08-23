import { useContext, useState , useEffect} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTranslation } from "react-i18next";

import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import MaterialUISwitch from '../CustomComponents/LanguageSwitch'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'



const Navbar = () => {
  const { i18n, t } = useTranslation();

  const [checked, setChecked] = useState(false)
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const toggleNavList = () => setShowNavList(!showNavList)

  useEffect(() => {
    if (checked===true){
      i18n.changeLanguage('en')
    }
    else{
      i18n.changeLanguage('de') 
    }
  }, [checked]);

  const onChangeLang = (event) => {
    setChecked(event.target.checked)
  };
  
  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {t("NavProjects")}
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {t("NavSkills")}
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {t("NavContact")}
            </a>
          </li>
        ) : null}
          
      </ul>

      <FormControlLabel
        control={<MaterialUISwitch checked={checked} theme={themeName} onChange={onChangeLang} />}
      />

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <FlashlightOffIcon /> : <FlashlightOnIcon />}
      
      </button>


      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
