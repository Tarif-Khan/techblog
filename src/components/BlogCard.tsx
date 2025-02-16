import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article 
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
    >
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <time className="text-gray-500 text-sm">{post.pubDate}</time>
        <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
        <p className="text-gray-600">{post.description}</p>
      </div>
    </article>
  );
}