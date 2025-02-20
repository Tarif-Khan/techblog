export interface BlogPost {
  title: string;
  description: string;
  pubDate: string;
  image: string;
  content: string;
  video?: {
    url: string;
    caption: string;
  };
}