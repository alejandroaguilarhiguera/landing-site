import Link from 'next/link';
import { Post } from '@/types';
import { formatDate } from '@/utils';
import TagBadge from '@/components/TagBadge';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {post.title}
          </h2>
          <svg
            className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
 
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
 
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 shrink-0">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime} min</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;