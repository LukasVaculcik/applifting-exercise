export interface Props {
  children: React.ReactNode;
}

export interface Article {
  id: number;
  datetime: Date;
  author: string;
  title: string;
  perex: string;
  text: string;
  slug: string;
}

export interface Comment {
  id: number;
  parent_id: number;
  datetime: Date;
  author: string;
  text: string;
}
