import { TiSocialFacebook, TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import { DiHtml5, DiCss3, DiSass, DiJsBadge, DiReact, DiGit} from 'react-icons/di'
import { SiStyledComponents, SiNextDotJs } from "react-icons/si";
import { FiFramer, FiInstagram, FiFigma } from "react-icons/fi";
import { educasia, inhouse, mjnextjs, islakape } from '../src/projectsSS'



export const MenuItemsLinks = [
    {
        title: 'About',
        url: '/#about'
    },
    {
        title: 'Projects',
        url: '/#projects'
    },
    {
        title: 'Contact',
        url: '/#contact'
    },

]

export const FloatingSocmed = [
  {
    id: 'facebook',
    href: 'https://www.facebook.com/melvinbilbao08',
    Icon: TiSocialFacebook
  },
  {
    id: 'linkedin',
    href: '',
    Icon: TiSocialLinkedin
  },

  {
    id: 'github',
    href: 'https://github.com/melvinbilbao08',
    Icon: TiSocialGithub
  }
]

export const Skills = [
    {
      id: 'html',
      name: 'HTML5',
      Icon: DiHtml5
    },
    {
      id: 'css',
      name: 'CSS3',
      Icon: DiCss3
    },
    {
      id: 'sass',
      name: 'Sass',
      Icon: DiSass
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      Icon: DiJsBadge
    },
    {
      id: 'react',
      name: 'React.js',
      Icon: DiReact
    },
    {
        id: 'next',
        name: 'Next.js',
        Icon: SiNextDotJs
      },
    {
      id: 'git',
      name: 'Git',
      Icon: DiGit
    },
    {
      id: 'styledcomponents',
      name: 'Styled Components',
      Icon: SiStyledComponents
    },
    {
      id: 'framer',
      name: 'Framer Motion',
      Icon: FiFramer
    },
    {
      id: 'figma',
      name: 'Figma',
      Icon: FiFigma
    }
  ];

export const Projects = [
  {
    title: 'EDUCASIA',
    image: educasia,
    alt: 'Landing page and Home page of Educasia',
    info: 'A mobile based Learning App in History of Asia.',
    techs: ['Java', 'PHP', 'MySQL'],
    links: {
      demo: '',
      github: '',
    },
  },
  {
    title: 'inHouse Corp.',
    image: inhouse,
    alt: 'inHouse Corp Website',
    info: 'A simple real-estate website design',
    techs: ['React.js', 'Sass', 'Framer Motion'],
    links: {
      demo: 'https://inhouse-corp.netlify.app/',
      github: 'https://github.com/melvinbilbao08/inhouse-reactjs',
    },
  },
  {
    title: 'MJ Portfolio',
    image: mjnextjs,
    alt: 'Personal Website',
    info: 'My minimalist portfolio website',
    techs: ['React.js', 'Next.js', 'Styled Components','Framer Motion'],
    links: {
      demo: 'https://melvinportfolio.netlify.app',
      github: 'https://github.com/melvinbilbao08/mjnextjs',
    },
  },
  {
    title: 'Isla Kape',
    image: islakape,
    alt: 'Isla Kape Website',
    info: 'A simple coffee shop website UI',
    techs: ['React.js', 'Next.js', 'Styled Components', 'Framer Motion'],
    links: {
      demo: '',
      github: '',
    },
  },
];

export const footerSocmed = [
  {
    name: 'facebook',
    href: 'https://www.facebook.com/melvinbilbao08',
    Icon: TiSocialFacebook
  },
  {
    name: 'instagram',
    href: '',
    Icon: FiInstagram
  },
  {
    name: 'linkedin',
    href: '',
    Icon: TiSocialLinkedin
  },

  {
    name: 'github',
    href: 'https://github.com/melvinbilbao08',
    Icon: TiSocialGithub
  }
]