import type { Metadata } from "next";
import { Suspense } from 'react';
import { Inter } from "next/font/google";
import NavbarServer from "@/components/NavbarServer";
import Footer from "./footer";
import Loading from "@/app/loading";
import MoveToTop from "./moveToTop";
import "./globals.css";

import Script from "next/script";
import Head from "next/head";
import metaImg from "../../public/assets/images/metaLogoImg.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cloud Tenants - Sales & Distribution and ERP Solutions Provider",
    template: "%s - Cloud Tenants",
  },
  description: "Cloud Tenants offers Mobile applications and Web-based solutions. We specialize in Sales and Distribution, POS, and ERP Modules. Book A Demo Now.",
  
  openGraph: {
    title: 'Cloud Tenants - Sales & Distribution and ERP Solutions Provider',
    description: 'Cloud Tenants offers Mobile applications and Web-based solutions. We specialize in <b>Sales and Distribution, POS, and ERP Modules. Book A Demo Now.',
    url: 'https://www.cloudtenants.com',
    siteName: 'cloudtenants',
    images: [
      {
        url: metaImg.src, // Dynamic og route
        width: 800,
        height: 600,
        alt: 'Cloud tenants logo',
      },
      {
        url: metaImg.src, // Dynamic og route
        width: 1800,
        height: 1600,
        alt: 'Cloud tenants logo',
      },
    ],
    type: 'website',
  },
};

const schemaWebsite = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Cloud tenants",
  "url": "https://www.cloudtenants.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.cloudtenants.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cloud Tenants",
  "url": "https://www.cloudtenants.com/",
  "logo": "https://www.cloudtenants.com/assets/ctwhitelogo.png",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61555327557192",
    "https://twitter.com/TenantsCloud",
    "https://www.instagram.com/cloudtenants/",
    "https://www.youtube.com/@CloudTenants",
    "https://www.linkedin.com/company/cloud-tenants-pvt-ltd/",
    "https://www.cloudtenants.com/"
  ]
};

const schemaBreadcrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "About us",
      "item": "https://www.cloudtenants.com/about"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Softwares",
      "item": "https://www.cloudtenants.com/softwares"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Request a Demo",
      "item": "https://www.cloudtenants.com/demo"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact Us",
      "item": "https://www.cloudtenants.com/networks"
    }
  ]
};

const schemaBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cloud Tenants - Sales & Distribution and ERP Solutions Provider",
  "image": "https://www.cloudtenants.com/assets/ctwhitelogo.png",
  "@id": "",
  "url": "https://www.cloudtenants.com/",
  "telephone": "+922134971995",
  "priceRange": "Contact Us for price range",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite No B-5/4, FL-9/6 (Junaid Plaza), Gulshan-E-Iqbal Block 6, Main Rashid Minhas Road",
    "addressLocality": "Karachi",
    "postalCode": "75300",
    "addressCountry": "PK"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  } 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 <Head>
 <Script async src="https://www.googletagmanager.com/gtag/js?id=G-S8WH9ZYXKL"></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S8WH9ZYXKL');
            `,
          }}
        />
 </Head>
      <body className={inter.className}>
        <section className="m-0 p-0 scroll-smooth box-border">
          <NavbarServer />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <MoveToTop />
          <Footer />
        </section>
  
        {/* Rendering schema markup  */}
        <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />
       <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
        />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBusiness) }}
        />
      </body>
    
    </html>

  );
}
