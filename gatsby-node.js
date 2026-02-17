exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      siteUrl: String
      name: String
      title: String
      description: String
      author: String
      github: String
      linkedin: String
      resume: String
      email: String
      about: String
      projects: [SectionItem]
      experience: [SectionItem]
      skills: [SectionItem]
      certifications: [SectionItem]
    }

    type SectionItem {
      name: String!
      description: String!
      link: String
      featured: Boolean
      sameTab: Boolean
    }
  `;
  createTypes(typeDefs);
};