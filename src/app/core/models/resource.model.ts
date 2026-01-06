export interface ResourceLink {
  label: string;
  url: string;
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  content: string;
  categoryId: string;
  userId: number;
  views: number;
  isPublic: boolean;
  createdAt: string;
  links: ResourceLink[];
}
