import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/Header';
import Section from '../components/section';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          description
          github
          linkedin
          resume
          email
          phone
        }
      }
    }
  `);

  const metadata = site.siteMetadata;

  return (
    <Layout>
      <Header metadata={metadata} />
      <Section title="Page Not Found" contentDelay="animate-fade-in-up-delay-100">
        <div>
          <p className="text-lg font-display font-light mb-8 text-gray-600 dark:text-gray-400">
            You just hit a route that doesn't exist.
          </p>
          <Link 
            to="/"
            className="inline-block text-gray-900 dark:text-gray-100 hover:!text-cyan-400 transition-colors underline focus:outline-none focus:ring-2 focus:ring-cyan-400 font-display font-medium"
          >
            Return to portfolio
          </Link>
        </div>
      </Section>
    </Layout>
  );
}

// Gatsby Head API function for SEO
export function Head() {
  return (
    <Seo 
      title="Page Not Found" 
      description="The requested page could not be found. Return to Alex Santonastaso's developer portfolio homepage."
      pathname="/404/"
      keywords="404, page not found, Alex Santonastaso"
    />
  );
}
