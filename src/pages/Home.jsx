import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';
import '../styles/blog.css';

function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <img 
              src={post.image} 
              alt={post.title}
              className="blog-image"
            />
            <h2>
              <Link to={`/blog/${post.slug}`} className="blog-title">
                {post.title}
              </Link>
            </h2>
            <p className="blog-description">{post.description}</p>
            <div className="blog-date">
              {new Date(post.pubDate).toLocaleDateString()}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Home;