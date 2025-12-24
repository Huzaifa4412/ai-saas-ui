export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: "/private/",
            },
        ],
        sitemap: "https://syenxatech.com/sitemap.xml",
    };
}
