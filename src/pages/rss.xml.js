import rss from '@astrojs/rss';
import { blogPosts } from '../data/blog';

export function GET(context) {
  return rss({
    title: 'Greens Farmhouse Blog',
    description: 'Expert guides, buying tips, and industry insights for CBD retailers and wholesalers in Europe.',
    site: context.site,
    items: blogPosts.map(post => ({
      title: post.title,
      description: post.excerpt,
      pubDate: new Date(post.date),
      link: `/blog/${post.slug}/`,
      categories: [post.category],
    })),
    customData: `<language>en</language>`,
  });
}
