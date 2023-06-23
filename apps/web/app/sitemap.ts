import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const Sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteConfig.url,
    lastModified: new Date(),
  },
];

export default Sitemap;
