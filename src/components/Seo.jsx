import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Seo = ({ title, description, pathname, keywords, image }) => {
  const metadata = useSiteMetadata();

  // Determine the appropriate title and description
  const seoTitle = title ? `${title} - ${metadata.author}` : metadata.title;
  const seoDescription = description || metadata.description;
  const seoKeywords = keywords || "Alex Santonastaso, software engineer, developer, portfolio, Python, automation, web development, React, Gatsby, computer science, data science";

  const seo = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    url: `${metadata.siteUrl}${pathname || ``}`,
    // No image for social media sharing
  };

  // Structured data for the organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": metadata.author,
    "url": metadata.siteUrl,
    "sameAs": [
      metadata.github,
      metadata.linkedin,
    ]
  };

  // Structured data for the website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": metadata.title,
    "url": metadata.siteUrl,
    "description": metadata.description,
    "author": {
      "@type": "Person",
      "name": metadata.author
    }
  };

  // Structured data for portfolio (if on homepage)
  const portfolioSchema = !pathname || pathname === '/' ? {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": `${metadata.author} - Developer Portfolio`,
    "description": metadata.description,
    "url": metadata.siteUrl,
    "mainEntity": {
      "@type": "Person",
      "name": metadata.author,
      "jobTitle": "Software Engineer",
      "url": metadata.siteUrl,
      "sameAs": [
        metadata.github,
        metadata.linkedin
      ]
    }
  } : null;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={metadata.author} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Language and Locale */}
      <html lang="en" />
      <meta name="language" content="English" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {portfolioSchema && (
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      )}
    </>
  );
};

export default Seo;
