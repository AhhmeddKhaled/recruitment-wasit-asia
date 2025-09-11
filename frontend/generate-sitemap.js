import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';
import path from 'node:path';

// روابط الصفحات
const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: encodeURI('/طلب_إستقدام'), changefreq: 'weekly', priority: 0.8 },
  { url: encodeURI('/نقل_خدمات'), changefreq: 'weekly', priority: 0.8 },
  { url: '/عن_الإستقدام', changefreq: 'weekly', priority: 0.8 },
  { url: '/وصول_العمالة', changefreq: 'weekly', priority: 0.8 },
  { url: '/إختيار_العمالة', changefreq: 'weekly', priority: 0.8 },
  { url: '/عنسياسات_الإستقدام_الإستقدام', changefreq: 'weekly', priority: 0.8 },
  { url: '/عن_الإستقدام', changefreq: 'weekly', priority: 0.8 },
  { url: '/articals', changefreq: 'weekly', priority: 0.8 },
  { url: '/تواصل_معنا', changefreq: 'weekly', priority: 0.8 },
  { url: '/خدمة_العملاء', changefreq: 'weekly', priority: 0.8 },
];

// توليد السايت ماب
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
