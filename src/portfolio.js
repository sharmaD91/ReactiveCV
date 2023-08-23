
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://sharmad91.github.io/',
  title: 'DS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'David Sharma',
  role: 'Full Stack Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/david-sharma-163556113/',
    github: 'https://github.com/sharmad91',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'project1Name',
    description:
      'project1Description',
    stack: ['Python', 'Java', 'GCloud, RASA','React'],
    sourceCode: 'https://github.com',
    livePreview: 'http://dave-chatbot.de',
  },
  {
    name: 'project2Name',
    description:
      'project2Description',
    stack: ['HTML', 'CSS'],
    livePreview: 'http://pizza-fontana.de',
  },
  {
    name: 'project3Name',
    description:
      'project3Description',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'Spring',
  'OpenShift',
  'Azure',
  'React',
  'Redux',
  'GCloud',
  'Git',
  'TeamCity',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  email: 'mail@david-sharma.de',
}

export { header, about, projects, skills, contact }
