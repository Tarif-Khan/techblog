import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/posts';
import '../styles/blog.css';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="blog-content">
      <img 
        src={post.image}
        alt={post.title}
        className="blog-header-image"
      />
      <h1>{post.title}</h1>
      <div className="blog-meta">
        <time dateTime={post.pubDate}>
          {new Date(post.pubDate).toLocaleDateString()}
        </time>
        <span>•</span>
        <span>{post.author}</span>
      </div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default BlogPost;