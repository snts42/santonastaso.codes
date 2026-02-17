import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          name
          title
          description
          author
          keywords
          github
          linkedin
          resume
          about
          email
        }
      }
    }
  `);

  return site.siteMetadata;
};
