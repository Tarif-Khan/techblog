import { useState } from 'react';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import BlogPost from './components/BlogPost';
import { posts } from './data/posts';
import { BlogPost as BlogPostType } from './types';

function App() {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container">
        {selectedPost ? (
          <BlogPost 
            post={selectedPost} 
            onBack={() => setSelectedPost(null)} 
          />
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard
                key={post.title}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;