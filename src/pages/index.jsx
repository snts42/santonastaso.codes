import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/Header';
import SectionAbout from '../components/section-about';
import SectionProjects from '../components/section-projects';
import SectionExperience from '../components/section-experience';
import SectionSkills from '../components/section-skills';
import SectionCertifications from '../components/section-certifications';
import SectionContact from '../components/section-contact';
import Seo from '../components/Seo';

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          description
          github
          linkedin
          resume
          about
          email
          phone
          projects {
            name
            description
            link
          }
          experience {
            name
            description
            link
          }
          skills {
            name
            description
          }
          certifications {
            name
            description
            link
          }
        }
      }
    }
  `);

  const metadata = site.siteMetadata;

  return (
    <Layout>
      <Seo title="" />
      <Header metadata={metadata} />
      <SectionAbout about={metadata.about} />
      <SectionProjects projects={metadata.projects} />
      <SectionExperience experience={metadata.experience} />
      <SectionSkills skills={metadata.skills} />
      <SectionCertifications certifications={metadata.certifications} />
      <SectionContact email={metadata.email} phone={metadata.phone} />
    </Layout>
  );
};

export default IndexPage;