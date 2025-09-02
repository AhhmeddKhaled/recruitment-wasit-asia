const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// اكتب روابط صفحاتك هنا
const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/طلب_إستقدام', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  // أضف أي صفحات أخرى هنا
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://wasit-asia.netlify.app' });
  const writeStream = createWriteStream(path.resolve('./public/sitemap.xml'));
  sitemap.pipe(writeStream);

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
