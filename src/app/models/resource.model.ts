export interface Resource {
  id: number;
  title: string;
  description: string;
  content: string;
  contentType: ContentType;
  categoryId: string;
  userId: number;
  createdAt: string;
}

export type ContentType =
  | 'text'
  | 'html'
  | 'xml'
  | 'css'
  | 'javascript'
  | 'c'
  | 'csharp'
  | 'cpp'
  | 'csv'
  | 'go'
  | 'java'
  | 'json'
  | 'markdown'
  | 'php'
  | 'bash'
  | 'powershell'
  | 'typescript'
  | 'url'
  | 'yaml'
  | 'python'
  | 'sql';
