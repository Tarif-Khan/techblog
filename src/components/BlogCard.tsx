import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article onClick={onClick} className="blog-card">
      <img 
        src={post.image} 
        alt={post.title}
        className="blog-card-image"
      />
      <div className="blog-card-content">
        <time className="blog-card-date">{post.pubDate}</time>
        <h2 className="blog-card-title">{post.title}</h2>
        <p className="blog-card-description">{post.description}</p>
      </div>
    </article>
  );
}