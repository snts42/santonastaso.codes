const adapter = require("gatsby-adapter-netlify").default

module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
  siteMetadata: {
    siteUrl: `https://santonastaso.codes/`,
    name: 'Alex Santonastaso',
    title: `Alex Santonastaso - Software Engineer`,
    description: `Software Engineer · Python · Cloud · Full-Stack`,
    author: `Alex Santonastaso`,
    keywords: `Alex Santonastaso, software engineer, developer, portfolio, Python, automation, web development, React, Gatsby, computer science, data science, AWS, Terraform, FastAPI`,
    github: `https://github.com/snts42`,
    linkedin: `https://www.linkedin.com/in/alex-santonastaso/`,
    resume: "/Alex-Santonastaso-CV.pdf",
    about: `Software Engineer with a background in Computer Science and Big Data Science. Experienced in building automation tools, web applications, and cloud infrastructure using Python and modern frameworks. I have a strong understanding of APIs, cloud services, and DevOps practices. I enjoy solving real world problems through efficient, maintainable code.`,
    email: "alex@santonastaso.com",
    projects: [
      {
        name: 'Secure File Sharing',
        description: 'Full-stack web application built with FastAPI, Gatsby, AWS, and Terraform',
        link: 'https://files.santonastaso.codes',
        featured: true,
        sameTab: true,
      },
      {
        name: 'E-volve Results Automation',
        description: 'Automates the retrieval and export of exam results using Python',
        link: 'https://github.com/snts42/evolve-results-automation',
      },
      {
        name: 'Automated Facial Emotion Recognition',
        description: 'Deep learning pipeline benchmarked for robustness to image blur',
        link: '/Santonastaso_MSc_Dissertation_Facial_Emotion_Recognition.pdf',
      },
      {
        name: 'Portfolio Website',
        description: 'Responsive portfolio site built with GatsbyJS, React, and TailwindCSS',
        link: 'https://github.com/snts42/santonastaso.codes',
      },
    ],
    experience: [
      {
        name: 'National Careers Service',
        description: 'Software Developer, Jun 2024 - Present',
        link: 'https://nationalcareers.service.gov.uk/',
      },
      {
        name: 'Queen Mary University of London',
        description: 'Lab Demonstrator, Oct 2023 - Apr 2024',
        link: 'https://www.qmul.ac.uk/',
      },
    ],
    skills: [
      {
        name: 'Languages & Tools',
        description: 'Python, JavaScript, Java, SQL, Git',
      },
      {
        name: 'Backend & APIs',
        description: 'FastAPI, REST, Selenium, OpenPyXL, Pandas, Email Automation',
      },
      {
        name: 'Frontend & Web',
        description: 'React, Gatsby, HTML, CSS, TailwindCSS',
      },
      {
        name: 'Cloud & Infrastructure',
        description: 'AWS, Terraform, GitHub Actions, Docker, CI/CD',
      },
    ],
    certifications: [
      {
        name: 'AWS Certified Cloud Practitioner',
        description: 'In progress',
        link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      },
      {
        name: 'GitHub Foundations Certification',
        description: 'Jun 2025',
        link: 'https://www.credly.com/badges/a118c3e7-f2b4-4da2-91d4-60750ff091db/linked_in?t=sy0qai', 
      },
      {
        name: 'Scrum Fundamentals Certified',
        description: 'Jun 2025',
        link: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=1085847', 
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/404/`, `/404.html`, `/dev-404-page/`],
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          const isHome = path === '/';
          return {
            url: path,
            priority: isHome ? 1.0 : 0.5,
            changefreq: isHome ? 'weekly' : 'monthly',
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://santonastaso.codes`,
        sitemap: `https://santonastaso.codes/sitemap-index.xml`,
        policy: [
          {
            userAgent: `*`,
            allow: `/`,
            disallow: [`/404/`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-2DED0V7CD4", // Google Analytics 4 property ID
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Santonastaso - Software Engineer`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#06b6d4`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
        legacy: false,
      },
    },
  ],
}
