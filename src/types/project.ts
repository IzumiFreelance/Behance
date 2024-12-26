export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  category: Category;
  tags: string[];
  creator: Creator;
  likes: number;
  views: number;
  createdAt: string;
}

export interface Creator {
  id: string;
  name: string;
  avatar: string;
  role: string;
  location: string;
}

export type Category = 
  | 'ui-design'
  | 'graphic-design'
  | 'web-development'
  | 'illustration'
  | 'photography'
  | '3d-art';