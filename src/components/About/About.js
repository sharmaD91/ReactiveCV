import { useTranslation } from "react-i18next";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { i18n, t } = useTranslation();

  const { name, role, description, resume, social } = about

  // i18n.changeLanguage('en');

  return (
    <div className='about center'>
      {name && (
        <h1>
          {name}
        </h1>
      )}

      {role && <h2 className='about__role'>{t("role")}.</h2>}
      <p className='about__desc'>{t("description")}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
            {t("resume")}
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
