module.exports = {
  siteMetadata: {
    siteUrl: `https://santonastaso.codes/`,
    name: 'Alex Santonastaso',
    title: `Alex Santonastaso | Developer Portfolio`,
    description: `Powered by code, caffeine, and curiosity`,
    author: `Alex`,
    github: `https://github.com/snts42`,
    linkedin: `https://www.linkedin.com/in/alex-santonastaso/`,
    resume: "/Alex-Santonastaso-CV.pdf",
    about: `Software Engineer with a background in Computer Science and Big Data Science. Experienced in building automation tools, data pipelines, and machine learning models using Python. I have a good understanding of APIs and cloud services, and I’m quick to learn new technologies on the job. I enjoy solving real world problems through efficient, maintainable code and collaborating to build great products and services.`,
    email: "alex@santonastaso.com",
    phone: "+44 7570 280428",
    projects: [
      {
        name: 'Evolve Results Automation',
        description: 'Automates the retrieval and export of candidate results from the City & Guilds Evolve platform using Python',
        link: 'https://github.com/snts42/evolve-results-automation',
      },
      {
        name: 'Automated Facial Emotion Recognition',
        description: 'Deep learning pipeline for facial emotion recognition, benchmarked for robustness to image blur',
        link: 'https://github.com/snts42/facial-emotion-recognition',
      },
      {
        name: 'Ethereum Blockchain Analysis',
        description: 'Big data analysis of Ethereum transactions and smart contracts at scale with Hadoop and PySpark',
        link: 'https://github.com/snts42/ethereum-blockchain-analysis',
      },
      {
        name: 'XMRig-Zero',
        description: 'CD pipeline that builds zero-fee XMRig binaries for Windows, Linux, and macOS using GitHub Actions',
        link: 'https://github.com/snts42/xmrig-zero',
      },
      {
        name: 'Audio Classification with Machine Learning',
        description: 'Machine learning pipeline for audio classification using Python and scikit-learn',
        link: 'https://github.com/snts42/audio-ml-classifier',
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
        description: 'Python Automation Engineer, Jun 2024 - Present',
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
        description: 'Python, Java, SQL, Git',
      },
      {
        name: 'Backend & Automation',
        description: 'Selenium, OpenPyXL, Pandas, REST APIs, Email Automation (SMTP)',
      },
      {
        name: 'Web & Frontend',
        description: 'React, HTML, CSS',
      },
      {
        name: 'Cloud & DevOps',
        description: 'GitHub Actions, Docker, AWS',
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
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-2DED0V7CD4", // Your GA4 Measurement ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Santonastaso`,
        short_name: `snts42`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#009ae4`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}