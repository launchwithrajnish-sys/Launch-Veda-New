"use client";

import React from "react";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceSEO {
  name: string;
  description: string;
  providerName?: string;
  providerUrl?: string;
}

export interface OrganizationSEO {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  email?: string;
  telephone?: string;
  legalName?: string;
  addressCountry?: string;
  sameAs?: string[];
}

export interface ArticleSEO {
  headline: string;
  image: string;
  datePublished: string;
  dateModified: string;
  description: string;
  authorName?: string;
}

export interface SEOManagerProps {
  title: string;
  description: string;
  canonical: string;
  
  // Open Graph
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  
  // Twitter
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  
  // Robots
  noindex?: boolean;
  
  // Structured Schemas
  breadcrumb?: BreadcrumbItem[];
  faq?: FAQItem[];
  service?: ServiceSEO;
  article?: ArticleSEO;
  organization?: OrganizationSEO;
  customSchemas?: object[];
}

export default function SEOManager({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://launchveda.com/background_image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  noindex = false,
  breadcrumb,
  faq,
  service,
  article,
  organization,
  customSchemas = [],
}: SEOManagerProps) {
  // Compute site title template "Page Title | LaunchVeda"
  const formattedTitle = title.includes("LaunchVeda") ? title : `${title} | LaunchVeda`;
  const siteUrl = "https://launchveda.com";
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const defaultLogo = `${siteUrl}/logo-full.png`;
  const canonicalId = canonical.includes("#") ? canonical : `${canonical}#webpage`;

  // Dynamic schema generation list
  const renderedSchemas: object[] = [];

  renderedSchemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalId,
    "url": canonical,
    "name": formattedTitle,
    "description": description,
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "@id": websiteId,
      "url": siteUrl,
      "name": "LaunchVeda",
      "publisher": {
        "@id": organizationId,
      },
    },
    "about": {
      "@id": organizationId,
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": ogImage,
    },
  });

  // Generate Breadcrumb schema automatically for all pages
  let finalBreadcrumbs = breadcrumb;

  if (!finalBreadcrumbs || finalBreadcrumbs.length === 0) {
    try {
      let urlString = canonical || "https://launchveda.com";
      if (!urlString.startsWith("http://") && !urlString.startsWith("https://")) {
        urlString = `https://launchveda.com${urlString.startsWith("/") ? "" : "/"}${urlString}`;
      }
      
      const url = new URL(urlString);
      const origin = url.origin;
      const pathSegments = url.pathname.split("/").filter(Boolean);
      
      const dynamicItems: BreadcrumbItem[] = [
        { name: "Home", item: origin }
      ];

      let currentPath = origin;
      pathSegments.forEach((segment) => {
        currentPath += `/${segment}`;
        
        // Convert slug to friendly title (e.g. "manufacturing-support" -> "Manufacturing Support")
        const friendlyName = segment
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
          
        dynamicItems.push({
          name: friendlyName,
          item: currentPath
        });
      });

      finalBreadcrumbs = dynamicItems;
    } catch (e) {
      finalBreadcrumbs = [{ name: "Home", item: "https://launchveda.com" }];
    }
  }

  if (finalBreadcrumbs && finalBreadcrumbs.length > 0) {
    renderedSchemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": finalBreadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.item,
      })),
    });
  }

  // Generate FAQ schema
  if (faq && faq.length > 0) {
    renderedSchemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a,
        },
      })),
    });
  }

  // Generate Service schema
  if (service) {
    renderedSchemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonical}#service`,
      "name": service.name,
      "serviceType": service.name,
      "category": "Product launch consulting and execution",
      "provider": {
        "@type": "Organization",
        "@id": organizationId,
        "name": service.providerName || "LaunchVeda",
        "url": service.providerUrl || "https://launchveda.com",
      },
      "areaServed": {
        "@type": "Country",
        "name": "India",
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Founders, startups, product businesses, D2C brands and creators launching physical product brands",
      },
      "description": service.description,
      "url": canonical,
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": canonical,
        "availableLanguage": ["en-IN", "hi-IN"],
      },
    });
  }

  // Generate Article schema
  if (article) {
    renderedSchemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "image": article.image,
      "author": {
        "@type": "Organization",
        "name": article.authorName || "LaunchVeda",
        "url": "https://launchveda.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "LaunchVeda",
        "@id": organizationId,
        "logo": {
          "@type": "ImageObject",
          "url": defaultLogo,
        },
      },
      "datePublished": article.datePublished,
      "dateModified": article.dateModified,
      "description": article.description,
    });
  }

  // Generate Organization schema
  if (organization) {
    const orgSchema: any = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      "name": organization.name,
      "legalName": organization.legalName || "LaunchVeda - A unit of Banega Brand Co.",
      "url": organization.url,
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
        },
      },
      "knowsAbout": [
        "Product launch strategy",
        "Brand strategy",
        "Product formulation",
        "Manufacturing support",
        "Packaging and labeling",
        "Legal and compliance direction",
        "Marketplace launch",
        "D2C website development",
        "Advanced growth marketing",
        "Perfume brand launch",
        "Ayurveda brand launch",
        "Cosmetic brand launch",
        "Nutraceutical brand launch",
      ],
    };
    if (organization.logo) {
      orgSchema.logo = organization.logo;
    } else {
      orgSchema.logo = defaultLogo;
    }
    orgSchema.description = organization.description || "Launch Veda is India’s No.1 Product Launch Company helping founders launch Perfume, Cosmetic, Ayurveda, and Nutraceutical brands with end-to-end support.";
    if (organization.sameAs && organization.sameAs.length > 0) {
      orgSchema.sameAs = organization.sameAs;
    }
    if (organization.email || organization.addressCountry) {
      if (organization.email) {
        orgSchema.contactPoint = {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": organization.email,
          ...(organization.telephone ? { telephone: organization.telephone } : {}),
          "availableLanguage": ["English", "Hindi"],
        };
      }
      if (organization.addressCountry) {
        orgSchema.address = {
          "@type": "PostalAddress",
          "addressCountry": organization.addressCountry,
        };
      }
    }
    renderedSchemas.push(orgSchema);
  }

  // Add any custom schemas
  if (customSchemas && customSchemas.length > 0) {
    renderedSchemas.push(...customSchemas);
  }

  return (
    <>
      {/* Head Metadata elements - React 19 / Next.js hoists these to document head automatically */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="application-name" content="LaunchVeda" />
      <meta name="author" content="LaunchVeda" />
      <meta name="publisher" content="LaunchVeda" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="LaunchVeda" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      
      {/* Robots Tags */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* JSON-LD Schemas */}
      {renderedSchemas.map((schema, index) => (
        <script
          key={`seo-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
