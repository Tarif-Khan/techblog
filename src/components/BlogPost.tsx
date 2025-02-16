import { BlogPost as BlogPostType } from '../types';
import { ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export default function BlogPost({ post, onBack }: BlogPostProps) {
  // Split content by \n and filter out empty strings
  const paragraphs = post.content
    .split('\n')
    .filter(para => para.trim().length > 0);

  return (
    <article className="blog-post">
      <button onClick={onBack} className="back-button">
        <ArrowLeft size={20} className="back-button-icon" />
        Back to all posts
      </button>
      
      <img 
        src={post.image} 
        alt={post.title}
        className="blog-post-image"
      />
      
      <time className="blog-post-date">{post.pubDate}</time>
      <h1 className="blog-post-title">{post.title}</h1>
      <p className="blog-post-description">{post.description}</p>
      
      <div className="prose">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="prose-paragraph">
            {paragraph.trim()}
          </p>
        ))}
      </div>

      {post.video && (
        <div className="video-container">
          <iframe
            width="100%"
            height="480"
            src={post.video.url}
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="video-caption">{post.video.caption}</p>
        </div>
      )}
    </article>
  );
}