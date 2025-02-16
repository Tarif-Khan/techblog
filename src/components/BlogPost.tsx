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
    <article className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to all posts
      </button>
      
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      
      <time className="text-gray-500">{post.pubDate}</time>
      <h1 className="text-4xl font-bold mt-4 mb-6">{post.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{post.description}</p>
      
      <div className="prose prose-lg max-w-none">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-6 text-gray-800 leading-relaxed">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </article>
  );
}