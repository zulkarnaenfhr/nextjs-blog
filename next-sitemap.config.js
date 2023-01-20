const date = new Date();

const config = {
    siteUrl: "http://localhost:3000/",
    generateIndexSitemap: false,
    lastmod: date.toISOString().slice(0, 10),
    priority: 1,
    alternateRefs: [
        {
            href: "http://localhost:3000",
            hreflang: "id",
        },
        {
            href: "http://localhost:3000/en",
            hreflang: "en",
        },
    ],
};

export default config;
