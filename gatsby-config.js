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
    about: `Software developer with a background in Big Data Science and Computer Science. Experienced in Python for automation, data analysis, and machine learning—including automation bots, blockchain data pipelines, and facial emotion recognition. I enjoy finding efficient solutions, learning new tech, and working collaboratively to contribute to great products and services.`,
    email: "alex@santonastaso.com",
    phone: "+44 7570 280428",
    projects: [
      {
        name: 'Automated Facial Emotion Recognition',
        description: 'Deep learning pipeline for facial emotion recognition, benchmarked for robustness to image blur',
        link: 'https://github.com/snts42/facial-emotion-recognition',
      },
      {
        name: 'Ethereum Blockchain Analysis',
        description: 'Analysis of Ethereum transactions and smart contracts at scale with Hadoop and PySpark',
        link: 'https://github.com/snts42/ethereum-blockchain-analysis',
      },
      {
        name: 'Audio Classification with Machine Learning',
        description: 'Machine learning pipeline for audio classification using Python and scikit-learn',
        link: 'https://github.com/snts42/audio-ml-classifier',
      },
      {
        name: 'Portfolio Website',
        description: 'Responsive portfolio site built with GatsbyJS, React, and TailwindCSS',
        link: 'https://github.com/snts42/gatsby-portfolio-template',
      },
    ],
    experience: [
      {
        name: 'National Careers Service',
        description: ' Administrator / Software Automation, Jun 2024 - Present',
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
        name: 'Key Skills',
        description: 'Python, Java, SQL, React, Git, Data Analysis, Machine Learning, APIs, AWS, Docker',
      },
    ],
    certifications: [
      {
        name: 'AWS Certified Cloud Practitioner',
        description: 'In progress, June 2025 – Present',
        link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      },
      {
        name: 'GitHub Foundations Certification',
        description: 'In progress, June 2025 – Present',
        link: 'https://education.github.com/experiences/foundations_certificate', 
      },
      {
        name: 'NOCN Level 3 Award in Information, Advice & Guidance',
        description: '',
        link: 'https://www.nocn.org.uk/products/qualifications/600-0723-0-nocn-level-3-award-in-information-advice-or-guidance/',
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