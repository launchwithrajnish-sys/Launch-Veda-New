import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://launchveda.com";
const APP_DIR = path.join(__dirname, "../src/app");
const PUBLIC_DIR = path.join(__dirname, "../public");

// Simple recursive function to find all page.tsx files
function getPageRoutes(dir: string, baseDir = APP_DIR): string[] {
  const routes: string[] = [];
  
  if (!fs.existsSync(dir)) return routes;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip api routes or specialized/private folders (starting with _) or route groups (starting with "(")
      if (file !== "api" && !file.startsWith("_")) {
        routes.push(...getPageRoutes(fullPath, baseDir));
      }
    } else if (file === "page.tsx" || file === "page.ts" || file === "page.js") {
      // Calculate relative path
      const relativePath = path.relative(baseDir, dir);
      
      // Convert to URL path
      let urlPath = relativePath.replace(/\\/g, "/");
      
      // Clean up parenthetical folders if any (e.g. (marketing)/about -> about)
      urlPath = urlPath.replace(/\([^)]+\)\//g, "");
      urlPath = urlPath.replace(/\([^)]+\)/g, ""); // if it maps directly to route
      
      routes.push(urlPath);
    }
  }
  
  return routes;
}

function generateSitemap() {
  console.log("Starting sitemap generation...");
  console.log(`App directory: ${APP_DIR}`);
  console.log(`Public directory: ${PUBLIC_DIR}`);
  
  const rawRoutes = getPageRoutes(APP_DIR);
  // Ensure we sort routes and filter out duplicates and empty/redundant parts
  const routes = Array.from(new Set(rawRoutes))
    .map(r => r.trim())
    .filter(r => r !== "api" && !r.includes("[")) // Filter out dynamic routes or API routes if any
    .sort();
  
  const today = new Date().toISOString().split("T")[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
  xml += `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n`;
  xml += `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;
  
  for (const route of routes) {
    const url = route === "" ? BASE_URL : `${BASE_URL}/${route}`;
    
    // Determine priority and change frequency based on the route
    let priority = "0.8";
    let changefreq = "weekly";
    
    if (route === "") {
      priority = "1.0";
      changefreq = "daily";
    } else if (route.startsWith("services")) {
      priority = "0.9";
      changefreq = "weekly";
    } else if (route === "contact" || route === "about") {
      priority = "0.7";
      changefreq = "monthly";
    } else if (route === "blog") {
      priority = "0.9";
      changefreq = "daily";
    }
    
    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }
  
  xml += `</urlset>\n`;
  
  // Ensure the public folder exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  
  const outputPath = path.join(PUBLIC_DIR, "sitemap.xml");
  fs.writeFileSync(outputPath, xml, "utf8");
  
  console.log(`\n✅ Sitemap successfully generated at: ${outputPath}`);
  console.log(`Generated ${routes.length} routes in total:`);
  routes.forEach(r => console.log(`  - ${r === "" ? "/" : "/" + r}`));
}

generateSitemap();
