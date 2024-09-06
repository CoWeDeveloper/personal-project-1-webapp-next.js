export default {
    siteUrl: process.env.SITE_URL || 'https://www.cloudtenants.com',
    generateRobotsTxt: true, // (optional) Generate `robots.txt`
    changefreq: 'daily', // Optional: change frequency
    priority: 0.7, // Optional: default priority for URLs
    sitemapSize: 5000, // Optional: split sitemap after N entries
    exclude: ['/admin/*'], // Optional: exclude specific paths
    transform: async (config, path) => {
      return {
        loc: path, // The `loc` attribute in the sitemap
        lastmod: new Date().toISOString(), // The `lastmod` attribute (dynamic)
        changefreq: 'weekly', // Change frequency for each page
        priority: path === '/' ? 1.0 : 0.7, // Custom priority for homepage
      };
    },
  };
  