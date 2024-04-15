module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://santonastaso.tech/`,
    // Your Name
    name: 'Alex Santonastaso',
    // Main Site Title
    title: `Alex Santonastaso | Computer Scientist`,
    // Description that goes under your name in main bio
    description: `Computer Scientist based in London.`,
    // Optional: Twitter account handle
    author: `Alex`,
    // Optional: Github account URL
    github: `https://github.com/alex-s00`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alex-santonastaso/`,
    // Content of the About Me section
    about: `Tech enthusiast. With a Master's in Big Data Science and a Bachelor's in Computer science, I developed my skills in domains such as software development, deep learning, cloud computing. I'm also passionate about open-source contributions, working in high impact environments, and helping development teams grow and build great products.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Facial emotion recognition',
        description:
          'Kit to start a Deep Learning Model for facial emotion recognition',
        link: 'https://github.com/alex-s00/Facial-emotion-recognition',
      },
      {
        name: 'Ethereum Blockchain Analysis',
        description:
          'Analysis of Ethereum Transactions and Smart Contracts using Apache Hadoop',
        link: 'https://github.com/alex-s00/ethereum-analysis',
      },
      {
        name: 'Audio classification using Machine Learning',
        description:
          'A Machine Learning pipeline that takes as input an audio file and predicts its song label',
        link: 'https://github.com/alex-s00/ml-mini-project',
      },
      {
        name: 'Web portfolio',
        description:
          'Personal portfolio built with React on GatsbyJS and TailwindCSS',
        link: 'https://github.com/alex-s00/santonastaso.tech',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Queen Mary University of London',
        description: 'Teaching Assistant, October 2023 - April 2024',
        link: 'https://www.qmul.ac.uk/postgraduate/taught/coursefinder/courses/big-data-science-msc/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Java, C#, SQL, R, NumPy, Pandas, Pytorch, Tensorflow, PySpark, matplotlib',
      },
      {
        name: 'Developer Tools',
        description: 'Jupyter Notebook, VS Code, Git, MS Office, Google Cloud Platform, AWS',
      },
      {
        name: 'Other',
        description:
          'Docker, CI / CD, API design, Agile / Scrum',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#009ae4`,
        theme_color: `#009ae4`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
