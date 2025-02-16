import { useState } from 'react';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import BlogPost from './components/BlogPost';
import { posts } from './data/posts';
import { BlogPost as BlogPostType } from './types';

function App() {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {selectedPost ? (
          <BlogPost 
            post={selectedPost} 
            onBack={() => setSelectedPost(null)} 
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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