module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "http://melvinkusters.com//", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/m_logo.png", // Path is relative to the root
          siteName: "Melvin's Portfolio", // Used in manifest.json
          shortName: "Melvin Kusters", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    {
      resolve: `gatsby-plugin-realfavicongenerator`,
      options: {
        apiKey: '63cee9c53a05fc0cf73e6461d02368921d380a77',
        masterPicture: 'content/images/m_logo.png',
        appName: 'Melvin Kusters - Portfolio',
        startUrl: '/',
        themeColor: '#000',
        display: 'standalone',
        defaultBackgroundColor: '#000',
        defaultMargin: '10%',
        compression: 3,
        scalingAlgorithm: 'Lanczos',
        ios: {
          enabled: true,
          onlyDefaultIcons: false,
          legacyIcons: true,
          precomposedIcons: true,
        },
        windows: {
          enabled: true,
          silhouette: true,
        },
        android: {
          enabled: true,
          legacyIcons: true,
          lowResIcons: true,
        },
        safariPinnedTab: {
          enabled: true,
          threshold: 60,
          silhouette: true,
        },
        openGraph: {
          enabled: true,
          ratio: 'square',
        },
        transformGeneratedManifest: (manifest) => {
          manifest.scope = '/';
          if (manifest.icons) {
            manifest.icons = manifest.icons.map((icon) => {
              return {
                ...icon,
                purpose: 'maskable',
              };
            });
          }

          return manifest;
        },
      },
    }
  ],
};
