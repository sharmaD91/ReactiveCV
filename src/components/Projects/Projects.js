import uniqid from 'uniqid'
import { useTranslation } from 'react-i18next';
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'


const Projects = () => {

  const { i18n, t } = useTranslation();

  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>{t('NavProjects')}</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
