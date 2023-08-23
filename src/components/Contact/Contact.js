import { useTranslation } from 'react-i18next';
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null
  const { i18n, t } = useTranslation();

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>{t('NavContact')}</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email
        </span>
      </a>
    </section>
  )
}

export default Contact
